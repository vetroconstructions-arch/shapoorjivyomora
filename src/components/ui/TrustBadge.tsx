"use client";

import { motion } from "framer-motion";

export function TrustBadge() {
  const text = "150 YEARS OF LEGACY • SHAPOORJI PALLONJI • ";
  const characters = text.split("");

  return (
    <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
      {/* Rotating Text Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full text-[#7DD3FC] text-xs font-bold tracking-[0.2em] uppercase"
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 origin-[0_64px] md:origin-[0_80px]"
            style={{
              transform: `translateX(-50%) rotate(${i * (360 / characters.length)}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>

      {/* Center Icon/Emblem */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#7DD3FC]/30 flex items-center justify-center bg-[#0F172A]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(125,211,252,0.2)]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="w-6 h-6 md:w-8 md:h-8 text-[#7DD3FC]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      </div>
    </div>
  );
}
