(function() {
  'use strict';

  function trackOutbound(el) {
    const href = el.getAttribute('href');
    if (!href) return;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;

    const isExternal = /^https?:\/\//i.test(href) && !href.includes(location.hostname);
    const isAffiliate = /(amazon\.com|tradingview\.com|aff_id=|tag=)/i.test(href);
    const isTrackedInternal = /^\/go\//.test(href);

    if (!isExternal && !isTrackedInternal) return;

    const source = el.dataset.source || document.body.dataset.pageSource || 'site';
    const slug = el.dataset.slug || el.textContent.trim().slice(0, 40) || 'unknown';
    const url = encodeURIComponent(href);

    // Fire-and-forget beacon to /api/track-click
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(`/api/track-click/?slug=${encodeURIComponent(slug)}&source=${encodeURIComponent(source)}&url=${url}`);
      } else {
        fetch(`/api/track-click/?slug=${encodeURIComponent(slug)}&source=${encodeURIComponent(source)}&url=${url}`, { method: 'POST', mode: 'no-cors' }).catch(() => {});
      }
    } catch (e) {
      // ignore tracking errors
    }
  }

  function init() {
    document.querySelectorAll('a[href]').forEach(function(el) {
      // Skip if already wired
      if (el.dataset.tracked === 'true') return;
      el.dataset.tracked = 'true';

      // Only track likely affiliate/external links
      const href = el.getAttribute('href') || '';
      const isLikelyAffiliate = /(amazon\.com|tradingview\.com|aff_id=|tag=dare404|go\/)/i.test(href);
      const isExternal = /^https?:\/\//i.test(href) && !href.includes(location.hostname);

      if (isLikelyAffiliate || isExternal) {
        el.addEventListener('click', function() { trackOutbound(el); });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init for dynamically injected links
  const observer = new MutationObserver(function(mutations) {
    let shouldInit = false;
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(n) {
        if (n.nodeType === 1 && (n.tagName === 'A' || n.querySelector?.('a[href]'))) {
          shouldInit = true;
        }
      });
    });
    if (shouldInit) init();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
