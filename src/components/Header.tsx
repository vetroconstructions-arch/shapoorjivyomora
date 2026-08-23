"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "The Vision", href: "/vision" },
  { label: "Residences", href: "/residences" },
  { label: "Amenities", href: "/amenities" },
  { label: "Masterplan", href: "/masterplan" },
  { label: "Specifications", href: "/specifications" },
  { label: "Location", href: "/location" },
  { label: "Pune Projects", href: "/shapoorji-pallonji-pune-projects" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-500 flex items-center justify-between px-5 md:px-7 py-2 md:py-2.5 ${
            isScrolled 
              ? "bg-white/92 backdrop-blur-xl border border-[#C5A059]/30 shadow-[0_10px_35px_rgba(10,25,47,0.12)]" 
              : "bg-white/80 backdrop-blur-lg border border-black/5 shadow-[0_6px_25px_rgba(10,25,47,0.06)]"
          }`}
        >
          {/* Brand / Logo */}
          <Link href="/" className="flex flex-col group py-0.5 shrink-0">
            <span className="text-lg md:text-xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-[#C5A059] group-hover:to-[#C5A059] transition-all duration-300">
              VYOMORA
            </span>
            <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#C5A059] font-bold -mt-0.5">
              By Shapoorji Pallonji
            </span>
          </Link>

          {/* Desktop Pill Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#0A192F]/[0.03] px-2 py-1 rounded-full border border-black/[0.04]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold tracking-wider uppercase text-[#0A192F]/75 hover:text-[#0A192F] hover:bg-[#C5A059]/15 transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
              className="px-5 py-2 rounded-full bg-[#0A192F] text-white hover:bg-[#C5A059] hover:text-[#0A192F] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#0A192F]/10 hover:shadow-lg hover:shadow-[#C5A059]/20"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
              className="px-3.5 py-1.5 rounded-full bg-[#0A192F] text-white text-[10px] font-bold uppercase tracking-wider"
            >
              Enquire
            </button>
            <button
              className="p-2 rounded-full bg-black/5 hover:bg-[#C5A059]/15 text-[#0A192F] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FDFBF7]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6 pt-24 pb-12"
          >
            <nav className="flex flex-col items-center space-y-4 mb-10 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-2.5 px-6 rounded-full text-lg font-serif tracking-wider text-[#0A192F] hover:bg-[#C5A059]/15 hover:text-[#C5A059] transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col w-full max-w-xs space-y-3"
            >
              <button 
                className="w-full py-3.5 rounded-full bg-[#0A192F] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#0A192F] transition-colors shadow-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new Event('open-enquiry-modal'));
                }}
              >
                Enquire Now
              </button>
              <Link
                href="/shapoorji-pallonji-pune-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full border border-[#0A192F]/20 text-[#0A192F] font-bold text-xs uppercase tracking-widest text-center hover:bg-black/5 transition-colors"
              >
                All Pune Projects
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
