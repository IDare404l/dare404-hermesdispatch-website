export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only accept POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { email } = await request.json();
      
      if (!email || !email.includes('@')) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'Invalid email' 
        }), {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        });
      }

      // Store in KV with email as key
      await env.SUBSCRIBERS.put(
        `email:${email.toLowerCase()}`, 
        JSON.stringify({
          email,
          subscribedAt: new Date().toISOString(),
          confirmed: false
        })
      );

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Subscribed!' 
      }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

    } catch (err) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Server error' 
      }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    }
  },
};
