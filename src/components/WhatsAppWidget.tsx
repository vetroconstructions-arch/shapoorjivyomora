"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of page load to not overwhelm the user immediately
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[45] flex items-end gap-3"
    >
      {/* Tooltip bubble */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:block bg-white text-[#0A192F] text-sm font-medium px-4 py-2 rounded-t-xl rounded-br-xl shadow-lg border border-black/5 relative mb-2"
      >
        Questions? Chat with us!
        {/* Little triangle pointing to the icon */}
        <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white rotate-45 border-b border-r border-black/5" />
      </motion.div>

      {/* Main pulsing icon */}
      <a
        href="https://wa.me/917744009295?text=Hi,%20I%20am%20interested%20in%20Shapoorji%20Vyomora.%20Can%20you%20share%20the%20brochure%20and%20pricing?"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-xl hover:scale-110 transition-transform duration-300"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </motion.div>
  );
}
