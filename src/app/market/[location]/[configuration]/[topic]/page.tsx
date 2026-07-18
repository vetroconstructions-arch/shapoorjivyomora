import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOLocations, SEOConfigurations, SEOTopics, generateSEOContent } from "@/lib/programmaticSEO";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface Props {
  params: Promise<{
    location: string;
    configuration: string;
    topic: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, configuration, topic } = await params;

  // Validate to prevent spam/junk URLs from hurting SEO
  if (!SEOLocations.includes(location) || !SEOConfigurations.includes(configuration) || !SEOTopics.includes(topic)) {
    return {};
  }

  const content = generateSEOContent(location, configuration, topic);

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
    },
    alternates: {
      canonical: `https://www.shapoorji-vyomora.com/market/${location}/${configuration}/${topic}`,
    }
  };
}

export default async function ProgrammaticSEOPage({ params }: Props) {
  const { location, configuration, topic } = await params;

  // Validate
  if (!SEOLocations.includes(location) || !SEOConfigurations.includes(configuration) || !SEOTopics.includes(topic)) {
    notFound();
  }

  const content = generateSEOContent(location, configuration, topic);

  const breadcrumbItems = [
    { label: "Market Insights", href: "/articles" },
    { label: location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), href: `/market/${location}/${SEOConfigurations[0]}/${SEOTopics[0]}` },
    { label: content.title, href: `/market/${location}/${configuration}/${topic}` }
  ];

  // Dynamic FAQ Schema Injection
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#0A192F] prose-p:text-gray-600 prose-p:font-light max-w-none">
          <h1 className="text-3xl md:text-5xl mb-8 leading-tight">{content.h1}</h1>
          
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl mb-12 border border-black/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full" />
             <p className="text-lg leading-relaxed mb-6">{content.p1}</p>
             <p className="text-lg leading-relaxed">{content.p2}</p>
          </div>

          <h2 className="text-2xl md:text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-medium mb-3 text-[#0A192F]">{faq.question}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
