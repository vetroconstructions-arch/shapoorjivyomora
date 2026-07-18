"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits"),
  configuration: z.string().min(1, "Please select a configuration"),
  visit_date: z.string().optional(),
  _honey: z.string().max(0, "Spam detected").optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Wrap in try-catch to prevent Safari Private Mode crashes (QuotaExceededError)
    let hasSeenModal = false;
    try {
      hasSeenModal = sessionStorage.getItem("hasSeenEnquiryModal") === "true";
    } catch (e) {
      console.warn("sessionStorage is not available", e);
    }
    
    let timer: NodeJS.Timeout;
    if (!hasSeenModal) {
      // Pop up after 3 seconds
      timer = setTimeout(() => {
        setIsOpen(true);
        try {
          sessionStorage.setItem("hasSeenEnquiryModal", "true");
        } catch (e) {
          // ignore
        }
      }, 3000);
    }

    // Listen for custom event to open modal programmatically
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpenModal);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("open-enquiry-modal", handleOpenModal);
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      // We use the AJAX endpoint for formsubmit so the user never leaves the page.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Inquiry from Popup Modal",
          _captcha: "false",
          _autoresponse: "Thank you for your interest in Shapoorji Pallonji Vyomora. Our luxury property consultant has received your inquiry and will be in touch with you shortly. For immediate assistance, you can reach us at +91 7744009295.",
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error or request blocked. Please try again or contact us directly.");
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
            className="relative z-10 w-full max-w-lg bg-white shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto overflow-x-hidden no-scrollbar"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#0F172A]/50 hover:text-[#0F172A] transition-colors z-20 bg-white rounded-full p-1"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-10 text-[#0F172A]">
              <div className="text-center mb-8">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E5D3B3] mb-2 block">
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
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-6 text-[#0A192F] border-b border-[#0A192F] pb-1 text-sm font-medium hover:text-[#C5A059] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input type="text" {...register("_honey")} style={{ display: 'none' }} />

                  <div>
                    <input 
                      {...register("name")}
                      type="text" 
                      placeholder="Full Name"
                      className={`w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#E5D3B3] outline-none transition-all placeholder:text-[#0F172A]/40 text-base ${errors.name ? 'border-red-400' : 'border-transparent'}`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input 
                      {...register("email")}
                      type="email" 
                      placeholder="Email Address"
                      className={`w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#E5D3B3] outline-none transition-all placeholder:text-[#0F172A]/40 text-base ${errors.email ? 'border-red-400' : 'border-transparent'}`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <input 
                      {...register("phone")}
                      type="tel" 
                      placeholder="Phone Number"
                      className={`w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#E5D3B3] outline-none transition-all placeholder:text-[#0F172A]/40 text-base ${errors.phone ? 'border-red-400' : 'border-transparent'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <select 
                      {...register("configuration")}
                      className={`w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border focus:ring-1 focus:ring-[#E5D3B3] outline-none transition-all text-base appearance-none text-[#0F172A] ${errors.configuration ? 'border-red-400' : 'border-transparent'}`}
                    >
                      <option value="">Select Configuration</option>
                      <option value="2bhk">2 BHK Premium Residence</option>
                      <option value="3bhk">3 BHK Luxury Residence</option>
                      <option value="duplex">3 BHK Duplex Sky Villa</option>
                    </select>
                    {errors.configuration && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.configuration.message}</p>}
                  </div>
                  <div>
                    <input 
                      {...register("visit_date")}
                      type="date" 
                      placeholder="Schedule a Visit (Optional)"
                      className="w-full bg-[#F5F5F3] px-4 py-3 rounded-sm border border-transparent focus:ring-1 focus:ring-[#E5D3B3] outline-none transition-all placeholder:text-[#0F172A]/40 text-base"
                    />
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center font-medium bg-red-50 p-2 rounded-sm">{errorMessage}</p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full bg-[#0A192F] text-white uppercase tracking-widest text-xs font-bold py-4 rounded-sm hover:bg-[#C5A059] transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {status === "loading" ? (
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      "Get Instant Callback"
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#0F172A]/40 mt-4 leading-relaxed">
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
