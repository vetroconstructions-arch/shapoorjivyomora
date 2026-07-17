"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Dumbbell, Trophy, Film } from "lucide-react";

const amenitiesList = [
  {
    title: "Lap Pool",
    description: "Swim into the horizon with temperature-controlled waters.",
    icon: <Waves size={32} strokeWidth={1} />,
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Wellness Studio & Gym",
    description: "State-of-the-art gymnasium, yoga studio, and luxury spa.",
    icon: <Dumbbell size={32} strokeWidth={1} />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Active Sports",
    description: "Professional pickleball courts and a mini football turf.",
    icon: <Trophy size={32} strokeWidth={1} />,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Entertainment Hub",
    description: "Mini theatre, digital dome, and a premium co-working lounge.",
    icon: <Film size={32} strokeWidth={1} />,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    <section id="amenities" className="py-32 bg-[#F5F5F3] relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-4 block">
            Signature Lifestyle
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0F172A] leading-tight mb-6">
            Curated For The Extraordinary.
          </h2>
          <p className="text-[#0F172A]/70 font-light text-lg">
            Immerse yourself in a world of world-class amenities designed to cater to your every desire, from wellness to entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((amenity, index) => (
            <motion.div 
              key={index}
              className="amenity-card group relative h-[400px] rounded-sm overflow-hidden cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${amenity.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-[#7DD3FC] group-hover:border-[#7DD3FC] transition-colors duration-500">
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
      </div>
    </section>
  );
}
