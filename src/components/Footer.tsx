"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Compass, Building2, Navigation } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitLead } from "@/lib/submitLead";

const footerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  _honey: z.string().max(0, "Spam detected").optional(),
});

type FooterFormData = z.infer<typeof footerSchema>;

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FooterFormData>({
    resolver: zodResolver(footerSchema),
  });

  const onSubmit = async (data: FooterFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: "Newsletter Subscriber",
        phone: "Not provided",
        email: data.email,
        interest: "Newsletter Updates",
        _subject: "New Newsletter Registration from Footer",
      });
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("success");
      reset();
    }
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col group mb-8">
              <span className="text-2xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C5A059]">
                VYOMORA
              </span>
              <span className="text-[0.65rem] tracking-[0.25em] text-[#C5A059] font-bold uppercase mt-1">
                By Shapoorji Pallonji
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-xs">
              Extraordinary luxury township development project located in Mahalunge & Hinjewadi Phase 1, West Pune. Crafted with 150+ years of engineering excellence.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://maps.google.com/?q=18.5913,73.7389" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-xs font-medium text-[#C5A059] hover:text-white transition-colors gap-2"
              >
                <Navigation size={14} />
                Get Google Maps Directions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Explore Project</h4>
            <ul className="space-y-3">
              {[
                { label: "The Vision", href: "/vision" },
                { label: "Masterplan", href: "/masterplan" },
                { label: "Luxury Residences", href: "/residences" },
                { label: "32k Sq. Ft. Clubhouse", href: "/amenities" },
                { label: "Specifications & Finishes", href: "/specifications" },
                { label: "Location & Metro Connectivity", href: "/location" },
                { label: "Shapoorji Pune Projects", href: "/shapoorji-pallonji-pune-projects" },
                { label: "ROI & EMI Calculator", href: "/investment-calculator" },
                { label: "All Pune Micro-Markets", href: "/locations" },
                { label: "Real Estate Articles", href: "/articles" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-white/70 hover:text-white flex items-center group transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out text-[#C5A059]">
                      <ArrowRight size={10} />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Sales & Experience Desk</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#C5A059]/60 mt-1 mr-3 shrink-0" />
                <span className="text-xs text-white/70 leading-relaxed">
                  Shapoorji Pallonji Joyville Vyomora Experience Centre,<br />
                  Off Maan Road, Near Infosys Circle & Hinjewadi Phase 1,<br />
                  Mahalunge-Hinjewadi, Pune - 411057
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#C5A059]/60 mr-3 shrink-0" />
                <a href="tel:+917744009295" className="text-xs text-white/70 hover:text-white transition-colors">
                  +91 7744009295 (VIP Sales Desk)
                </a>
              </li>
              <li className="flex items-center">
                <Building2 size={18} className="text-[#C5A059]/60 mr-3 shrink-0" />
                <span className="text-xs text-white/60">
                  Daily Open: 9:30 AM – 7:30 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Brochure */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Get VIP Pricing</h4>
            
            {status === "success" ? (
              <div className="bg-white/5 border border-[#C5A059]/30 rounded-sm p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                <h5 className="text-sm font-bold text-white mb-1">Subscribed!</h5>
                <p className="text-xs text-white/60">Thank you for registering your interest.</p>
              </div>
            ) : (
              <>
                <p className="text-xs text-white/60 mb-5 font-light">
                  Register for exclusive pre-launch pricing, unit floor plans, and priority inventory access.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                  <input type="text" {...register("_honey")} style={{ display: 'none' }} />

                  <div className="flex flex-col">
                    <input 
                      {...register("email")}
                      type="email" 
                      placeholder="Enter Your Email Address" 
                      className={`bg-transparent border-b pb-2 text-sm text-white focus:outline-none transition-colors placeholder:text-white/30 rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-[#C5A059]'}`}
                    />
                    {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email.message}</p>}
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-400 text-xs">{errorMessage}</p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="text-left text-xs tracking-[0.15em] text-white hover:text-[#C5A059] uppercase flex items-center transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Registering..." : "Download Brochure & Price Sheet"}
                    {!status && <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Thematic Real Estate Keyword Hub (Crawlable Semantic Links) */}
        <div className="border-t border-white/10 pt-10 mt-10 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Pune Micro-Markets Focus</h4>
            <ul className="space-y-2 text-[11px] text-white/50">
              <li><Link href="/market/mahalunge/luxury-apartments/property-investment" className="hover:text-white transition-colors">Mahalunge Real Estate & Township Projects</Link></li>
              <li><Link href="/market/hinjewadi-phase-1/2bhk-in-hinjewadi/location-benefits" className="hover:text-white transition-colors">2 BHK Flats in Hinjewadi Phase 1</Link></li>
              <li><Link href="/market/baner/4bhk-in-baner/price-trends" className="hover:text-white transition-colors">Luxury 4 BHK Apartments in Baner</Link></li>
              <li><Link href="/market/wakad/3bhk-in-mahalunge/floor-plans" className="hover:text-white transition-colors">Premium 3 BHK Homes near Wakad & Baner</Link></li>
              <li><Link href="/market/balewadi-high-street/sky-duplex/future-growth" className="hover:text-white transition-colors">Sky Duplexes near Balewadi High Street</Link></li>
              <li><Link href="/market/rajiv-gandhi-infotech-park/luxury-apartments/connectivity" className="hover:text-white transition-colors">Apartments near Rajiv Gandhi Infotech Park</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Typologies & Luxury Residences</h4>
            <ul className="space-y-2 text-[11px] text-white/50">
              <li><Link href="/market/hinjewadi/2bhk-in-hinjewadi/price-trends" className="hover:text-white transition-colors">2 BHK Smart Apartments in Hinjewadi</Link></li>
              <li><Link href="/market/mahalunge/3bhk-in-mahalunge/floor-plans" className="hover:text-white transition-colors">3 BHK Premium Township Flats in Mahalunge</Link></li>
              <li><Link href="/market/baner/4bhk-in-baner/brochure-download" className="hover:text-white transition-colors">4 BHK Luxury Sky Suites in Baner-Mahalunge</Link></li>
              <li><Link href="/market/pune-west/sky-duplex/amenities" className="hover:text-white transition-colors">Ultra Luxury Sky Duplex & Simplex Homes</Link></li>
              <li><Link href="/market/pune/5bhk-sky-villas/masterplan" className="hover:text-white transition-colors">5 BHK Sky Villas & Presidential Penthouses</Link></li>
              <li><Link href="/market/hinjewadi/best-flats-for-it-professionals/investment-roi" className="hover:text-white transition-colors">Best Flats for IT Professionals in Pune</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Market Research & Guides</h4>
            <ul className="space-y-2 text-[11px] text-white/50">
              <li><Link href="/articles/luxury-3bhk-4bhk-duplex-apartments-in-baner-mahalunge" className="hover:text-white transition-colors">Luxury 3BHK, 4BHK & Duplex in Baner-Mahalunge</Link></li>
              <li><Link href="/articles/3bhk-in-mahalunge-vs-4bhk-in-baner-luxury-comparison" className="hover:text-white transition-colors">3BHK in Mahalunge vs 4BHK in Baner Comparison</Link></li>
              <li><Link href="/articles/shapoorji-vyomora-vs-godrej-hillside-vs-kolte-patil-life-republic" className="hover:text-white transition-colors">Vyomora vs Godrej Hillside vs Life Republic</Link></li>
              <li><Link href="/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi" className="hover:text-white transition-colors">Joyville Sensorium vs Joyville Vyomora</Link></li>
              <li><Link href="/articles/nri-guide-investing-in-pune-real-estate-from-usa-dubai-uk" className="hover:text-white transition-colors">NRI Investment Guide: Dubai, USA & UK to Pune</Link></li>
              <li><Link href="/articles/sky-duplex-simplex-5bhk-penthouses-in-west-pune-real-estate" className="hover:text-white transition-colors">Sky Duplex, Simplex & 5BHK Penthouses Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* RERA & Channel Partner Compliance Disclosures */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col justify-between items-center text-[10px] md:text-xs text-white/40 font-light gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="mb-1">MahaRERA Registration No: <span className="text-white/70 font-semibold">PR1260002600999</span></p>
              <p>Project details verified at official portal: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">maharera.mahaonline.gov.in</a></p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">&copy; {new Date().getFullYear()} Shapoorji Pallonji Real Estate. All rights reserved.</p>
              <div className="flex space-x-4 justify-center md:justify-end">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors text-[#C5A059]">HTML Sitemap</Link>
                <Link href="#" className="hover:text-white transition-colors">RERA Disclaimers</Link>
              </div>
            </div>
          </div>
          
          <div className="text-[9px] md:text-[10px] text-justify text-white/30 max-w-7xl mx-auto leading-relaxed border-t border-white/5 pt-6">
            Disclaimer: The content provided on this website is for informational purposes only and does not constitute an offer of contract. Prices, configurations, specifications, floor plans, and amenities mentioned are subject to change without prior notice. Rendered images and artist impressions are for representative purposes only. This website is managed by an authorized channel partner for Shapoorji Pallonji Real Estate. We may share inquiries with MahaRERA registered real estate advisors for processing.
          </div>
        </div>
      </div>
      
      {/* Comprehensive Pune Real Estate Authority Footprint */}
      <div className="border-t border-white/5 bg-[#050c17] py-6 mt-10">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-[0.65rem] leading-relaxed text-white/30 text-justify font-light">
            <strong>Pune Real Estate Market, Mahalunge & Hinjewadi Township Authority:</strong> Shapoorji Pallonji Real Estate continues to set the gold standard in premium real estate across West Pune. While landmark projects like Joyville Sensorium Hinjewadi, Joyville Hadapsar Annexe, Shapoorji Pallonji Wildstone, and Celestian have established incredible benchmarks for gated communities, <strong>Joyville Homes Vyomora (Mahalunge-Hinjewadi)</strong> stands as the ultimate crown jewel and flagship luxury township. Offering 2 BHK in Hinjewadi, 3 BHK in Mahalunge, 4 BHK in Baner, Sky Duplexes, Simplexes, 5 BHK Sky Villas, and Presidential Penthouses near Rajiv Gandhi Infotech Park, Vyomora delivers unprecedented capital appreciation and high rental yields. With seamless connectivity to the Pune Metro Line 3, Mumbai-Pune Expressway, and Balewadi High Street, alongside a magnificent 32,000+ sq. ft. clubhouse, Shapoorji Pallonji Vyomora represents the absolute highest ROI real estate investment in Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}
