"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const milestones = [
  {
    date: "Q3 2023",
    title: "Project Launch & Excavation",
    desc: "Official launch of Shapoorji Vyomora. Initial ground clearing and deep excavation completed for all tower foundations.",
    status: "completed"
  },
  {
    date: "Q1 2024",
    title: "Foundation & Plinth",
    desc: "Raft foundation laid successfully. Plinth level construction reached for Towers A & B.",
    status: "completed"
  },
  {
    date: "Q4 2024",
    title: "Superstructure Progression",
    desc: "Slab casting completed up to the 10th floor for initial towers. Podium levels finalized.",
    status: "in-progress"
  },
  {
    date: "Q3 2025",
    title: "Topping Out",
    desc: "Expected completion of structural framework for all towers.",
    status: "upcoming"
  },
  {
    date: "Q4 2026",
    title: "Handover & Possession",
    desc: "Final finishing, landscaping, and handover of keys to the proud homeowners.",
    status: "upcoming"
  }
];

export default function UpdatesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0F172A] min-h-screen text-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-4 block">
            Construction Timeline
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Project <span className="italic text-white/50">Updates</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Stay informed on our steady progress. We maintain complete transparency as we build your dream home.
          </p>
        </div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-12 pb-12">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-3.5 top-1 flex items-center justify-center w-7 h-7 rounded-full bg-[#0F172A] border-2 ${
                item.status === 'completed' ? 'border-[#7DD3FC] text-[#7DD3FC]' : 
                item.status === 'in-progress' ? 'border-yellow-500 text-yellow-500' : 
                'border-white/30 text-white/30'
              }`}>
                {item.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
              </div>

              <div className="glass p-6 md:p-8 rounded-sm hover:border-[#7DD3FC]/30 transition-colors">
                <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${
                  item.status === 'completed' ? 'text-[#7DD3FC]' : 
                  item.status === 'in-progress' ? 'text-yellow-500' : 
                  'text-white/50'
                }`}>
                  {item.date} • {item.status.replace('-', ' ')}
                </span>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
