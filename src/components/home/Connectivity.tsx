"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { connectivityData } from "./connectivityData";

export default function Connectivity() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.connectivity-card');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="connectivity" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden" ref={containerRef}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#C5A059]/10 to-[#FDFBF7] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header / Central Focus */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="bg-[#0A192F] text-white py-6 px-12 rounded-sm shadow-xl mb-8 transform hover:scale-105 transition-transform duration-500 cursor-default border border-[#C5A059]/20 relative overflow-hidden">
            {/* Subtle glow effect behind logo */}
            <div className="absolute inset-0 bg-[#C5A059]/10 blur-xl rounded-full scale-150" />
            <h2 className="text-xl md:text-2xl font-serif tracking-widest uppercase mb-1 relative z-10">
              Shapoorji Pallonji
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#C5A059] tracking-wide relative z-10">
              Vyomora
            </h1>
            <h3 className="text-sm md:text-md tracking-[0.3em] font-light mt-2 relative z-10 text-white/80">
              HINJAWADI
            </h3>
          </div>
          <p className="text-[#1e2338]/80 font-light max-w-xl">
            Seamlessly connected to everything that matters. Explore the strategic distances and estimated travel times to major hubs around Pune.
          </p>
        </div>

        {/* Masonry Grid Layout for Connectivity Data */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {connectivityData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="connectivity-card break-inside-avoid bg-white/60 backdrop-blur-sm rounded-sm shadow-sm border border-[#0A192F]/10 overflow-hidden hover:shadow-md hover:border-[#0A192F]/20 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-[#0A192F] text-white px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-sm font-bold tracking-widest uppercase font-serif">
                    {category.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Table Header */}
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-[#1e2338]/50 mb-4 pb-2 border-b border-[#0A192F]/10">
                    <span className="w-1/2">Destination</span>
                    <div className="w-1/2 flex justify-end gap-4 text-right">
                      <span className="w-16">Distance<br/>(approx)</span>
                      <span className="w-12">Time<br/>(approx)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {category.sections.map((section, sIdx) => (
                      <div key={sIdx}>
                        {category.sections.length > 1 && (
                          <h4 className="text-xs font-semibold text-[#0A192F] mb-3">
                            {section.subtitle}
                          </h4>
                        )}
                        <ul className="space-y-3">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex justify-between items-center text-xs group">
                              <span className="w-1/2 font-medium text-[#1e2338]/80 group-hover:text-[#C5A059] transition-colors leading-tight">
                                {item.name}
                              </span>
                              <div className="w-1/2 flex justify-end gap-4 text-right">
                                <span className="w-16 text-[#1e2338]/60">{item.distance}</span>
                                <span className="w-12 text-[#1e2338]/60 font-medium">{item.time}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] text-[#1e2338]/40 uppercase tracking-widest">
            *Approximate time & distance as per internet
          </p>
        </div>

      </div>
    </section>
  );
}
