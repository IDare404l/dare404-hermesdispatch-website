export const prerender = false;

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const auth = context.request.headers.get('Authorization');
  const expected = `Bearer ${context.locals.runtime.env?.ADMIN_TOKEN || ''}`;
  if (auth !== expected) {
    return new Response('Unauthorized', { status: 401 });
  }

  const url = new URL(context.request.url);
  const days = parseInt(url.searchParams.get('days') || '7', 10);
  const kv = context.locals.runtime.env?.CLICKS_KV || context.locals.runtime.env?.SUBSCRIBERS_KV;
  if (!kv) {
    return Response.json({ error: 'No KV binding available' }, { status: 500 });
  }

  const now = new Date();
  const results: Record<string, number> = {};
  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const keys = await kv.list({ prefix: `clicks:${dateStr}:` });
    for (const key of keys.keys) {
      if (key.name.startsWith(`clicks:${dateStr}:`) && !key.name.endsWith(':events')) {
        const slug = key.name.split(':').pop() || 'unknown';
        const val = await kv.get(key.name);
        const count = parseInt(val || '0', 10);
        results[slug] = (results[slug] || 0) + count;
      }
    }
  }

  return Response.json({ days, clicks_by_slug: results, total: Object.values(results).reduce((a, b) => a + b, 0) });
}
