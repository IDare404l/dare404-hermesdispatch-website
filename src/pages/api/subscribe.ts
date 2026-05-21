import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    let email: string | undefined;
    
    // Try JSON first, then form data
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = body.email?.toString().toLowerCase().trim();
    } else {
      const formData = await request.formData();
      email = formData.get('email')?.toString().toLowerCase().trim();
    }
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Valid email required' 
      }), { status: 400 });
    }
    
    // Get KV binding from environment (set via wrangler.toml)
    const SUBSCRIBERS = locals.runtime?.env?.SUBSCRIBERS as KVNamespace | undefined;
    
    // Check if already subscribed in KV
    if (SUBSCRIBERS) {
      const existing = await SUBSCRIBERS.get(`sub:${email}`);
      if (existing) {
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Already subscribed' 
        }));
      }
    }
    
    // Add subscriber to KV
    if (SUBSCRIBERS) {
      await SUBSCRIBERS.put(`sub:${email}`, JSON.stringify({
        email,
        subscribedAt: new Date().toISOString(),
        confirmed: true
      }));
    }
    
    // Send welcome email via Resend
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'daily@hermesdispatch.dev',
            to: email,
            subject: 'Welcome to The Hermes Dispatch',
            text: `You're subscribed! Look out for daily AI automation insights at 3pm EST.`,
            reply_to: 'dare404@hermesdispatch.dev'
          })
        });
      } catch (emailError) {
        console.error('[Newsletter] Welcome email failed:', emailError);
        // Continue - subscriber is saved even if welcome email fails
      }
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Subscribed successfully!',
    }));
    
  } catch (error) {
    console.error('[Newsletter] Subscribe error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Subscription failed. Please try again.' 
    }), { status: 500 });
  }
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    message: 'Newsletter subscription API active',
    version: '1.0'
  }));
};
