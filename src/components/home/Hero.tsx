"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(containerRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-[#0F172A] z-10" />
        <div 
          className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000 hover:scale-110"
          style={{ backgroundImage: "url('https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/banner/desktop_banner.webp')" }}
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight mb-6">
            An Endless Horizon Of <span className="text-gradient">Happiness</span>.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            A master-planned environment shaped around openness, structure, and everyday ease in Hinjawadi.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              Book Site Visit
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              Download Brochure
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/50 mb-4">Discover</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Luxury Stats Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-6 md:left-12 bottom-20 z-20 hidden lg:block"
      >
        <div className="glass p-6 rounded-sm border-l-4 border-l-[#7DD3FC]">
          <p className="text-3xl font-serif text-white mb-1">25<span className="text-[#7DD3FC] text-lg">Acres</span></p>
          <p className="text-xs uppercase tracking-[0.1em] text-white/60">Integrated Development</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute right-6 md:right-12 bottom-32 z-20 hidden lg:block"
      >
        <div className="glass p-6 rounded-sm border-r-4 border-r-[#7DD3FC] text-right">
          <p className="text-3xl font-serif text-white mb-1">685<span className="text-[#7DD3FC] text-lg">-1434</span></p>
          <p className="text-xs uppercase tracking-[0.1em] text-white/60">Sq. Ft. Residences</p>
        </div>
      </motion.div>
    </section>
  );
}
