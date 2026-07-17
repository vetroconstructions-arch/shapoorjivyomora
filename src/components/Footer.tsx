import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#7DD3FC] to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col group mb-8">
              <span className="text-2xl font-serif tracking-widest text-white">
                VYOMORA
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-white/50 uppercase mt-1">
                By Shapoorji Pallonji
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-xs">
              Luxury living designed around tomorrow. An architectural landmark crafted for elevated urban living in Hinjewadi, Pune.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <span className="sr-only">Social {i}</span>
                  <div className="w-4 h-4 bg-current" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#7DD3FC] uppercase mb-8">Experience</h4>
            <ul className="space-y-4">
              {["The Vision", "Architecture", "Residences", "Amenities", "Location"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/70 hover:text-white flex items-center group transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out text-[#7DD3FC]">
                      <ArrowRight size={12} />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#7DD3FC] uppercase mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={18} className="text-white/40 mt-1 mr-4 shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Vyomora by Shapoorji Pallonji,<br />
                  Off Maan Village Road, Near Phase 1,<br />
                  Hinjawadi, Pune - 411057
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-white/40 mr-4 shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-white/70 hover:text-white transition-colors">
                  +91 XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-white/40 mr-4 shrink-0" />
                <a href="mailto:info@vyomora-hinjewadi.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@vyomora-hinjewadi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#7DD3FC] uppercase mb-8">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-6 font-light">
              Register your interest to receive exclusive updates about the project.
            </p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-[#7DD3FC] transition-colors placeholder:text-white/30 rounded-none"
              />
              <button 
                type="button" 
                className="text-left text-xs tracking-[0.15em] text-white hover:text-[#7DD3FC] uppercase flex items-center transition-colors group"
              >
                Register Now
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* RERA & Disclaimer */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col justify-between items-center text-[10px] md:text-xs text-white/40 font-light gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="mb-1">MahaRERA Registration No: <span className="text-white/60 font-medium">PR1260002600999</span></p>
              <p>Available at website: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">maharera.mahaonline.gov.in</a></p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">&copy; {new Date().getFullYear()} Shapoorji Pallonji Real Estate. All rights reserved.</p>
              <div className="flex space-x-4 justify-center md:justify-end">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
          
          <div className="text-[9px] md:text-[10px] text-justify text-white/30 max-w-7xl mx-auto leading-relaxed border-t border-white/5 pt-6">
            Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images are for representation purposes only. This is not the official website. This website is operated by an authorized channel partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us.
          </div>
        </div>
      </div>
    </footer>
  );
}
