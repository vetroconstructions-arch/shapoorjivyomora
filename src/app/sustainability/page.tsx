"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Droplet, Wind } from "lucide-react";

const ecoFeatures = [
  {
    icon: <Leaf size={32} />,
    title: "Eco-Deck & Gardens",
    desc: "Expansive green spaces and an elevated eco-deck that promotes biodiversity and reduces urban heat.",
  },
  {
    icon: <Sun size={32} />,
    title: "Solar Optimization",
    desc: "Energy-efficient architectural orientation and solar-powered lighting in common areas to reduce carbon footprint.",
  },
  {
    icon: <Droplet size={32} />,
    title: "Water Conservation",
    desc: "Advanced rainwater harvesting systems and a highly efficient sewage treatment plant (STP) for water recycling.",
  },
  {
    icon: <Wind size={32} />,
    title: "Air Quality Control",
    desc: "Thoughtful wind-channeling design and extensive plantation to maintain pristine air quality within the premises.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0F172A] min-h-screen text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5D3B3]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#E5D3B3] mb-4 block"
          >
            Green Living
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            A Commitment to <span className="italic text-white/50">Nature</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed"
          >
            At Shapoorji Pallonji Vyomora, luxury doesn't come at the cost of the environment. Our master plan integrates cutting-edge sustainable engineering to ensure a greener, healthier future for generations to come.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {ecoFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              className="glass p-8 md:p-12 border-t-2 border-t-[#E5D3B3]/50 hover:border-t-[#E5D3B3] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[#E5D3B3]/10 flex items-center justify-center text-[#E5D3B3] mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
