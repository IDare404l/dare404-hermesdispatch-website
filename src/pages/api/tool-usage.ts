export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const tool_path = body.tool_path;
    if (!tool_path || typeof tool_path !== 'string' || (!tool_path.startsWith('/tools/') && !tool_path.startsWith('/compare/'))) {
      return new Response(JSON.stringify({ ok: false, error: 'invalid tool_path' }), { status: 400 });
    }

    const runtime = (locals as any).runtime;
    if (runtime?.env?.TOOL_USAGE) {
      const today = new Date().toISOString().slice(0, 10);
      const key = `${today}:${tool_path}`;
      const current = await runtime.env.TOOL_USAGE.get(key);
      const count = parseInt(current || '0', 10) + 1;
      await runtime.env.TOOL_USAGE.put(key, String(count));
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const runtime = (locals as any).runtime;
    const adminToken = runtime?.env?.ADMIN_TOKEN;
    const auth = request.headers.get('authorization');
    if (adminToken && auth !== `Bearer ${adminToken}`) {
      return new Response(JSON.stringify({ ok: false, error: 'unauthorized' }), { status: 401 });
    }

    const prefix = new URL(request.url).searchParams.get('date') || new Date().toISOString().slice(0, 10);
    const counts: Record<string, number> = {};

    if (runtime?.env?.TOOL_USAGE?.list) {
      const list = await runtime.env.TOOL_USAGE.list({ prefix });
      for (const key of list.keys) {
        const val = await runtime.env.TOOL_USAGE.get(key.name);
        counts[key.name.replace(`${prefix}:`, '')] = parseInt(val || '0', 10);
      }
    }

    return new Response(JSON.stringify({ ok: true, date: prefix, counts }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
};
