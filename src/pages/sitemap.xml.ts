import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.toString() || 'https://hermesdispatch.dev';

  // Static pages
  const staticPages = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/directory/', changefreq: 'daily', priority: 0.9 },
    { path: '/hardware/', changefreq: 'weekly', priority: 0.8 },
    { path: '/hardware/compare/', changefreq: 'weekly', priority: 0.8 },
    { path: '/crypto/', changefreq: 'weekly', priority: 0.8 },
    { path: '/crypto/roi/', changefreq: 'weekly', priority: 0.8 },
    { path: '/invest/', changefreq: 'weekly', priority: 0.8 },
    { path: '/invest/compare/', changefreq: 'weekly', priority: 0.8 },
    { path: '/answers/', changefreq: 'daily', priority: 0.9 },
    { path: '/guides/', changefreq: 'weekly', priority: 0.8 },
    { path: '/guides/build-local-llm-rig/', changefreq: 'weekly', priority: 0.8 },
    { path: '/guides/start-crypto-mining/', changefreq: 'weekly', priority: 0.8 },
    { path: '/reviews/', changefreq: 'weekly', priority: 0.7 },
    { path: '/advertise/', changefreq: 'monthly', priority: 0.7 },
    { path: '/about/', changefreq: 'monthly', priority: 0.7 },
    { path: '/methodology/', changefreq: 'monthly', priority: 0.7 },
    { path: '/newsletter/', changefreq: 'daily', priority: 0.9 },
    { path: '/subscribe/', changefreq: 'monthly', priority: 0.6 },
    { path: '/privacy/', changefreq: 'monthly', priority: 0.5 },
    { path: '/team/', changefreq: 'monthly', priority: 0.5 },
    { path: '/skills/', changefreq: 'monthly', priority: 0.5 },
    { path: '/timeline/', changefreq: 'monthly', priority: 0.5 },
    { path: '/agents/', changefreq: 'monthly', priority: 0.5 },
  ];

  // Directory entry anchors
  const dirFiles = Object.keys(import.meta.glob('../content/directory/*.md', { eager: true }));
  const entryUrls = dirFiles.map((path: string) => {
    const slug = path.replace(/^.*\//, '').replace(/\.md$/, '');
    return {
      path: `/directory/#${slug}`,
      changefreq: 'weekly',
      priority: 0.6
    };
  });

  const allUrls = [...staticPages, ...entryUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url: any) => `  <url>
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
