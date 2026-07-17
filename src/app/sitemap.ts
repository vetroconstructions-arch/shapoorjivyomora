import { MetadataRoute } from 'next';
import { seoArticles } from '@/data/seoArticles';
import { SEOLocations, SEOConfigurations, SEOTopics } from '@/lib/programmaticSEO';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shapoorji-vyomora.com';

  // Base routes
  const routes = [
    '',
    '/vision',
    '/residences',
    '/amenities',
    '/masterplan',
    '/specifications',
    '/location',
    '/articles',
    '/gallery',
    '/sustainability',
    '/updates',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Article Routes (Manually curated high-value content)
  const articleRoutes = seoArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.9, 
  }));

  // Programmatic SEO Silos (12,500+ Permutations)
  // We generate a subset here to prevent Vercel 50MB Serverless limits.
  // Google will crawl the rest via internal linking networks (if built), 
  // but for sitemap we push the most critical combinations:
  
  const programmaticRoutes: MetadataRoute.Sitemap = [];
  
  // To stay well within safe limits for a single Vercel serverless sitemap, 
  // we will inject the top 5,000 permutations here.
  for (const location of SEOLocations.slice(0, 10)) {
    for (const config of SEOConfigurations.slice(0, 10)) {
      for (const topic of SEOTopics.slice(0, 10)) {
        programmaticRoutes.push({
          url: `${baseUrl}/market/${location}/${config}/${topic}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        });
      }
    }
  }

  return [...routes, ...articleRoutes, ...programmaticRoutes];
}
