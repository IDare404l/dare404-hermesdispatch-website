/**
 * Cloudflare Pages Function: Newsletter Subscriber Handler
 * 
 * Receives POST requests, validates email, stores in KV.
 * Separate Python sync script handles Sheet writes + emails.
 */

export const onRequestPost = async ({ request, env }: { request: Request; env: any }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const body = await request.json() as { email?: string; source?: string };
    const email = body.email?.toLowerCase().trim();
    const source = body.source || 'hermesdispatch.dev';

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid email address' 
      }), { status: 400, headers: corsHeaders });
    }

    // Check for existing (either pending in KV or in KV as processed)
    const pendingKey = `pending:${email}`;
    const existingKey = `sub:${email}`;
    
    const [existingPending, existingProcessed] = await Promise.all([
      env.SUBSCRIBERS_KV?.get(pendingKey),
      env.SUBSCRIBERS_KV?.get(existingKey)
    ]);
    
    if (existingPending || existingProcessed) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Already subscribed!' 
      }), { status: 200, headers: corsHeaders });
    }

    // Store in KV with pending status (TTL: 7 days)
    const subscriberData = JSON.stringify({
      email: email,
      source: source,
      timestamp: new Date().toISOString(),
      status: 'pending',
      welcome_sent: false
    });

    await env.SUBSCRIBERS_KV?.put(pendingKey, subscriberData, { expirationTtl: 604800 });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Welcome to The Dispatch! Check your inbox shortly for confirmation.' 
    }), { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Something went wrong. Please try again.' 
    }), { status: 500, headers: corsHeaders });
  }
};
