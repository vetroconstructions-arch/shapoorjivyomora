"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

const floorPlans = [
  {
    id: "2bhk",
    title: "2 BHK Premium",
    size: "685 Sq. Ft. (63.64 Sq. M.)",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan2.webp",
    features: [
      "Spacious Living Area",
      "Master Suite with Walk-in Wardrobe",
      "Panoramic Balcony",
      "Vaastu Compliant Layout"
    ]
  },
  {
    id: "3bhk",
    title: "3 BHK & Duplex",
    size: "1434 Sq. Ft. (133.22 Sq. M.)",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan1.webp",
    features: [
      "Double Height Living (Duplex)",
      "Premium Fixtures & Finishes",
      "Expansive Deck Area",
      "Private Study Room"
    ]
  },
  {
    id: "master",
    title: "Master Plan",
    size: "25 Acres",
    image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/floor-plan/floor-plan3.webp",
    features: [
      "5 Majestic Towers",
      "32,000+ sq. ft. Clubhouse",
      "Elevated Eco-Deck",
      "Lush Ground-Level Gardens"
    ]
  }
];

export default function ResidencesPage() {
  const [activePlan, setActivePlan] = useState(floorPlans[0].id);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentPlan = floorPlans.find(p => p.id === activePlan) || floorPlans[0];

  return (
    <div className="pt-32 pb-24 bg-[#0F172A] min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-4 block">
            The Residences
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Intelligent Spaces.<br/>Impeccable Design.
          </h1>
          <p className="text-white/70 font-light max-w-2xl mx-auto">
            Explore our thoughtfully crafted floor plans, where every square foot is optimized for a premium living experience.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`px-6 py-3 rounded-sm text-sm tracking-widest uppercase transition-all duration-300 ${
                activePlan === plan.id 
                  ? "bg-[#7DD3FC] text-black shadow-[0_0_20px_rgba(200,169,106,0.3)]" 
                  : "bg-transparent border border-white/20 text-white hover:border-[#7DD3FC] hover:text-[#7DD3FC]"
              }`}
            >
              {plan.title.split(' ')[0]} BHK
            </button>
          ))}
        </div>

        {/* Floor Plan Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif mb-4">{currentPlan.title}</h2>
                <div className="text-[#7DD3FC] text-xl font-light mb-6 font-serif">
                  {currentPlan.size}
                </div>
                <ul className="text-white/60 font-light leading-relaxed mb-8 space-y-2">
                  {currentPlan.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#7DD3FC] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <Button variant="gold" className="w-full justify-center">
                    Enquire Pricing
                  </Button>
                  <Button variant="outline" className="w-full justify-center flex items-center gap-2">
                    <Download size={16} />
                    Download Plan
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] glass rounded-sm overflow-hidden p-4 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlan.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative cursor-zoom-in"
                  onClick={() => setIsZoomed(true)}
                >
                  <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat filter invert brightness-200"
                    style={{ backgroundImage: `url('${currentPlan.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={currentPlan.image} 
              className="max-w-full max-h-full object-contain filter invert brightness-200"
              alt="Floor plan layout for Vyomora residence"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
