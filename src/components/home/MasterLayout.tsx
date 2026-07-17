"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";

const layoutData = [
  {
    id: "master",
    title: "Master Layout",
    subtitle: "25 Acres of Master-Planned Brilliance",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan3.webp",
    features: ["5 Majestic Towers", "Elevated Eco-Deck", "32,000+ sq. ft. Clubhouse", "Multi-tier Security"]
  },
  {
    id: "2bhk",
    title: "2 BHK Residences",
    subtitle: "685 Sq. Ft. (63.64 Sq. M.)",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan2.webp",
    features: ["Spacious Living Area", "Master Suite with Walk-in Wardrobe", "Panoramic Balcony", "Vaastu Compliant"]
  },
  {
    id: "3bhk",
    title: "3 BHK & Duplex",
    subtitle: "1434 Sq. Ft. (133.22 Sq. M.)",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan1.webp",
    features: ["Double Height Living", "Premium Fixtures", "Expansive Deck Area", "Private Study Room"]
  }
];

export default function MasterLayout() {
  const [activeTab, setActiveTab] = useState(layoutData[0].id);
  const activeData = layoutData.find((d) => d.id === activeTab) || layoutData[0];

  return (
    <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7DD3FC]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-6 block">
              Architectural Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white max-w-2xl">
              Master Plan & <span className="text-white/50 italic">Layouts</span>
            </h2>
          </div>
          <Link href="/residences">
            <Button variant="outline" className="group">
              View All Specifications 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Tabs & Details (Left side) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 mb-8 hide-scrollbar">
              {layoutData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-4 rounded-sm transition-all duration-300 border-l-2 whitespace-nowrap lg:whitespace-normal flex-shrink-0 ${
                    activeTab === tab.id 
                    ? "border-l-[#7DD3FC] glass" 
                    : "border-l-transparent text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <h3 className={`text-lg font-serif mb-1 ${activeTab === tab.id ? "text-[#7DD3FC]" : ""}`}>
                    {tab.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    {tab.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Features */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-black/20 p-6 rounded-sm border border-white/5"
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {activeData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-light text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7DD3FC] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Display (Right side) */}
          <div className="lg:col-span-8">
            <div className="glass rounded-sm p-4 md:p-8 h-[400px] md:h-[600px] relative group flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Blueprint grid effect background */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                  
                  <img 
                    src={activeData.image}
                    alt={`${activeData.title} Layout for Shapoorji Vyomora`}
                    className="max-w-full max-h-full object-contain filter invert brightness-200 opacity-90 drop-shadow-[0_0_15px_rgba(125,211,252,0.3)] transition-all duration-700 group-hover:scale-105"
                  />
                  
                  <Link href="/residences" className="absolute bottom-4 right-4 bg-[#7DD3FC] text-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(125,211,252,0.5)]">
                    <Maximize2 className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
