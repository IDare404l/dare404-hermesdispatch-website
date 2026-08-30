export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug') || 'unknown';
  const source = url.searchParams.get('source') || 'site';
  const targetUrl = url.searchParams.get('url') || '';

  const runtime = (locals as any)?.runtime;
  const kv = runtime?.env?.CLICKS_KV || runtime?.env?.SUBSCRIBERS_KV;

  if (kv) {
    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const key = `clicks:${dateStr}:${slug}`;
      const current = await kv.get(key);
      const count = parseInt(current || '0', 10) + 1;
      await kv.put(key, String(count));

      const eventKey = `clicks:${dateStr}:${slug}:events`;
      const eventsRaw = await kv.get(eventKey) || '[]';
      const eventsArr = JSON.parse(eventsRaw);
      eventsArr.push({ slug, source, url: targetUrl, ts: new Date().toISOString() });
      await kv.put(eventKey, JSON.stringify(eventsArr.slice(-100)));
    } catch (e) {
      console.error('Client click tracking error:', e);
    }
  }

  return new Response('OK', { status: 204 });
};
