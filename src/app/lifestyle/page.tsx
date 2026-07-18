"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Dumbbell, Trophy, Film, Trees, Music, Gamepad2, Coffee, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const amenityCategories = [
  {
    title: "Clubhouse & Recreation",
    description: "A sprawling 32,000 sq. ft. clubhouse serving as the heart of community life, featuring indoor games, a mini-theatre, and lounges.",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery2.webp",
    features: [
      { name: "Grand Reception & Lounge", icon: <Coffee size={20} /> },
      { name: "Mini Theatre", icon: <Film size={20} /> },
      { name: "Digital Dome", icon: <Activity size={20} /> },
      { name: "Co-Working Lounge", icon: <Briefcase size={20} /> }
    ]
  },
  {
    title: "Health & Wellness",
    description: "State-of-the-art facilities dedicated to your physical and mental well-being, providing a sanctuary of calm.",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery8.webp",
    features: [
      { name: "Temperature Controlled Lap Pool", icon: <Waves size={20} /> },
      { name: "Fully Equipped Gymnasium", icon: <Dumbbell size={20} /> },
      { name: "Yoga & Meditation Studio", icon: <Activity size={20} /> },
      { name: "Luxury Spa", icon: <Coffee size={20} /> }
    ]
  },
  {
    title: "Active Sports",
    description: "Professional-grade sporting arenas designed to foster an active, energetic lifestyle for all age groups.",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery4.webp",
    features: [
      { name: "Pickleball Courts", icon: <Trophy size={20} /> },
      { name: "Mini Football Turf", icon: <Trophy size={20} /> },
      { name: "Indoor Games Room", icon: <Gamepad2 size={20} /> },
      { name: "Multipurpose Court", icon: <Trophy size={20} /> }
    ]
  },
  {
    title: "Elevated Eco-Deck & Gardens",
    description: "Lush green expanses and elevated walkways that blend nature seamlessly with modern living.",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery5.webp",
    features: [
      { name: "Thematic Gardens", icon: <Trees size={20} /> },
      { name: "Amphitheatre", icon: <Music size={20} /> },
      { name: "Kids Play Area", icon: <Gamepad2 size={20} /> },
      { name: "Jogging Track", icon: <Activity size={20} /> }
    ]
  }
];

// Helper for Briefcase since it wasn't imported from lucide-react in this file but used above
import { Briefcase } from "lucide-react";

export default function LifestylePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.amenity-section');
      
      sections.forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#0F172A] text-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent z-10" />
          <div 
            className="w-full h-full bg-cover bg-center brightness-[1.15] contrast-[1.05]"
            style={{ backgroundImage: "url('https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery7.webp')" }}
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#E5D3B3] mb-6 block"
          >
            Curated Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif leading-tight mb-8"
          >
            The Art of <span className="text-gradient">Leisure</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed"
          >
            Immerse yourself in a world of world-class amenities designed to cater to your every desire, from wellness to entertainment.
          </motion.p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 relative z-20 bg-[#0F172A]" ref={containerRef}>
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          
          {amenityCategories.map((category, idx) => (
            <div key={idx} className={`amenity-section flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center brightness-[1.15] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] contrast-125"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-serif mb-6">{category.title}</h2>
                <div className="w-12 h-1 bg-[#E5D3B3] mb-8" />
                <p className="text-lg text-white/70 font-light leading-relaxed mb-12">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-[#E5D3B3] group-hover:bg-[#E5D3B3] group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-lg font-light tracking-wide group-hover:text-[#E5D3B3] transition-colors duration-300">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
