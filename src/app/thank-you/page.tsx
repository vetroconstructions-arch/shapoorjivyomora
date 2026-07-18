"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#F5F5F3] text-[#0F172A] flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-900/5"
        >
          <CheckCircle2 size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#E5D3B3] mb-4 block">
            Submission Successful
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Thank You for Your Interest.
          </h1>
          <p className="text-[#0F172A]/70 font-light max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Your inquiry has been received by our team. A luxury property consultant from Shapoorji Pallonji Vyomora will be in touch with you shortly to assist with your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/" passHref>
              <Button variant="default" className="w-full sm:w-auto flex items-center group">
                Return to Home
                <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/residences" passHref>
              <Button variant="outline" className="w-full sm:w-auto text-[#0F172A] border-[#0F172A]/20 hover:bg-[#0F172A]/5 hover:border-[#0F172A]/40">
                Explore Residences
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
