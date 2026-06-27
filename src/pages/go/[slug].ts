export const prerender = false;

import type { APIContext } from 'astro';

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

export async function GET(context: APIContext) {
  const { slug } = context.params;
  const url = context.url.searchParams.get('url') || '';
  const source = context.url.searchParams.get('source') || 'website';

  if (!slug || !url) {
    return new Response(`Missing slug or url`, { status: 400 });
  }

  // Validate URL looks like a real destination
  try {
    new URL(url);
  } catch {
    return new Response(`Invalid destination URL: ${url}`, { status: 400 });
  }

  const click: ClickEvent = {
    event: 'affiliate_click',
    slug,
    target_url: url,
    source,
    referrer: context.request.headers.get('referer') || '',
    user_agent: context.request.headers.get('user-agent') || '',
    ip: context.clientAddress || '',
    clicked_at: new Date().toISOString(),
  };

  // Persist to KV for analytics aggregation
  const kv = context.locals.runtime.env?.CLICKS_KV || context.locals.runtime.env?.SUBSCRIBERS_KV;
  if (kv) {
    try {
      const today = new Date().toISOString().split('T')[0];
      // Increment daily counter per slug
      const counterKey = `clicks:${today}:${slug}`;
      const current = await kv.get(counterKey);
      await kv.put(counterKey, String((parseInt(current || '0', 10)) + 1));

      // Append click event to a daily list (limit to avoid unbounded growth)
      const listKey = `clicks:${today}:events`;
      const existing = await kv.get(listKey);
      const events: ClickEvent[] = existing ? JSON.parse(existing) : [];
      events.push(click);
      // Keep only last 500 events per day
      if (events.length > 500) events.shift();
      await kv.put(listKey, JSON.stringify(events));
    } catch (e) {
      console.error('Failed to persist click to KV:', e);
    }
  }

  // Always log to console for wrangler tail / debugging
  console.log(JSON.stringify(click));

  return Response.redirect(url, 302);
}
