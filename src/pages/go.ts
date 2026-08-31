import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url, redirect, locals }) => {
  const target = url.searchParams.get('url');
  const source = url.searchParams.get('source') || 'direct';

  if (!target) {
    return new Response('Missing target URL', { status: 400 });
  }

  // Track click if KV is available
  try {
    const runtime = (locals as any)?.runtime;
    const kv = runtime?.env?.CLICKS_KV || runtime?.bindings?.CLICKS_KV;
    if (kv) {
      const id = crypto.randomUUID();
      await kv.put(`click:${id}`, JSON.stringify({
        id,
        target,
        source,
        pathname: url.pathname,
        timestamp: new Date().toISOString()
      }));
    }
  } catch (err) {
    console.error('Click tracking error:', err);
  }

  // Validate target is http/https to prevent open redirect abuse
  if (!/^https?:\/\//i.test(target)) {
    return new Response('Invalid target URL', { status: 400 });
  }

  return redirect(target, 302);
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, { status: 204, headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }});
};
