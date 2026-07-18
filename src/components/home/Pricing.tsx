"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Download } from "lucide-react";

const pricingData = [
  { typology: "2 BHK (LUXE)", area: "684.91", price: "₹88.19 Lacs - ₹95.28 Lacs" },
  { typology: "2 BHK (SMART)", area: "749.60", price: "₹96.54 Lacs - ₹1.02 CR" },
  { typology: "2 BHK (GRANDE)", area: "780-785", price: "₹1.00 CR - ₹1.09 CR" },
  { typology: "2 BHK (ROYALE)", area: "838.95", price: "₹1.07 CR - ₹1.16 CR" },
  { typology: "3 BHK (SELECT)", area: "1052", price: "₹1.36 CR - ₹1.46 CR" },
  { typology: "3 BHK (ELITE)", area: "1,090.72", price: "₹1.41 CR - ₹1.52 CR" },
  { typology: "3 BHK REFUGE", area: "1037-1254", price: "₹1.34 CR - ₹1.69 CR" },
  { typology: "3 BHK (IMPERIAL)", area: "1184-1186", price: "₹1.54 CR - ₹1.70 CR" },
  { typology: "3 BHK DUPLEX", area: "1459-1467", price: "₹1.96 CR - ₹2.16 CR" },
];

export default function Pricing() {
  return (
    <section id="residences" className="py-24 md:py-32 bg-watercolor relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#C5A059]/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
            Pricing & Configurations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">
            Intelligent Spaces. <span className="text-[#C5A059] italic">Impeccable Value.</span>
          </h2>
          <p className="text-[#1e2338]/80 font-light max-w-2xl mx-auto">
            Discover thoughtfully crafted residences with layouts optimized for modern living. Choose from our diverse range of 2 & 3 BHK configurations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-sm overflow-hidden border border-[#0A192F]/10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#0A192F]/10 bg-white/40">
                    <th className="py-5 px-6 font-serif text-[#0A192F] text-sm tracking-widest uppercase whitespace-nowrap">Typology</th>
                    <th className="py-5 px-6 font-serif text-[#0A192F] text-sm tracking-widest uppercase whitespace-nowrap">Total Usable Area (sq.ft.)</th>
                    <th className="py-5 px-6 font-serif text-[#0A192F] text-sm tracking-widest uppercase whitespace-nowrap">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-[#0A192F]/5 hover:bg-white/80 transition-colors group"
                    >
                      <td className="py-5 px-6 text-[#0A192F] font-medium whitespace-nowrap group-hover:text-[#C5A059] transition-colors">
                        {row.typology}
                      </td>
                      <td className="py-5 px-6 text-[#1e2338]/80 font-light">
                        {row.area}
                      </td>
                      <td className="py-5 px-6 text-[#0A192F] font-medium">
                        {row.price}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1e2338]/50 font-light gap-4 px-2">
            <p className="text-center sm:text-left">
              * Prices are indicative and subject to revision by the Developer without prior notice.<br />
              * Above Price excludes advance maintenance and corpus fund charges, to be paid on possession.<br />
              * All taxes are subject to change as per the applicable law prevailing at such time.
            </p>
            <Button 
              variant="gold" 
              className="text-sm bg-[#0A192F] text-white shrink-0"
              onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
