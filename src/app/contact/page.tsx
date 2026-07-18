"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits"),
  interest: z.string().min(1, "Please select an interest"),
  _honey: z.string().max(0, "Spam detected").optional(),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Inquiry from Vyomora Website",
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
      setErrorMessage("Network error. Please try again or contact us directly.");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F5F5F3] min-h-screen text-[#0F172A]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#E5D3B3] mb-4 block">
            Private Viewing
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Begin Your Journey.
          </h1>
          <p className="text-[#0F172A]/70 font-light max-w-2xl mx-auto">
            Schedule a private viewing or speak with our property consultants to discover the exceptional lifestyle that awaits at Vyomora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 shadow-2xl shadow-black/5 rounded-sm"
          >
            <h3 className="text-2xl font-serif mb-8">Register Interest</h3>
            
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif mb-3">Submission Successful</h4>
                <p className="text-[#0F172A]/70 leading-relaxed mb-8">
                  Your inquiry has been received. Our luxury consultant will be in touch with you shortly.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")} className="border-[#0F172A]/20">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input type="text" {...register("_honey")} style={{ display: 'none' }} />
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Full Name</label>
                  <input 
                    {...register("name")}
                    type="text" 
                    className={`w-full bg-transparent border-b pb-3 focus:outline-none transition-colors text-base ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-[#0F172A]/20 focus:border-[#E5D3B3]'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Email Address</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    className={`w-full bg-transparent border-b pb-3 focus:outline-none transition-colors text-base ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#0F172A]/20 focus:border-[#E5D3B3]'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Phone Number</label>
                  <input 
                    {...register("phone")}
                    type="tel" 
                    className={`w-full bg-transparent border-b pb-3 focus:outline-none transition-colors text-base ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#0F172A]/20 focus:border-[#E5D3B3]'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Interested In</label>
                  <select 
                    {...register("interest")}
                    className={`w-full bg-transparent border-b pb-3 focus:outline-none transition-colors text-base text-[#0F172A] appearance-none ${errors.interest ? 'border-red-400 focus:border-red-400' : 'border-[#0F172A]/20 focus:border-[#E5D3B3]'}`}
                  >
                    <option value="">Select Configuration</option>
                    <option value="2bhk">2 BHK Premium Residence</option>
                    <option value="3bhk">3 BHK Luxury Residence</option>
                    <option value="duplex">3 BHK Duplex Sky Villa</option>
                  </select>
                  {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
                </div>
                
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center font-medium bg-red-50 p-3 rounded-sm border border-red-100">{errorMessage}</p>
                )}

                <div className="pt-6">
                  <Button type="submit" variant="gold" className="w-full flex justify-center items-center h-12" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5D3B3] flex items-center justify-center text-[#E5D3B3] shrink-0 mr-6">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Experience Center</h4>
                  <p className="text-[#0F172A]/70 font-light leading-relaxed">
                    Vyomora by Shapoorji Pallonji,<br />
                    Near Infosys Circle, Hinjewadi Phase 1,<br />
                    Pune, Maharashtra 411057
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5D3B3] flex items-center justify-center text-[#E5D3B3] shrink-0 mr-6">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Contact Numbers</h4>
                  <p className="text-[#0F172A]/70 font-light leading-relaxed">
                    Sales: +91 7744009295<br />
                    Support: +91 7744009295
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5D3B3] flex items-center justify-center text-[#E5D3B3] shrink-0 mr-6">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Operating Hours</h4>
                  <p className="text-[#0F172A]/70 font-light leading-relaxed">
                    Monday to Sunday<br />
                    10:00 AM - 07:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
