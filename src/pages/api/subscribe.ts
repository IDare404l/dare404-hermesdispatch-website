import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = await request.json() as { email?: string; source?: string; ref?: string };
    const email = body.email?.toLowerCase().trim();
    const source = body.source || 'hermesmissionfreedom.ai';
    const ref = body.ref?.toLowerCase().trim() || '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email address' }), {
        status: 400, headers: corsHeaders
      });
    }

    // Get KV binding from Cloudflare runtime via Astro locals
    const runtime = (locals as any)?.runtime;
    const kv = runtime?.env?.SUBSCRIBERS_KV || runtime?.bindings?.SUBSCRIBERS_KV;

    if (!kv) {
      // Honest: KV not bound — we cannot persist the subscription
      console.error('SUBSCRIBERS_KV not bound — subscription NOT persisted');
      return new Response(JSON.stringify({
        success: false,
        status: 'error',
        error: 'Subscription service temporarily unavailable. Please try again later.'
      }), { status: 503, headers: corsHeaders });
    }

    const pendingKey = `pending:${email}`;
    const existingKey = `sub:${email}`;

    const [existingPending, existingProcessed] = await Promise.all([
      kv.get(pendingKey),
      kv.get(existingKey)
    ]);

    if (existingPending || existingProcessed) {
      return new Response(JSON.stringify({
        success: true,
        status: 'duplicate',
        message: 'Already subscribed!'
      }), { status: 200, headers: corsHeaders });
    }

    const data = JSON.stringify({
      email, source, ref,
      timestamp: new Date().toISOString(),
      status: 'pending',
      welcome_sent: false
    });

    await kv.put(pendingKey, data, { expirationTtl: 604800 });

    return new Response(JSON.stringify({
      success: true,
      status: 'stored',
      message: "Welcome to The Dispatch!"
    }), { status: 200, headers: corsHeaders });

  } catch (err) {
    console.error('Subscribe handler error:', err);
    return new Response(JSON.stringify({
      success: false,
      status: 'error',
      error: 'Something went wrong. Please try again later.'
    }), { status: 500, headers: corsHeaders });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
