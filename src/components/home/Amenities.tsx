"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Dumbbell, Trophy, Film } from "lucide-react";
import { detailedAmenities } from "./amenitiesData";

const amenitiesList = [
  {
    title: "Lap Pool",
    description: "Swim into the horizon with temperature-controlled waters.",
    icon: <Waves size={32} strokeWidth={1} />,
    image: "/images/pool_bg.jpg"
  },
  {
    title: "Wellness Studio & Gym",
    description: "State-of-the-art gymnasium, yoga studio, and luxury spa.",
    icon: <Dumbbell size={32} strokeWidth={1} />,
    image: "/images/story_bg.jpg"
  },
  {
    title: "Active Sports",
    description: "Professional pickleball courts and a mini football turf.",
    icon: <Trophy size={32} strokeWidth={1} />,
    image: "/images/masterplan_bg.jpg"
  },
  {
    title: "Entertainment Hub",
    description: "Mini theatre, digital dome, and a premium co-working lounge.",
    icon: <Film size={32} strokeWidth={1} />,
    image: "/images/hero_bg.jpg"
  }
];

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.amenity-card');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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

  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
            Signature Lifestyle
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0A192F] leading-tight mb-6">
            Curated For The Extraordinary.
          </h2>
          <p className="text-[#1e2338]/80 font-light text-lg">
            Immerse yourself in a world of world-class amenities designed to cater to your every desire, from wellness to entertainment.
          </p>
        </div>

        {/* Top 4 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {amenitiesList.map((amenity, index) => (
            <motion.div 
              key={index}
              className="amenity-card group relative h-[400px] rounded-sm overflow-hidden cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[1.15] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${amenity.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors duration-500">
                  {amenity.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{amenity.title}</h3>
                <p className="text-sm text-white/70 font-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comprehensive List */}
        <div ref={detailsRef} className="pt-20 border-t border-[#0A192F]/10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
            <div className="lg:w-1/3">
              <h3 className="text-3xl md:text-4xl font-serif text-[#0A192F] leading-tight mb-4 uppercase tracking-wide">
                A COMMUNITY <br/> <span className="text-[#1e2338]/60">THAT HAS IT ALL.</span>
              </h3>
            </div>
            <div className="lg:w-2/3 flex items-center">
              <p className="text-[#1e2338]/80 font-light leading-relaxed">
                Shapoorji Pallonji Vyomora brings together thoughtful planning and a wide spectrum of lifestyle amenities within one integrated community. From wellness and recreation to work and celebration, every space is designed to support balance, connection, and everyday joy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {detailedAmenities.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-sm font-bold tracking-[0.2em] text-[#0A192F] uppercase mb-8 pb-4 border-b border-[#0A192F]/10">
                  {section.category}
                </h4>
                <ul className="space-y-6">
                  {section.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <li key={itemIdx} className="flex items-center group">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#0A192F]/5 mr-4 group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-300">
                          <Icon size={18} strokeWidth={1.5} className="text-[#0A192F] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[#1e2338]/80 font-light text-sm">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Mascot Image (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4">
        <div className="w-full h-full bg-gradient-to-tr from-[#C5A059]/20 to-[#0A192F]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
