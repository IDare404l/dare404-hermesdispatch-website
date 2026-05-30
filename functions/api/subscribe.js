// Cloudflare Pages Function for Resend + Google Sheets newsletter subscription
// Sends to Resend + stores in Google Sheets

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
    
    // Check if already subscribed
    const SUBSCRIBERS = context.env?.SUBSCRIBERS;
    let alreadySubscribed = subscribers.has(email);
    
    if (SUBSCRIBERS && !alreadySubscribed) {
      const existing = await SUBSCRIBERS.get(`sub:${email}`);
      if (existing) alreadySubscribed = true;
    }
    
    if (alreadySubscribed) {
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
    
    // Save to KV if available
    if (SUBSCRIBERS) {
      await SUBSCRIBERS.put(`sub:${email}`, JSON.stringify({
        email,
        subscribedAt: new Date().toISOString(),
        confirmed: true
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
          subscriberId: subscriberId
        })
      });
    } catch (e) {
      console.error('Google Sheets save failed:', e);
    }
    
    // Send to Resend audience
    const RESEND_API_KEY = context.env?.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/audiences/2c8cb9cc-4e5d-4a5b-9a5f-7f8c3a6c5e7f/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            email,
            first_name: null,
            last_name: null,
            unsubscribed: false
          })
        });
      } catch (resendError) {
        console.error('[Newsletter] Resend API error:', resendError);
      }
    }
    
    // Send welcome email
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'daily@hermesdispatch.dev',
            to: email,
            subject: 'Welcome to The Hermes Dispatch',
            text: "You're subscribed! Look out for daily AI automation insights at 3pm EST.",
            reply_to: 'dare404@hermesdispatch.dev'
          })
        });
      } catch (emailError) {
        console.error('[Newsletter] Welcome email failed:', emailError);
      }
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Subscribed successfully!',
      id: subscriberId
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
