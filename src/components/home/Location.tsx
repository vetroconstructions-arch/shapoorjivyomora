"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Briefcase, GraduationCap, Train } from "lucide-react";

const landmarks = [
  { icon: <Briefcase size={20} />, title: "Infosys & Wipro", time: "5 Mins" },
  { icon: <Train size={20} />, title: "Upcoming Metro", time: "2 Mins" },
  { icon: <GraduationCap size={20} />, title: "Symbiosis", time: "15 Mins" },
  { icon: <MapPin size={20} />, title: "Mumbai-Pune Expressway", time: "10 Mins" },
];

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.landmark-item');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="location" className="py-32 bg-[#0F172A] text-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-4 block">
              Strategic Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              The Heart of Hinjewadi.
            </h2>
            <p className="text-white/70 font-light text-lg mb-12">
              Situated in Phase 1, Vyomora offers unparalleled access to top IT parks, educational institutions, and healthcare, keeping you connected to everything that matters.
            </p>
            
            <div className="space-y-6">
              {landmarks.map((item, index) => (
                <div key={index} className="landmark-item flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-[#7DD3FC]">{item.icon}</div>
                    <span className="text-lg font-light tracking-wide">{item.title}</span>
                  </div>
                  <span className="text-sm uppercase tracking-widest text-white/50">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px] relative rounded-sm overflow-hidden glass border-white/10 p-2">
             {/* Map Placeholder */}
             <div 
               className="w-full h-full rounded-sm bg-cover bg-center filter grayscale contrast-125"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')" }}
             >
               <div className="absolute inset-0 bg-[#0F172A]/40" />
               
               {/* Pulsing Location Marker */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                 <div className="w-6 h-6 bg-[#7DD3FC] rounded-full relative z-10" />
                 <div className="absolute w-24 h-24 border border-[#7DD3FC] rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                 <div className="absolute w-16 h-16 border border-[#7DD3FC] rounded-full animate-ping opacity-40" style={{ animationDuration: '2s' }} />
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
