export const prerender = false;

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const days = parseInt(url.searchParams.get('days') || '7', 10);
  const password = url.searchParams.get('password') || '';
  const authHeader = context.request.headers.get('Authorization') || '';

  const runtime = context.locals.runtime;
  const adminToken = runtime.env?.ADMIN_TOKEN || '';

  // Allow either Bearer token header or ?password query param
  const isAuth = authHeader === `Bearer ${adminToken}` || password === adminToken;
  if (!isAuth) {
    return new Response('Unauthorized', { status: 401 });
  }

  const kv = runtime.env?.CLICKS_KV || runtime.env?.SUBSCRIBERS_KV;
  if (!kv) {
    return Response.json({ error: 'No KV binding available' }, { status: 500 });
  }

  const now = new Date();
  const clicksByDay: Record<string, Record<string, number>> = {};
  const slugTotals: Record<string, number> = {};
  const sourceTotals: Record<string, number> = {};

  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const prefix = `clicks:${dateStr}:`;
    let cursor: string | undefined;
    do {
      const listResult = await kv.list({ prefix, cursor });
      for (const key of listResult.keys) {
        if (key.name.endsWith(':events')) continue;
        const parts = key.name.split(':');
        const slug = parts.slice(2).join(':') || 'unknown';
        const source = parts[2] || 'unknown';
        const val = await kv.get(key.name);
        const count = parseInt(val || '0', 10);
        clicksByDay[dateStr] = clicksByDay[dateStr] || {};
        clicksByDay[dateStr][slug] = (clicksByDay[dateStr][slug] || 0) + count;
        slugTotals[slug] = (slugTotals[slug] || 0) + count;
        sourceTotals[source] = (sourceTotals[source] || 0) + count;
      }
      cursor = listResult.list_complete ? undefined : listResult.cursor;
    } while (cursor);
  }

  const sortedSlugs = Object.entries(slugTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50);

  return Response.json({
    days,
    total: Object.values(slugTotals).reduce((a, b) => a + b, 0),
    clicks_by_slug: Object.fromEntries(sortedSlugs),
    clicks_by_day: clicksByDay,
    sources: sourceTotals
  });
}
