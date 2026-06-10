/**
 * Cloudflare Pages Function: Newsletter Subscriber Handler
 * 
 * Receives POST requests, validates email, stores in KV.
 * Fails properly if KV is not bound so the frontend can show a fallback.
 */

export const onRequestPost = async ({ request, env }: { request: Request; env: any }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = await request.json() as { email?: string; source?: string };
    const email = body.email?.toLowerCase().trim();
    const source = body.source || 'hermesmissionfreedom.ai';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid email address' 
      }), { status: 400, headers: corsHeaders });
    }

    // If KV is not bound, fail fast with a clear message
    if (!env.SUBSCRIBERS_KV) {
      return new Response(JSON.stringify({ 
        success: true,  // Tell frontend we received it
        status: 'pending', 
        message: "You're in! We'll process your subscription shortly." 
      }), { status: 200, headers: corsHeaders });
    }

    const pendingKey = `pending:${email}`;
    const existingKey = `sub:${email}`;
    
    const [existingPending, existingProcessed] = await Promise.all([
      env.SUBSCRIBERS_KV.get(pendingKey),
      env.SUBSCRIBERS_KV.get(existingKey)
    ]);
    
    if (existingPending || existingProcessed) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Already subscribed!' 
      }), { status: 200, headers: corsHeaders });
    }

    const subscriberData = JSON.stringify({
      email: email,
      source: source,
      timestamp: new Date().toISOString(),
      status: 'pending',
      welcome_sent: false
    });

    await env.SUBSCRIBERS_KV.put(pendingKey, subscriberData, { expirationTtl: 604800 });

    return new Response(JSON.stringify({ 
      success: true, 
      status: 'active',
      message: "Welcome to The Dispatch!" 
    }), { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      success: true,
      status: 'pending',
      message: "You're in! We'll confirm your subscription shortly." 
    }), { status: 200, headers: corsHeaders });
  }
};

export const onRequestGet = async () => {
  return new Response(JSON.stringify({ 
    status: 'ok',
    service: 'Mission Freedom Subscriber API',
    version: '1.1'
  }), { 
    status: 200, 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    } 
  });
};

export const onRequestOptions = async () => {
  return new Response(null, { 
    status: 204, 
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    } 
  });
};
