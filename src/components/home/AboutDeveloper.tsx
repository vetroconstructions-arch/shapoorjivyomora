"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrustBadge } from "@/components/ui/TrustBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Building2, History, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "150+", label: "Years of Legacy", icon: <History size={32} strokeWidth={1} /> },
  { value: "20+", label: "Global Presence", icon: <Building2 size={32} strokeWidth={1} /> },
  { value: "50,000+", label: "Happy Families", icon: <Users size={32} strokeWidth={1} /> },
  { value: "50+", label: "Industry Awards", icon: <Award size={32} strokeWidth={1} /> },
];

export default function AboutDeveloper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !statsRef.current) return;
    
    const ctx = gsap.context(() => {
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.fromTo(statItems, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#F5F5F3] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-6 block">
              The Legacy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0F172A] leading-tight mb-8">
              Shapoorji Pallonji Real Estate.
            </h2>
            <div className="w-12 h-1 bg-[#7DD3FC] mb-8" />
            <p className="text-lg text-[#0F172A]/70 font-light leading-relaxed mb-6">
              With a legacy spanning over 150 years, Shapoorji Pallonji has been a driving force in India's real estate sector. Our commitment to cutting-edge design, sustainable engineering, and uncompromising quality has shaped some of the country's most iconic landmarks.
            </p>
            <p className="text-lg text-[#0F172A]/70 font-light leading-relaxed mb-10">
              Through the Joyville brand, we continue this tradition of excellence, bringing premium housing that combines thoughtful design with world-class amenities to aspiring homebuyers.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] rounded-sm overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Overlay logo or graphic */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/10">
                 <img 
                    src="https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/logo/white-logo.svg" 
                    alt="Shapoorji Pallonji Real Estate Logo" 
                    className="w-48 opacity-80"
                 />
               </div>
            </div>

            {/* Stamp of Trust */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 pointer-events-none scale-75 md:scale-100">
              <TrustBadge />
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[#0F172A]/10 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center text-center">
              <div className="text-[#7DD3FC] mb-6">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-2">{stat.value}</h4>
              <p className="text-sm uppercase tracking-widest text-[#0F172A]/60">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
