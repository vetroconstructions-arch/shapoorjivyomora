"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  interest: z.string().min(1, "Please select an interest"),
});

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert("Thank you for your interest. Our luxury consultant will contact you shortly.");
    reset();
  };

  return (
    <div className="pt-32 pb-24 bg-[#F5F5F3] min-h-screen text-[#0F172A]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7DD3FC] mb-4 block">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Full Name</label>
                <input 
                  {...register("name")}
                  type="text" 
                  className="w-full bg-transparent border-b border-[#0F172A]/20 pb-3 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Email Address</label>
                <input 
                  {...register("email")}
                  type="email" 
                  className="w-full bg-transparent border-b border-[#0F172A]/20 pb-3 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Phone Number</label>
                <input 
                  {...register("phone")}
                  type="tel" 
                  className="w-full bg-transparent border-b border-[#0F172A]/20 pb-3 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#0F172A]/60 mb-2">Interested In</label>
                <select 
                  {...register("interest")}
                  className="w-full bg-transparent border-b border-[#0F172A]/20 pb-3 focus:outline-none focus:border-[#7DD3FC] transition-colors text-[#0F172A] appearance-none"
                >
                  <option value="">Select Configuration</option>
                  <option value="2bhk">2 BHK Premium Residence</option>
                  <option value="3bhk">3 BHK Luxury Residence</option>
                  <option value="duplex">3 BHK Duplex Sky Villa</option>
                </select>
                {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
              </div>

              <div className="pt-6">
                <Button variant="gold" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
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
                <div className="w-12 h-12 rounded-full border border-[#7DD3FC] flex items-center justify-center text-[#7DD3FC] shrink-0 mr-6">
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
                <div className="w-12 h-12 rounded-full border border-[#7DD3FC] flex items-center justify-center text-[#7DD3FC] shrink-0 mr-6">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Contact Numbers</h4>
                  <p className="text-[#0F172A]/70 font-light leading-relaxed">
                    Sales: +91 XXXXXXXXXX<br />
                    Support: +91 XXXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#7DD3FC] flex items-center justify-center text-[#7DD3FC] shrink-0 mr-6">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Email Address</h4>
                  <p className="text-[#0F172A]/70 font-light leading-relaxed">
                    info@vyomora-hinjewadi.com<br />
                    sales@vyomora-hinjewadi.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#7DD3FC] flex items-center justify-center text-[#7DD3FC] shrink-0 mr-6">
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
