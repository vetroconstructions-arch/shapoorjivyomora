import { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoArticles } from "@/data/seoArticles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface ArticleProps {
  params: {
    slug: string;
  };
}

// Generate static params for all articles to ensure fast loading and pre-rendering
export function generateStaticParams() {
  return seoArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Dynamically generate metadata for each article
export function generateMetadata({ params }: ArticleProps): Metadata {
  const article = seoArticles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Shapoorji Pallonji Joyville Vyomora`,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: ["Shapoorji Pallonji Real Estate"],
    },
  };
}

export default function ArticlePage({ params }: ArticleProps) {
  const article = seoArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Shapoorji Pallonji Real Estate",
      "url": "https://shapoorji-vyomora.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shapoorji Pallonji Real Estate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shapoorji-vyomora.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shapoorji-vyomora.com/articles/${article.slug}`
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Breadcrumbs 
          items={[
            { label: "Articles", href: "/articles" },
            { label: article.title, href: `/articles/${article.slug}` }
          ]} 
        />
        
        <article className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-[#0A192F]/5 mt-8">
          <header className="mb-10 pb-10 border-b border-[#0A192F]/10">
            <div className="text-sm text-[#C5A059] mb-6 tracking-widest uppercase font-semibold">
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight mb-8">
              {article.title}
            </h1>
            <p className="text-xl text-[#1e2338]/60 font-light leading-relaxed border-l-4 border-[#C5A059] pl-6 italic">
              {article.excerpt}
            </p>
          </header>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[#0A192F] prose-p:text-[#1e2338]/80 prose-p:font-light prose-p:leading-loose prose-a:text-[#C5A059] max-w-none">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
}
