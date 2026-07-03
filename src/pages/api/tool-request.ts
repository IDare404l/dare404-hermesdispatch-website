import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = await request.json() as {
      name?: string;
      role?: string;
      problem?: string;
      inputs?: string;
      outputs?: string;
      audience?: string;
      contact?: string;
      agent_ready?: boolean;
      source?: string;
      submitted_at?: string;
    };

    const name = (body.name || 'Anonymous').toString().trim();
    const role = (body.role || 'human').toString().trim();
    const problem = (body.problem || '').toString().trim();
    const inputs = (body.inputs || '').toString().trim();
    const outputs = (body.outputs || '').toString().trim();
    const audience = (body.audience || 'other').toString().trim();
    const contact = (body.contact || '').toString().trim();
    const agent_ready = Boolean(body.agent_ready);
    const source = (body.source || 'hermesdispatch.dev').toString().trim();

    if (!problem || problem.length < 10) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Please describe the problem in at least 10 characters.'
      }), { status: 400, headers: corsHeaders });
    }

    const runtime = (locals as any)?.runtime;
    const kv = runtime?.env?.SUBSCRIBERS_KV || runtime?.bindings?.SUBSCRIBERS_KV;

    if (!kv) {
      console.error('SUBSCRIBERS_KV not bound — tool request NOT persisted');
      return new Response(JSON.stringify({
        success: false,
        error: 'Request service temporarily unavailable. Please try again later.'
      }), { status: 503, headers: corsHeaders });
    }

    const id = `req:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    const key = `tool_request:${id}`;

    const data = JSON.stringify({
      id,
      name,
      role,
      problem,
      inputs,
      outputs,
      audience,
      contact,
      agent_ready,
      source,
      submitted_at: body.submitted_at || new Date().toISOString(),
      status: 'pending_review'
    });

    await kv.put(key, data, { expirationTtl: 2592000 }); // 30 days

    return new Response(JSON.stringify({
      success: true,
      id,
      message: 'Tool request received. If it ships, it will appear in the Agent Toolkit.'
    }), { status: 200, headers: corsHeaders });

  } catch (err) {
    console.error('Tool request handler error:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'Something went wrong. Please try again later.'
    }), { status: 500, headers: corsHeaders });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
