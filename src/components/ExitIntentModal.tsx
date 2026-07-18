"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  _honey: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Only run on desktop and if not already shown in this session
    if (window.innerWidth < 768 || sessionStorage.getItem("exitIntentShown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If cursor moves out of the top of the viewport
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        if (!sessionStorage.getItem("exitIntentShown")) {
          setIsOpen(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          interest: "Exit Intent - Requested Floorplan/Inventory",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => setIsOpen(false), 4000);
      } else {
        setErrorMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      setErrorMessage("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 transition-opacity bg-[#0A192F]/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
          >
            {/* Left Image Side */}
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-[500px]">
              <div className="absolute inset-0 bg-cover bg-center brightness-[1.15] contrast-[1.05]" style={{ backgroundImage: "url('/images/hero_bg.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-2 block">Before You Go</span>
                <h3 className="text-3xl font-serif mb-4 leading-tight">Unlock The Exclusive Inventory</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Get instant access to detailed floorplans, exact availability, and special pre-launch pricing.
                </p>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="md:w-1/2 p-8 md:p-10 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-[#1e2338]/50 hover:text-[#0A192F] transition-colors"
              >
                <X size={24} />
              </button>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Download size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Request Sent!</h3>
                  <p className="text-[#1e2338]/70">
                    Our sales team is preparing your exclusive inventory packet. We will send it to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h4 className="text-xl font-serif text-[#0A192F] mb-6">Where should we send it?</h4>
                  
                  {errorMessage && (
                    <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-sm border border-red-100">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="text" {...register("_honey")} className="hidden" />

                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                        className={`w-full bg-[#FDFBF7] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#0A192F]/40 text-base ${errors.name ? 'border-red-400' : 'border-transparent'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email")}
                        className={`w-full bg-[#FDFBF7] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#0A192F]/40 text-base ${errors.email ? 'border-red-400' : 'border-transparent'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (10 digits)"
                        {...register("phone")}
                        className={`w-full bg-[#FDFBF7] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#0A192F]/40 text-base ${errors.phone ? 'border-red-400' : 'border-transparent'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0A192F] text-white py-4 rounded-sm hover:bg-[#1a2b4c] transition-colors flex items-center justify-center gap-2 mt-4 font-medium disabled:opacity-70"
                    >
                      {isSubmitting ? "Processing..." : "Unlock Details Now"}
                    </button>
                    
                    <p className="text-center text-xs text-[#0A192F]/40 mt-4">
                      By submitting this form, you authorize us to contact you regarding the project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
