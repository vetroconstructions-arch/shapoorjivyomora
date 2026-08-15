import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics } from '@/lib/programmaticSEO';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const URLS_PER_SITEMAP = 2500;

  const allLocations = [...SEOLocations, ...SEONRILocations];
  
  // We have 48 locations * 20 configs * 25 topics = ~24,000 programmatic combinations
  const totalProgrammaticUrls = allLocations.length * SEOConfigurations.length * SEOTopics.length;
  
  // Calculate total chunks needed
  const totalChunks = Math.ceil(totalProgrammaticUrls / URLS_PER_SITEMAP);

  // Generate sitemap index XML
  let sitemapIndexXML = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

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
