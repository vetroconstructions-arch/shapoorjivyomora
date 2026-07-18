"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 flex flex-col gap-4"
        >


          {/* Call Button */}
          <a
            href="tel:+917744009295"
            className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full text-black shadow-lg shadow-black/20 hover:scale-110 transition-transform duration-300"
          >
            <Phone size={24} />
            <span className="absolute right-full mr-4 bg-gradient-to-t from-black/50 to-transparent text-white text-xs px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm pointer-events-none">
              Request Callback
            </span>
          </a>
          {/* Enquire Button */}
          <button
            onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            className="group relative flex items-center justify-center w-14 h-14 bg-[#C5A059] rounded-full text-white shadow-lg shadow-black/20 hover:scale-110 transition-transform duration-300 border-none outline-none cursor-pointer"
          >
            <MessageCircle size={24} />
            <span className="absolute right-full mr-4 bg-gradient-to-t from-black/50 to-transparent text-white text-xs px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm pointer-events-none">
              Enquire Now
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
