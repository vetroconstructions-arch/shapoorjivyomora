"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Pinning and parallax effect
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
      });

      gsap.to(imageRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered content reveal
      gsap.fromTo(
        contentRef.current!.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div ref={containerRef} className="relative w-full h-screen bg-[#FDFBF7] flex items-center overflow-hidden">
        
        {/* Background Image Container - Half Width on Desktop */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full overflow-hidden">
          <div 
            ref={imageRef}
            className="w-full h-full bg-cover bg-center brightness-[1.15] contrast-[1.05] origin-center"
            style={{ backgroundImage: "url('/images/story_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[#FDFBF7]/80 lg:bg-transparent" />
        </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="w-full lg:w-1/2 lg:pr-16" ref={contentRef}>
          <span className="block text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-6">
            The Project Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight mb-8">
            Expansive Scale.<br />Intimate Living.
          </h2>
          <div className="w-12 h-1 bg-[#C5A059] mb-8" />
          <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-6">
            Spread across 25 acres, Vyomora is conceived as an oasis of calm within the bustling IT corridor of Hinjawadi.
          </p>
          <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-10">
            Step outside on lush ground-level gardens, relax at a vibrant 32,000+ sq. ft. clubhouse, and enjoy an elevated eco-deck that will lift your mood. At Vyomora, you'll feel happiness growing around you.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l border-[#0A192F]/20 pl-4">
              <h4 className="text-3xl font-serif text-[#0A192F] mb-2">685-1434</h4>
              <p className="text-xs uppercase tracking-widest text-[#1e2338]/60">Sq. Ft. Spaces</p>
            </div>
            <div className="border-l border-[#0A192F]/20 pl-4">
              <h4 className="text-3xl font-serif text-[#0A192F] mb-2">₹84.99L</h4>
              <p className="text-xs uppercase tracking-widest text-[#1e2338]/60">Starting Price</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
