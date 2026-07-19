export const prerender = false;

import type { APIRoute } from 'astro';

interface ClickEvent {
  event: 'affiliate_click';
  slug: string;
  target_url: string;
  source: string;
  referrer: string;
  user_agent: string;
  ip: string;
  clicked_at: string;
}

export const GET: APIRoute = async ({ params, url, request, locals, clientAddress }) => {
  const { slug } = params;
  const targetUrl = url.searchParams.get('url') || '';
  const source = url.searchParams.get('source') || 'website';

  // Fallback: if no URL provided, redirect to the directory entry
  if (!slug) {
    return new Response('Missing slug', { status: 400 });
  }

  let redirectUrl = targetUrl;
  if (!redirectUrl) {
    redirectUrl = `https://hermesdispatch.dev/directory/#${slug}`;
  }

  try {
    new URL(redirectUrl);
  } catch {
    return new Response(`Invalid destination URL: ${redirectUrl}`, { status: 400 });
  }

  const click: ClickEvent = {
    event: 'affiliate_click',
    slug,
    target_url: redirectUrl,
    source,
    referrer: request.headers.get('referer') || '',
    user_agent: request.headers.get('user-agent') || '',
    ip: clientAddress || '',
    clicked_at: new Date().toISOString(),
  };

  const runtime = (locals as any)?.runtime;
  const kv = runtime?.env?.CLICKS_KV || runtime?.env?.SUBSCRIBERS_KV;

  if (kv) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const counterKey = `clicks:${today}:${slug}`;
      const current = await kv.get(counterKey);
      await kv.put(counterKey, String((parseInt(current || '0', 10)) + 1));

      const listKey = `clicks:${today}:events`;
      const existing = await kv.get(listKey);
      const events: ClickEvent[] = existing ? JSON.parse(existing) : [];
      events.push(click);
      if (events.length > 500) events.shift();
      await kv.put(listKey, JSON.stringify(events));
    } catch (e) {
      console.error('Failed to persist click to KV:', e);
    }
  }

  console.log(JSON.stringify(click));

  return Response.redirect(redirectUrl, 302);
};
