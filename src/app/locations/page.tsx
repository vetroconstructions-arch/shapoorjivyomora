import Link from "next/link";
import { Metadata } from "next";
import { SEOLocations, SEONRILocations, SEOConfigurations } from "@/lib/programmaticSEO";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pune Micro-Markets & Luxury Configurations Directory | Shapoorji Pallonji Vyomora",
  description: "Comprehensive Pune real estate directory for Shapoorji Pallonji Joyville Vyomora. Explore 2BHK in Hinjewadi, 3BHK in Mahalunge, 4BHK in Baner, Sky Duplexes, and global NRI hubs.",
  keywords: [
    "shapoorji pallonji vyomora",
    "joyville homes hinjewadi vyomora",
    "2bhk in hinjewadi",
    "3bhk in mahalunge",
    "4bhk in baner",
    "4bhk in mahalunge",
    "sky duplex pune",
    "pune micro markets",
    "nri real estate pune"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/locations",
  }
};

export default function LocationsPage() {
  const topTypologies = [
    { label: "2 BHK in Hinjewadi Phase 1", href: "/market/hinjewadi-phase-1/2bhk-in-hinjewadi/price-trends" },
    { label: "3 BHK in Mahalunge Township", href: "/market/mahalunge/3bhk-in-mahalunge/floor-plans" },
    { label: "4 BHK in Baner-Mahalunge", href: "/market/baner/4bhk-in-baner/brochure-download" },
    { label: "4 BHK in Mahalunge", href: "/market/mahalunge/4bhk-in-mahalunge/investment-roi" },
    { label: "Ultra Luxury Sky Duplex", href: "/market/pune-west/sky-duplex/amenities" },
    { label: "Simplex Luxury Residences", href: "/market/hinjewadi/simplex-luxury-homes/masterplan" },
    { label: "5 BHK Grand Sky Villas", href: "/market/pune/5bhk-sky-villas/future-growth" },
    { label: "Presidential Penthouses", href: "/market/mahalunge/penthouses/price-trends" },
    { label: "Apartments near Infosys Circle", href: "/market/infosys-circle-hinjewadi/2bhk-flats/location-benefits" },
    { label: "Residences near Metro Line 3", href: "/market/hinjewadi-metro/luxury-apartments/connectivity" },
    { label: "Homes near Balewadi High Street", href: "/market/balewadi-high-street/3bhk-apartments/lifestyle" },
    { label: "Best Flats for IT Professionals", href: "/market/rajiv-gandhi-infotech-park/best-flats-for-it-professionals/rental-yield" }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-32">
        <Breadcrumbs items={[{ label: "Directory", href: "/locations" }]} />
        
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-6 block">
            Pune Real Estate & Global NRI Matrix
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight tracking-wide mb-6">
            Explore Pune Hubs & <br/>
            <span className="text-[#1e2338]/60">Luxury Typologies.</span>
          </h1>
          <p className="text-lg text-[#1e2338]/70 font-light leading-relaxed">
            Discover why <strong>Shapoorji Pallonji Vyomora (Mahalunge-Hinjewadi)</strong> is the top real estate project in Pune across every targeted micro-market and configuration.
          </p>
        </div>

        {/* Featured High-Intent Typologies Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-[#0A192F] mb-6 border-b border-[#0A192F]/10 pb-4">
            Featured Residences & Typologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {topTypologies.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="bg-white p-4 rounded-sm border border-[#0A192F]/10 hover:border-[#C5A059] hover:shadow-md transition-all flex items-center justify-between group"
              >
                <span className="text-sm font-medium text-[#0A192F] group-hover:text-[#C5A059] transition-colors">{item.label}</span>
                <span className="text-[#C5A059] text-xs font-bold">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Pune Micro-Markets Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-[#0A192F] mb-6 border-b border-[#0A192F]/10 pb-4">
            All Pune Micro-Markets & Tech Hubs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
            {SEOLocations.map((location) => (
              <Link 
                key={location}
                href={`/market/${location}/luxury-apartments/investment-roi`}
                className="bg-white px-4 py-3 rounded-sm border border-[#0A192F]/5 hover:border-[#C5A059] hover:shadow-sm transition-all text-xs font-medium text-[#1e2338]/80 capitalize"
              >
                {location.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>

        {/* Global NRI Hubs Grid */}
        <div>
          <h2 className="text-2xl font-serif text-[#0A192F] mb-6 border-b border-[#0A192F]/10 pb-4">
            Global NRI Investment Portals
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
            {SEONRILocations.map((location) => (
              <Link 
                key={location}
                href={`/market/${location}/luxury-apartments/nri-investment`}
                className="bg-[#0A192F] px-4 py-3 rounded-sm border border-transparent hover:border-[#C5A059] hover:shadow-md transition-all text-xs font-medium text-white/90 capitalize"
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
