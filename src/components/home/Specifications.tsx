"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { specificationsData } from "./specificationsData";
import { Check } from "lucide-react";

type TabType = "2_3_BHK" | "Duplexes";

export default function Specifications() {
  const [activeTab, setActiveTab] = useState<TabType>("2_3_BHK");
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".spec-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate content change on tab switch
  useEffect(() => {
    if (!contentRef.current) return;
    
    const cards = contentRef.current.querySelectorAll('.spec-card');
    
    gsap.fromTo(cards,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all"
      }
    );
  }, [activeTab]);

  const currentData = specificationsData[activeTab];

  return (
    <section 
      id="specifications" 
      className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden" 
      ref={containerRef}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="spec-header text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#a4789c] mb-4 block">
            Home Specifications
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2155] leading-tight tracking-wide mb-6">
            CRAFTED FOR <br className="hidden md:block"/>
            <span className="italic text-[#2D2155]/80">EVERYDAY COMFORT</span>
          </h2>
          <p className="text-[#2D2155]/60 font-light text-sm md:text-base">
            Every detail at Vyomora is meticulously selected to ensure a life of luxury, convenience, and unparalleled comfort. Explore the specifications of our residences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-[#2D2155]/10 shadow-sm relative">
            {/* Active Highlight */}
            <div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#2D2155] rounded-full transition-transform duration-500 ease-out shadow-md"
              style={{ 
                transform: activeTab === "2_3_BHK" ? "translateX(0)" : "translateX(100%)",
                left: activeTab === "2_3_BHK" ? "6px" : "calc(6px + 6px)" // slight offset adjustments
              }}
            />
            
            <button
              onClick={() => setActiveTab("2_3_BHK")}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-colors duration-300 w-48 ${
                activeTab === "2_3_BHK" ? "text-white" : "text-[#2D2155]/60 hover:text-[#2D2155]"
              }`}
            >
              2 & 3 BHKs
            </button>
            <button
              onClick={() => setActiveTab("Duplexes")}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-colors duration-300 w-48 ${
                activeTab === "Duplexes" ? "text-white" : "text-[#2D2155]/60 hover:text-[#2D2155]"
              }`}
            >
              Duplexes
            </button>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" ref={contentRef}>
          {currentData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={`${activeTab}-${index}`} 
                className="spec-card break-inside-avoid bg-white rounded-xl shadow-sm border border-[#2D2155]/5 overflow-hidden hover:shadow-md hover:border-[#a4789c]/30 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="px-6 pt-6 pb-4 flex items-center gap-4 border-b border-[#2D2155]/5">
                  <div className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-[#2D2155]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2D2155] group-hover:border-[#2D2155] transition-all duration-300">
                    <Icon size={18} className="text-[#a4789c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-[#2D2155]">
                    {category.title}
                  </h3>
                </div>

                {/* Category Items */}
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start">
                        <Check size={14} className="text-[#a4789c] mt-1 mr-3 shrink-0" />
                        <span className="text-xs md:text-sm text-[#2D2155]/70 leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
