import { SEOLocations, SEOConfigurations, SEOTopics } from '@/lib/programmaticSEO';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const URLS_PER_SITEMAP = 2500;

  // We have 25 * 20 * 25 = 12,500 programmatic combinations
  const totalProgrammaticUrls = SEOLocations.length * SEOConfigurations.length * SEOTopics.length;
  
  // Calculate total chunks needed
  const totalChunks = Math.ceil(totalProgrammaticUrls / URLS_PER_SITEMAP);

  // Generate sitemap index XML
  let sitemapIndexXML = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/core-sitemap.xml</loc>
  </sitemap>`;

  for (let i = 0; i < totalChunks; i++) {
    sitemapIndexXML += `
  <sitemap>
    <loc>${baseUrl}/sitemaps/${i}.xml</loc>
  </sitemap>`;
  }

  sitemapIndexXML += `\n</sitemapindex>`;

  return new Response(sitemapIndexXML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
