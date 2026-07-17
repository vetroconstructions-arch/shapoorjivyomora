import { MetadataRoute } from 'next';
import { seoArticles } from '@/data/seoArticles';

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

  // Dynamic Article Routes for deep SEO penetration
  const articleRoutes = seoArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for targeted SEO keywords
  }));

  return [...routes, ...articleRoutes];
}
