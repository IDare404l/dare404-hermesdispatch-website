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
    const body = await request.json() as { email?: string };
    const email = body.email?.toLowerCase().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email address' }), {
        status: 400, headers: corsHeaders
      });
    }

    const runtime = (locals as any)?.runtime;
    const kv = runtime?.env?.SUBSCRIBERS_KV || runtime?.bindings?.SUBSCRIBERS_KV;

    if (!kv) {
      console.error('SUBSCRIBERS_KV not bound — unsubscribe NOT persisted');
      return new Response(JSON.stringify({
        success: false,
        status: 'error',
        error: 'Unsubscribe service temporarily unavailable. Please try again later.'
      }), { status: 503, headers: corsHeaders });
    }

    const pendingKey = `pending:${email}`;
    const subKey = `sub:${email}`;
    const unsubKey = `unsub:${email}`;

    // Remove from subscriber and pending sets
    await Promise.all([
      kv.delete(pendingKey),
      kv.delete(subKey)
    ]);

    // Record unsubscribe so sync scripts never re-add them
    await kv.put(unsubKey, JSON.stringify({
      email,
      timestamp: new Date().toISOString(),
      source: 'one_click_unsubscribe'
    }), { expirationTtl: 31536000 });

    return new Response(JSON.stringify({
      success: true,
      status: 'unsubscribed',
      message: 'You have been unsubscribed. No further emails will be sent.'
    }), { status: 200, headers: corsHeaders });

  } catch (err) {
    console.error('Unsubscribe handler error:', err);
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
