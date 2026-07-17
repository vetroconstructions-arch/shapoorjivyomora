import { MetadataRoute } from 'next';
import { seoArticles } from '@/data/seoArticles';
import { SEOLocations, SEOConfigurations, SEOTopics } from '@/lib/programmaticSEO';

const baseUrl = 'https://shapoorji-vyomora.com';
const URLS_PER_SITEMAP = 2500;

// Pre-calculate all programmatic permutations globally to chunk them
const allProgrammaticUrls: string[] = [];
for (const location of SEOLocations) {
  for (const config of SEOConfigurations) {
    for (const topic of SEOTopics) {
      allProgrammaticUrls.push(`${baseUrl}/market/${location}/${config}/${topic}`);
    }
  }
}

// Total permutations = 12,500
const totalChunks = Math.ceil(allProgrammaticUrls.length / URLS_PER_SITEMAP);

export async function generateSitemaps() {
  // Return an array of objects like [{ id: 0 }, { id: 1 }, ... { id: 4 }]
  return Array.from({ length: totalChunks }).map((_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Always include the core site structure and handcrafted articles in the very first sitemap chunk (id === 0)
  if (id === 0) {
    const baseRoutes = [
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

    const articleRoutes = seoArticles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.9, 
    }));

    routes.push(...baseRoutes, ...articleRoutes);
  }

  // Calculate the chunk of programmatic URLs to serve for this specific sitemap ID
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const chunkedUrls = allProgrammaticUrls.slice(start, end);

  const programmaticRoutes = chunkedUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  routes.push(...programmaticRoutes);

  return routes;
}
