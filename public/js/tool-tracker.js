
(function() {
  if (typeof window === 'undefined') return;
  const path = window.location.pathname;
  // Only track tool and compare pages
  if (!path.startsWith('/tools/') && !path.startsWith('/compare/')) return;
  // Avoid duplicate pings on SPA-style soft navigations (Astro does full page loads, so per load is fine)
  try {
    fetch('/api/tool-usage/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool_path: path }),
      keepalive: true
    }).catch(() => {});
  } catch (e) {}
})();
