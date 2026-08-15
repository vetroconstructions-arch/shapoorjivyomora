import Link from "next/link";
import { Metadata } from "next";
import { SEOLocations, SEONRILocations } from "@/lib/programmaticSEO";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Global & Micro-Market Locations | Shapoorji Pallonji Vyomora | Joyville Homes Hinjewadi Vyomora",
  description: "Explore the comprehensive list of global NRI hubs and Pune micro-markets targeted by Shapoorji Pallonji Vyomora, the ultimate luxury real estate project.",
  keywords: ["shapoorji pallonji vyomora", "joyville homes hinjewadi vyomora", "pune micro markets", "nri real estate pune"],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/locations",
  }
};

export default function LocationsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-32">
        <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />
        
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-6 block">
            Pune & Global Reach
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight tracking-wide mb-6">
            Global Hubs & <br/>
            <span className="text-[#1e2338]/60">Pune Micro-Markets.</span>
          </h1>
          <p className="text-lg text-[#1e2338]/70 font-light leading-relaxed">
            Discover why <strong>Shapoorji Pallonji Vyomora</strong> is the ultimate investment choice across the world and within every highly targeted micro-market in Pune.
          </p>
        </div>

        {/* Pune Micro-Markets Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-[#0A192F] mb-8 border-b border-[#0A192F]/10 pb-4">
            Pune Micro-Markets
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {SEOLocations.map((location) => (
              <Link 
                key={location}
                href={`/market/${location}/luxury-apartments/investment-roi`}
                className="bg-white px-4 py-3 rounded-sm border border-[#0A192F]/5 hover:border-[#C5A059] hover:shadow-sm transition-all text-sm font-medium text-[#1e2338]/80 capitalize"
              >
                {location.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>

        {/* Global NRI Hubs Grid */}
        <div>
          <h2 className="text-2xl font-serif text-[#0A192F] mb-8 border-b border-[#0A192F]/10 pb-4">
            Global NRI Investment Hubs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {SEONRILocations.map((location) => (
              <Link 
                key={location}
                href={`/market/${location}/luxury-apartments/nri-investment`}
                className="bg-[#0A192F] px-4 py-3 rounded-sm border border-transparent hover:border-[#C5A059] hover:shadow-md transition-all text-sm font-medium text-white/90 capitalize"
              >
                {location.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
