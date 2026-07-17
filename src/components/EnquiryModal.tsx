"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Check if the modal has already been seen in this session
    const hasSeenModal = sessionStorage.getItem("hasSeenEnquiryModal");
    
    if (!hasSeenModal) {
      // Pop up after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenEnquiryModal", "true");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "85fb0f24-6f7b-410a-936b-9f215ccdcacc",
          subject: "New Inquiry from Popup Modal",
          from_name: "Vyomora Website",
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-20 pb-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 transition-opacity bg-[#0F172A]/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-sm"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#0F172A]/50 hover:text-[#0F172A] transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-10 text-[#0F172A]">
              <div className="text-center mb-8">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7DD3FC] mb-2 block">
                  Exclusive Preview
                </span>
                <h3 className="text-3xl font-serif leading-tight">Register Your Interest</h3>
                <p className="text-[#0F172A]/70 text-sm mt-3">
                  Leave your details to get early access to pricing, floor plans, and exclusive offers.
                </p>
              </div>

              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-serif mb-2">Thank You!</h4>
                  <p className="text-[#0F172A]/70 text-sm">Our luxury consultant will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="Full Name"
                      className="w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border-none focus:ring-1 focus:ring-[#7DD3FC] outline-none transition-all placeholder:text-[#0F172A]/40 text-sm"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder="Email Address"
                      className="w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border-none focus:ring-1 focus:ring-[#7DD3FC] outline-none transition-all placeholder:text-[#0F172A]/40 text-sm"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      placeholder="Phone Number"
                      className="w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border-none focus:ring-1 focus:ring-[#7DD3FC] outline-none transition-all placeholder:text-[#0F172A]/40 text-sm"
                    />
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center">There was an error. Please try again.</p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full bg-[#2D2155] text-white uppercase tracking-widest text-xs font-bold py-4 rounded-sm hover:bg-[#a4789c] transition-colors disabled:opacity-70 mt-4"
                  >
                    {status === "loading" ? "Submitting..." : "Get Instant Callback"}
                  </button>
                  <p className="text-[10px] text-center text-[#0F172A]/40 mt-4">
                    By submitting this form, you agree to our privacy policy and consent to receive updates.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
