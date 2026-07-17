"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Briefcase, GraduationCap, Train, ShoppingBag, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const locationHighlights = [
  { category: "IT Hubs", icon: <Briefcase size={24} />, items: [{ name: "Infosys Phase 1", time: "5 Mins" }, { name: "Wipro", time: "7 Mins" }, { name: "TCS", time: "10 Mins" }] },
  { category: "Connectivity", icon: <Train size={24} />, items: [{ name: "Upcoming Metro Station", time: "2 Mins" }, { name: "Mumbai-Pune Expressway", time: "10 Mins" }, { name: "Pune Airport", time: "45 Mins" }] },
  { category: "Education", icon: <GraduationCap size={24} />, items: [{ name: "Symbiosis Institute", time: "15 Mins" }, { name: "Mercedes-Benz School", time: "12 Mins" }] },
  { category: "Healthcare", icon: <HeartPulse size={24} />, items: [{ name: "Sanjivani Hospital", time: "10 Mins" }, { name: "Ruby Hall Clinic", time: "15 Mins" }] },
  { category: "Lifestyle", icon: <ShoppingBag size={24} />, items: [{ name: "Xion Mall", time: "10 Mins" }, { name: "Balewadi High Street", time: "15 Mins" }] },
];

export default function LocationPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    if (!listRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = listRef.current?.querySelectorAll('.location-card');
      if (cards) {
        gsap.fromTo(cards, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery11.webp')" }}
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl" ref={headerRef}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-6 block"
          >
            Strategic Connectivity
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif leading-tight mb-8"
          >
            The Heart of <span className="text-gradient">Hinjawadi</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed"
          >
            Vyomora offers unparalleled access to top IT parks, educational institutions, and healthcare, keeping you connected to everything that matters while providing a sanctuary to retreat to.
          </motion.p>
        </div>
      </section>

      {/* Interactive Map & Distances Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Map Area */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative h-[500px] lg:h-[700px] rounded-sm overflow-hidden glass border-white/10 p-2 group"
            >
              <div 
                className="w-full h-full rounded-sm bg-cover bg-center filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery11.webp')" }}
              >
                <div className="absolute inset-0 bg-[#0F172A]/60 transition-colors duration-500 group-hover:bg-[#0F172A]/40" />
                
                {/* Map Markers */}
                <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="text-[#7DD3FC] mb-2 font-serif text-xl tracking-widest drop-shadow-lg">VYOMORA</div>
                  <div className="flex items-center justify-center relative">
                    <div className="w-4 h-4 bg-[#7DD3FC] rounded-full relative z-10" />
                    <div className="absolute w-20 h-20 border border-[#7DD3FC] rounded-full animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-32 h-32 border border-[#7DD3FC] rounded-full animate-ping opacity-10" style={{ animationDuration: '2s' }} />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-8 left-8 glass px-6 py-4 rounded-sm border-l-2 border-l-[#7DD3FC]">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Coordinates</p>
                  <p className="font-mono text-white/90">18.5913° N, 73.7389° E</p>
                </div>
              </div>
            </motion.div>

            {/* Distances List */}
            <div className="flex flex-col justify-center" ref={listRef}>
              <h2 className="text-3xl font-serif mb-12">Seamless Access to the City</h2>
              
              <div className="space-y-10">
                {locationHighlights.map((category, idx) => (
                  <div key={idx} className="location-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-[#7DD3FC]">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-serif tracking-wide">{category.category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-16">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex justify-between items-center border-b border-white/10 pb-3">
                          <span className="text-white/70 font-light">{item.name}</span>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#7DD3FC]">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/10">
                <Button variant="gold" className="w-full sm:w-auto">
                  <MapPin className="mr-2" size={18} />
                  Get Directions
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
