// Cloudflare Pages Function for API-free newsletter subscription
// Writes to KV + Google Sheets; welcome emails handled locally via queue sync

const subscribers = new Set();

export async function onRequestPost(context) {
  const request = context.request;
  const url = new URL(request.url);
  const origin = request.headers.get('origin') || url.origin;
  
  const allowedOrigins = [
    'https://hermesdispatch.dev',
    'https://hermesmissionfreedom.ai',
    'https://hermesdispatch.pages.dev',
    'http://localhost:4321',
    'http://localhost:8788'
  ];
  
  const corsOrigin = allowedOrigins.includes(origin) ? origin : 'https://hermesdispatch.dev';

  try {
    let email;
    let referrer = 'direct';
    
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = body.email?.toString().toLowerCase().trim();
      referrer = body.referrer || referrer;
    } else {
      const formData = await request.formData();
      email = formData.get('email')?.toString().toLowerCase().trim();
      referrer = formData.get('referrer') || referrer;
    }
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Valid email required' 
      }), { 
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': corsOrigin
        }
      });
    }
    
    // Check subscription status
    const SUBSCRIBERS = context.env?.SUBSCRIBERS;
    let existingData = null;
    let isResubscription = false;
    
    if (SUBSCRIBERS) {
      const existing = await SUBSCRIBERS.get(`sub:${email}`);
      if (existing) {
        existingData = JSON.parse(existing);
        // Check if previously unsubscribed (needs welcome again)
        if (existingData.unsubscribed === true || existingData.confirmed === false) {
          isResubscription = true;
        } else {
          // Already active subscriber
          return new Response(JSON.stringify({ 
            success: true, 
            message: 'Already subscribed'
          }), {
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': corsOrigin
            }
          });
        }
      }
    } else if (subscribers.has(email)) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Already subscribed'
      }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': corsOrigin
        }
      });
    }
    
    // Generate subscriber ID
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const subscriberId = `MF-${timestamp.toString(36).toUpperCase()}-${randomId}`;
    
    // Save to memory set
    subscribers.add(email);
    
    // Save to KV with welcome queue flag
    if (SUBSCRIBERS) {
      const kvData = {
        email,
        subscribedAt: new Date().toISOString(),
        confirmed: true,
        unsubscribed: false,
        needsWelcome: true,  // Flag for welcome email
        isResubscription: isResubscription
      };
      await SUBSCRIBERS.put(`sub:${email}`, JSON.stringify(kvData));
      
      // Also add to welcome queue list
      await SUBSCRIBERS.put(`welcome_queue:${email}`, JSON.stringify({
        email,
        source: 'hermesdispatch.dev',
        referrer: referrer,
        isResubscription: isResubscription,
        queuedAt: new Date().toISOString()
      }));
    }
    
    // Save to Google Sheets
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyaXVuFndQuBE5ubC6_vKqkMvt-aUqStPO5o9wL9-W_EdsC8tS6R3_9JBJ3MMc21XA/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: 'hermesdispatch.dev',
          referrer: referrer,
          timestamp: new Date().toISOString(),
          status: 'active',
          subscriberId: subscriberId,
          isResubscription: isResubscription
        })
      });
    } catch (e) {
      console.error('Google Sheets save failed:', e);
    }
    
    // API-FREE: No Resend welcome email here
    // Welcome emails are handled by local cronjob via KV sync
    console.log('[Newsletter] Welcome queued for:', email, isResubscription ? '(resubscription)' : '(new)');
        
    return new Response(JSON.stringify({ 
      success: true, 
      message: isResubscription ? 'Welcome back! You are resubscribed.' : 'Subscribed successfully!',
      id: subscriberId,
      resubscribed: isResubscription
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': corsOrigin
      }
    });
    
  } catch (error) {
    console.error('[Newsletter] Subscribe error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Subscription failed. Please try again.' 
    }), { 
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': corsOrigin
      }
    });
  }
}

export async function onRequestOptions(context) {
  const request = context.request;
  const origin = request.headers.get('origin') || '*';
  
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}
