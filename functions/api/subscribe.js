// Cloudflare Pages Function for Resend newsletter subscription
// Stores subscribers in memory (KV can be added later via dashboard)
const subscribers = new Set();

export async function onRequestPost(context) {
  const request = context.request;
  const url = new URL(request.url);
  const origin = request.headers.get('origin') || url.origin;
  
  // Allowed origins
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
    
    // Parse request body
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = body.email?.toString().toLowerCase().trim();
    } else {
      const formData = await request.formData();
      email = formData.get('email')?.toString().toLowerCase().trim();
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
    
    // Check if already subscribed (memory + KV)
    const SUBSCRIBERS = context.env?.SUBSCRIBERS;
    let alreadySubscribed = subscribers.has(email);
    
    if (SUBSCRIBERS && !alreadySubscribed) {
      const existing = await SUBSCRIBERS.get(`sub:${email}`);
      if (existing) {
        alreadySubscribed = true;
      }
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
    
    // Add to memory
    subscribers.add(email);
    
    // Add subscriber to KV if available
    if (SUBSCRIBERS) {
      await SUBSCRIBERS.put(`sub:${email}`, JSON.stringify({
        email,
        subscribedAt: new Date().toISOString(),
        confirmed: true
      }));
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
        // Continue - subscriber is saved even if Resend fails
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

// Handle preflight OPTIONS requests
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
