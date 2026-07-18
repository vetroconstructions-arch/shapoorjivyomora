import Link from "next/link";
import { Metadata } from "next";
import { seoArticles } from "@/data/seoArticles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Real Estate Insights & Articles | Shapoorji Pallonji Vyomora Pune",
  description: "Read the latest insights on the Pune real estate market, covering luxury 2BHK, 3BHK, 4BHK flats, duplex homes, and investment trends in Baner, Mahalunge, and Hinjewadi.",
  keywords: ["Pune real estate market", "Baner real estate", "Mahalunge real estate", "Hinjewadi real estate market", "Shapoorji Pallonji Joyville Homes Vyomora"],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/articles",
  }
};

export default function ArticlesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Shapoorji Pallonji Vyomora Real Estate Blog",
    "description": "Insights on Pune real estate, Baner, Mahalunge, and Hinjewadi.",
    "url": "https://shapoorji-vyomora.com/articles",
    "blogPost": seoArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "url": `https://shapoorji-vyomora.com/articles/${article.slug}`,
      "datePublished": article.date
    }))
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Articles", href: "/articles" }]} />
        
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-6 block">
            Market Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight tracking-wide mb-6">
            Pune Real Estate <br/>
            <span className="text-[#1e2338]/60">Market & Trends.</span>
          </h1>
          <p className="text-lg text-[#1e2338]/70 font-light leading-relaxed">
            Discover ultra-advanced insights into the luxury real estate market across Hinjewadi, Mahalunge, and Baner. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoArticles.map((article) => (
            <Link 
              href={`/articles/${article.slug}`} 
              key={article.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-[#0A192F]/5 hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="text-xs text-[#C5A059] mb-4 tracking-wider uppercase font-semibold">
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <h2 className="text-2xl font-serif text-[#0A192F] mb-4 group-hover:text-[#C5A059] transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-[#1e2338]/60 font-light line-clamp-3 mb-6 flex-grow">
                {article.excerpt}
              </p>
              <span className="text-sm font-medium text-[#0A192F] uppercase tracking-wider flex items-center group-hover:underline">
                Read Article
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
