"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Train, Bus, ArrowRight, GraduationCap, Building2, ShoppingBag, TreePine, Map, PlusSquare } from "lucide-react";

const legendItems = [
  { label: "National Highway", icon: <Map size={16} strokeWidth={2} className="text-emerald-500" /> },
  { label: "Key Connecting Roads", icon: <Map size={16} strokeWidth={2} className="text-blue-500" /> },
  { label: "Metro Stations", icon: <Train size={16} strokeWidth={2} className="text-purple-600" /> },
  { label: "Major Transport Modes", icon: <Bus size={16} strokeWidth={2} className="text-orange-500" /> },
  { label: "Entry Point", icon: <ArrowRight size={16} strokeWidth={2} className="text-red-500" /> },
  { label: "Education", icon: <GraduationCap size={16} strokeWidth={2} className="text-blue-600" /> },
  { label: "Health Care", icon: <PlusSquare size={16} strokeWidth={2} className="text-red-600" /> },
  { label: "IT Park and SEZ", icon: <Building2 size={16} strokeWidth={2} className="text-indigo-600" /> },
  { label: "Retail and Entertainment", icon: <ShoppingBag size={16} strokeWidth={2} className="text-pink-500" /> },
  { label: "Sports, Wellness and Nature", icon: <TreePine size={16} strokeWidth={2} className="text-green-600" /> },
];

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !mapRef.current) return;
    
    const ctx = gsap.context(() => {
      // Fade in legend
      gsap.fromTo('.legend-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );

      // Fade up map
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="location" 
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#FDFBF7]/30 to-[#fdfbf7]" 
      ref={containerRef}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Section */}
        <div className="mb-12 md:mb-20 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-6 block">
            Strategic Connectivity
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight tracking-wide">
            A LOCATION <br/>
            <span className="text-[#1e2338]/60">THAT MOVES WITH YOU.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Legend Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col justify-start">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-sm border border-[#0A192F]/10 shadow-sm sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e2338]/80 mb-6 pb-4 border-b border-[#0A192F]/10">
                Map Legend
              </h3>
              <ul className="space-y-4">
                {legendItems.map((item, index) => (
                  <li key={index} className="legend-item flex items-center group">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#0A192F]/10 mr-4 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-sm font-light text-[#1e2338]/80 group-hover:text-[#0A192F] transition-colors">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Display (Distortion-free) */}
          <div className="w-full lg:w-3/4" ref={mapRef}>
            <div className="relative w-full rounded-sm overflow-hidden bg-white/50 border border-[#0A192F]/10 shadow-sm p-2 md:p-4 group">
              {/* Note: The image uses object-contain to prevent any distortion of the complex map */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] bg-[#FDFBF7] rounded-sm overflow-hidden flex items-center justify-center cursor-zoom-in">
                
                {/* 
                  Using a placeholder that can be replaced by the actual Map SVG or Image. 
                  We use object-contain so it never stretches or distorts.
                */}
                <iframe 
                  src="https://maps.google.com/maps?q=Joyville%20Vyomora&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  title="Vyomora Location Map"
                  className="w-full h-full border-0 filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
              <p className="text-right text-[10px] text-[#1e2338]/40 mt-2 font-light uppercase tracking-widest">
                Map not to scale
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
