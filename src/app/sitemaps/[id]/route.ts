import { seoArticles } from '@/data/seoArticles';
import { SEOLocations, SEOConfigurations, SEOTopics } from '@/lib/programmaticSEO';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const URLS_PER_SITEMAP = 2500;

  const params = await context.params;

  // params.id will be like "0.xml", extract just the number
  const chunkId = parseInt(params.id.replace('.xml', ''), 10);

  if (isNaN(chunkId)) {
    return new Response('Invalid sitemap ID', { status: 400 });
  }

  // Generate the global array of all permutations
  const allProgrammaticUrls: string[] = [];
  for (const location of SEOLocations) {
    for (const config of SEOConfigurations) {
      for (const topic of SEOTopics) {
        allProgrammaticUrls.push(`${baseUrl}/market/${location}/${config}/${topic}`);
      }
    }
  }

  // Calculate slice
  const start = chunkId * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const chunkedUrls = allProgrammaticUrls.slice(start, end);

  let urlsetXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Always inject the base routes into the very first sitemap (0.xml)
  if (chunkId === 0) {
    const baseRoutes = [
      '', '/vision', '/residences', '/amenities', '/masterplan',
      '/specifications', '/location', '/articles', '/gallery',
      '/sustainability', '/updates', '/contact'
    ].forEach((route) => {
      urlsetXML += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    });

    seoArticles.forEach((article) => {
      urlsetXML += `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
    });
  }

  // Inject the programmatic URLs for this chunk
  chunkedUrls.forEach((url) => {
    urlsetXML += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  urlsetXML += `\n</urlset>`;

  return new Response(urlsetXML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
