"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Newsletter Registration",
          _captcha: "false",
          _autoresponse: "Thank you for subscribing to updates from Shapoorji Pallonji Vyomora. We will keep you informed about our latest news and exclusive offers.",
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col group mb-8">
              <span className="text-2xl font-serif tracking-widest text-white">
                VYOMORA
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-white/50 uppercase mt-1">
                By Shapoorji Pallonji
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-xs">
              Luxury living designed around tomorrow. An architectural landmark crafted for elevated urban living in Hinjewadi, Pune.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all duration-300">
                  <span className="sr-only">Social {i}</span>
                  <div className="w-4 h-4 bg-current" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Experience</h4>
            <ul className="space-y-4">
              {[
                { label: "The Vision", href: "/vision" },
                { label: "Masterplan", href: "/masterplan" },
                { label: "Residences", href: "/residences" },
                { label: "Amenities", href: "/amenities" },
                { label: "Location", href: "/location" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white flex items-center group transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out text-[#C5A059]">
                      <ArrowRight size={12} />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#C5A059]/60 mt-1 mr-4 shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Vyomora by Shapoorji Pallonji,<br />
                  Off Maan Village Road, Near Phase 1,<br />
                  Hinjawadi, Pune - 411057
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#C5A059]/60 mr-4 shrink-0" />
                <a href="tel:+917744009295" className="text-sm text-white/70 hover:text-white transition-colors">
                  +91 7744009295
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Stay Updated</h4>
            
            {status === "success" ? (
              <div className="bg-white/5 border border-[#C5A059]/30 rounded-sm p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                <h5 className="text-sm font-bold text-white mb-1">Subscribed!</h5>
                <p className="text-xs text-white/60">Thank you for registering your interest.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-white/60 mb-6 font-light">
                  Register your interest to receive exclusive updates about the project.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                  <input type="text" {...register("_honey")} style={{ display: 'none' }} />

                  <div className="flex flex-col">
                    <input 
                      {...register("email")}
                      type="email" 
                      placeholder="Email Address" 
                      className={`bg-transparent border-b pb-2 text-base text-white focus:outline-none transition-colors placeholder:text-white/30 rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-[#C5A059]'}`}
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
                    {status === "loading" ? "Registering..." : "Register Now"}
                    {!status && <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* SEO Articles Links (Visually Minimal) */}
        <div className="border-t border-white/10 pt-8 mt-12 mb-4">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-4 text-center md:text-left">Market Insights & Real Estate Trends</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start">
            <li>
              <Link href="/articles/luxury-3bhk-4bhk-duplex-apartments-in-baner-mahalunge" className="text-[10px] text-white/40 hover:text-white transition-colors">
                Luxury 3BHK, 4BHK & Duplex in Baner-Mahalunge
              </Link>
            </li>
            <li>
              <Link href="/articles/premium-2bhk-flats-near-hinjewadi-it-park" className="text-[10px] text-white/40 hover:text-white transition-colors">
                Premium 2BHK Flats Near Hinjewadi IT Park
              </Link>
            </li>
            <li>
              <Link href="/articles/shapoorji-pallonji-joyville-vyomora-township-project-details" className="text-[10px] text-white/40 hover:text-white transition-colors">
                Shapoorji Pallonji Joyville Vyomora Project Details
              </Link>
            </li>
            <li>
              <Link href="/articles" className="text-[10px] text-white/40 hover:text-[#C5A059] transition-colors underline underline-offset-2">
                View All Articles
              </Link>
            </li>
          </ul>
        </div>

        {/* RERA & Disclaimer */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col justify-between items-center text-[10px] md:text-xs text-white/40 font-light gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="mb-1">MahaRERA Registration No: <span className="text-white/60 font-medium">PR1260002600999</span></p>
              <p>Available at website: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">maharera.mahaonline.gov.in</a></p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">&copy; {new Date().getFullYear()} Shapoorji Pallonji Real Estate. All rights reserved.</p>
              <div className="flex space-x-4 justify-center md:justify-end">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
          
          <div className="text-[9px] md:text-[10px] text-justify text-white/30 max-w-7xl mx-auto leading-relaxed border-t border-white/5 pt-6">
            Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images are for representation purposes only. This is not the official website. This website is operated by an authorized channel partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us.
          </div>
          
          {/* Visually Hidden SEO Internal Linking Engine (Google Bot Only) */}
          <div className="sr-only">
            <h3>Popular Searches for Pune Real Estate</h3>
            <ul>
              <li><Link href="/market/hinjewadi/luxury-apartments/price-trends">Shapoorji Pallonji Vyomora Price</Link></li>
              <li><Link href="/market/hinjewadi/luxury-apartments/floor-plans">Shapoorji Pallonji Vyomora Floor Plan</Link></li>
              <li><Link href="/market/hinjewadi/premium-residential-projects/brochure-download">Shapoorji Pallonji Vyomora Brochure</Link></li>
              <li><Link href="/market/hinjewadi/luxury-apartments/site-visit">Shapoorji Pallonji Vyomora Site Visit</Link></li>
              <li><Link href="/market/hinjewadi/premium-flats/real-estate-reviews">Shapoorji Pallonji Vyomora Reviews</Link></li>
              <li><Link href="/market/hinjewadi/3bhk-apartments/masterplan">Joyville Homes Vyomora Master Plan</Link></li>
              <li><Link href="/market/pune/luxury-apartments/property-investment">Luxury Apartments Pune</Link></li>
              <li><Link href="/market/hinjewadi/buy-flat/property-investment">Buy Flat in Hinjewadi</Link></li>
              <li><Link href="/market/hinjewadi-phase-1/new-launch-projects/location-benefits">New Launch Projects Hinjewadi</Link></li>
              <li><Link href="/market/rajiv-gandhi-infotech-park/luxury-apartments/location-benefits">Apartments Near Hinjewadi IT Park</Link></li>
              <li><Link href="/market/pune/investment-property/future-growth">Pune Real Estate</Link></li>
              <li><Link href="/market/hinjewadi/luxury-real-estate/real-estate-investment">Invest in Hinjewadi</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
