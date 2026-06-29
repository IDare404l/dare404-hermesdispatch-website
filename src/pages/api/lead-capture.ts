import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { tool_path, name, email, request_type, message } = body;

    if (!tool_path || !name || !email || !request_type) {
      return new Response(JSON.stringify({ ok: false, error: 'missing required fields' }), { status: 400 });
    }

    const runtime = (locals as any).runtime;
    if (runtime?.env?.LEADS_KV) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const payload = JSON.stringify({
        id,
        tool_path,
        name,
        email,
        request_type,
        message: message || '',
        created_at: new Date().toISOString()
      });
      await runtime.env.LEADS_KV.put(id, payload);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
};
