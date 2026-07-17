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
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? "bg-white/80 backdrop-blur-md border-[#1e2338]/10 py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50 flex flex-col group">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest transition-colors duration-300 text-[#2D2155]`}>
              VYOMORA
            </span>
            <span className={`text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 text-[#1e2338]/60`}>
              By Shapoorji Pallonji
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 tracking-wide uppercase text-[#1e2338]/70 hover:text-[#2D2155]`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="gold" 
              className="bg-[#2D2155] text-white border-transparent hover:bg-[#1e2338]"
              onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 transition-colors duration-300 text-[#2D2155]`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} className="text-[#2D2155]" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FDFBF7] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center space-y-8 mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-serif tracking-wider text-[#2D2155] hover:text-[#a4789c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col w-full max-w-sm space-y-4"
            >
              <Button 
                variant="gold" 
                className="w-full bg-[#2D2155] text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new Event('open-enquiry-modal'));
                }}
              >
                Enquire Now
              </Button>
              <Button variant="outline" className="w-full border-[#1e2338]/20 text-[#1e2338] hover:bg-[#1e2338]/5">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
