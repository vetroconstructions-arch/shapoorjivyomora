"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Split text animation for luxury feel
    const textElements = textRef.current.querySelectorAll('.reveal-text');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="relative py-32 md:py-48 bg-watercolor text-[#1e2338] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(#2D2155 1px, transparent 1px), linear-gradient(90deg, #2D2155 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#a4789c] mb-8">
            The Philosophy
          </p>
          
          <div ref={textRef} className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight reveal-text text-[#2D2155]">
              An endless horizon of happiness.
            </h2>
          </div>

          <div className="mt-16 max-w-2xl mx-auto space-y-6 text-base md:text-lg text-[#1e2338]/70 font-light leading-relaxed">
            <p>
              Vyomora by Shapoorji Pallonji is envisioned as a large-format residential community spread across 25 acres of thoughtfully planned land.
            </p>
            <p>
              In a neighbourhood defined by vertical growth, Vyomora brings horizontal breathing space. It is not just apartments within a cluster of towers – it is a master-planned environment shaped around openness, structure, and everyday ease.
            </p>
            <p>
              The vision is simple: create a community where scale feels expansive, yet life feels intimate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
