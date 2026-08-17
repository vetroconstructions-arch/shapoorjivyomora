import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { seoArticles } from "@/data/seoArticles";
import { SEOLocations, SEONRILocations } from "@/lib/programmaticSEO";

export const metadata: Metadata = {
  title: "HTML Sitemap & Pune Real Estate Master Index | Shapoorji Pallonji Vyomora",
  description: "Complete HTML site index for Shapoorji Pallonji Joyville Vyomora. Access all project pages, Pune micro-markets, residences, articles, and investment tools.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/sitemap",
  }
};

export default function HTMLSitemapPage() {
  const mainPages = [
    { name: "Homepage & Project Showcase", href: "/" },
    { name: "The Vision & Developer Legacy", href: "/vision" },
    { name: "Residences, Floor Plans & Sky Duplexes", href: "/residences" },
    { name: "32,000+ sq. ft. Clubhouse & Amenities", href: "/amenities" },
    { name: "Masterplan & Site Layout", href: "/masterplan" },
    { name: "Specifications & Premium Finishes", href: "/specifications" },
    { name: "Location, Metro Line 3 & Transit Map", href: "/location" },
    { name: "Shapoorji Pallonji Pune Projects Portfolio", href: "/shapoorji-pallonji-pune-projects" },
    { name: "Investment & EMI ROI Calculator", href: "/investment-calculator" },
    { name: "Real Estate Market Articles & Research", href: "/articles" },
    { name: "Pune Micro-Markets & Typology Directory", href: "/locations" },
    { name: "Sales Desk & VIP Site Visit Booking", href: "/contact" }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-32">
        <Breadcrumbs items={[{ label: "HTML Sitemap", href: "/sitemap" }]} />
        
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
            Google Crawl Index
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0A192F] leading-tight mb-4">
            Master Site Index & Navigation Map
          </h1>
          <p className="text-gray-600 font-light leading-relaxed">
            Direct crawl paths and index of all sections, residential configurations, research articles, and Pune micro-market landing pages for <strong>Shapoorji Pallonji Joyville Vyomora</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-xl font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3">
              Core Project Sections
            </h2>
            <ul className="space-y-3 text-sm">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-2">
                    <span className="text-[#C5A059]">›</span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Articles */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-xl font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3">
              Real Estate Articles
            </h2>
            <ul className="space-y-3 text-sm">
              {seoArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/articles/${article.slug}`} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-start gap-2 line-clamp-2">
                    <span className="text-[#C5A059] mt-0.5">›</span>
                    <span>{article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Micro-Markets */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-xl font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3">
              Top Pune Hubs & NRI Portals
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SEOLocations.slice(0, 12).map((loc) => (
                <li key={loc}>
                  <Link href={`/market/${loc}/luxury-apartments/investment-roi`} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-2 capitalize">
                    <span className="text-[#C5A059]">›</span>
                    {loc.replace(/-/g, " ")} Real Estate
                  </Link>
                </li>
              ))}
              {SEONRILocations.slice(0, 6).map((nri) => (
                <li key={nri}>
                  <Link href={`/market/${nri}/luxury-apartments/nri-investment`} className="text-[#0A192F] hover:text-[#C5A059] transition-colors font-semibold flex items-center gap-2 capitalize">
                    <span className="text-[#C5A059]">›</span>
                    {nri.replace(/-/g, " ")} NRI Property Portal
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
