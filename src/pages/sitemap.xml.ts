import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = (context.site?.toString() || 'https://hermesdispatch.dev').replace(/\/$/, '');

  const pages = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/newsletter/', changefreq: 'daily', priority: 0.9 },
    { path: '/directory/', changefreq: 'daily', priority: 0.9 },
    { path: '/hardware/', changefreq: 'weekly', priority: 0.9 },
    { path: '/crypto/', changefreq: 'weekly', priority: 0.9 },
    { path: '/invest/', changefreq: 'weekly', priority: 0.9 },
    { path: '/answers/', changefreq: 'daily', priority: 0.9 },
    { path: '/guides/', changefreq: 'weekly', priority: 0.8 },
    { path: '/reviews/', changefreq: 'weekly', priority: 0.7 },
    { path: '/advertise/', changefreq: 'monthly', priority: 0.7 },
    { path: '/dashboard/', changefreq: 'daily', priority: 0.8 },
    { path: '/subscribe/', changefreq: 'monthly', priority: 0.6 },
    { path: '/about-dare404/', changefreq: 'monthly', priority: 0.6 },
    { path: '/about-igor/', changefreq: 'monthly', priority: 0.6 },
    { path: '/privacy/', changefreq: 'monthly', priority: 0.5 },
    { path: '/tools/', changefreq: 'daily', priority: 0.9 },
    { path: '/llms.txt', changefreq: 'daily', priority: 0.7 },
    { path: '/compare/gpus/', changefreq: 'weekly', priority: 0.8 },
    { path: '/compare/mini-pcs/', changefreq: 'weekly', priority: 0.8 },
    { path: '/compare/recommend/', changefreq: 'weekly', priority: 0.8 },
    // Tools — keep in sync with src/pages/tools/*.astro
    { path: '/tools/agent-hardware-sizer/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-hosting-cost-comparator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/affiliate-revenue-estimator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-benchmark-selector/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-marketplace-fee-comparator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-memory-cost-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-memory-cost-calculator-v2/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-observability-cost-comparator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/agent-routing-cost-comparator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/ai-agent-compliance-checker/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/ai-hardware-deal-tracker/', changefreq: 'daily', priority: 0.8 },
    { path: '/tools/ai-image-generation-cost-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/ai-voice-agent-cost-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/browser-use-cost-estimator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/context-window-cheat-sheet/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/crypto-staking-vs-inference-yield/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/crypto-tax-loss-harvester/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/gpu-benchmark-comparator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/gpu-cloud-vs-buy-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/gpu-power-cooling-sizer/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/hardware-resale-estimator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/hashrate-to-inference-converter/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/inference-engine-selector/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/inference-engine-selector-v2/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/local-llm-roi-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/mcp-server-cost-estimator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/miner-pivot-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/mini-pc-recommender/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/newsletter-prompt-generator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/newsletter-prompt-generator-v2/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/no-code-agent-builder-selector/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/open-source-llm-selector/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/quantization-advisor/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/startup-runway-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/tokens-per-watt-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/vram-calculator/', changefreq: 'weekly', priority: 0.8 },
    { path: '/tools/webpage-tts-cost-estimator/', changefreq: 'weekly', priority: 0.8 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((url: any) => `  <url>
    <loc>${site}${url.path}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
