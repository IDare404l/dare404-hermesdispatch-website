export const prerender = false;

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const { slug } = context.params;
  const url = context.url.searchParams.get('url') || '';
  const source = context.url.searchParams.get('source') || 'website';

  if (!slug || !url) {
    return new Response('Missing slug or url', { status: 400 });
  }

  // Log click to console for now. Replace with D1/KV binding for production analytics.
  console.log(JSON.stringify({
    event: 'affiliate_click',
    slug,
    target_url: url,
    source,
    referrer: context.request.headers.get('referer') || '',
    user_agent: context.request.headers.get('user-agent') || '',
    ip: context.clientAddress || '',
    clicked_at: new Date().toISOString()
  }));

  return Response.redirect(url, 302);
}
