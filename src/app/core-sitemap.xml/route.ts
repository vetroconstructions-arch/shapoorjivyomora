export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  
  const pages = [
    { path: '', priority: '1.0', freq: 'daily' },
    { path: '/vision', priority: '0.8', freq: 'monthly' },
    { path: '/residences', priority: '0.9', freq: 'monthly' },
    { path: '/amenities', priority: '0.8', freq: 'monthly' },
    { path: '/masterplan', priority: '0.9', freq: 'monthly' },
    { path: '/specifications', priority: '0.7', freq: 'monthly' },
    { path: '/location', priority: '0.8', freq: 'monthly' },
    { path: '/gallery', priority: '0.8', freq: 'weekly' },
    { path: '/contact', priority: '0.7', freq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach((page) => {
    xml += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
