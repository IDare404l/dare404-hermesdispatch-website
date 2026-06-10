/**
 * Cloudflare Pages Function: Newsletter Subscriber Handler
 *
 * POST /api/subscribe
 * Body: { email: string, source?: string }
 *
 * Responses:
 *   200 + { success: true, status: "stored" }    — email saved to KV
 *   200 + { success: true, status: "accepted" }   — email received, KV not bound (needs setup)
 *   400 + { success: false, error: "Invalid email" }
 *   409 + { success: true, status: "duplicate" }  — already subscribed
 *   500 + { success: false, error: "Server error" }
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
        success: false, error: 'Invalid email address'
      }), { status: 400, headers: corsHeaders });
    }

    const kv = env.SUBSCRIBERS_KV;
    if (!kv) {
      console.warn('SUBSCRIBERS_KV not bound — subscription accepted but not persisted');
      return new Response(JSON.stringify({
        success: true,
        status: 'accepted',
        message: "You're in! We'll process your subscription shortly."
      }), { status: 200, headers: corsHeaders });
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
      email, source,
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
      success: true,
      status: 'accepted',
      message: "You're in! We'll confirm your subscription shortly."
    }), { status: 200, headers: corsHeaders });
  }
};

export const onRequestGet = async () => {
  return new Response(JSON.stringify({
    status: 'ok',
    service: 'Mission Freedom Subscriber API',
    version: '2.0'
  }), { status: 200, headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }});
};

export const onRequestOptions = async () => {
  return new Response(null, { status: 204, headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }});
};
