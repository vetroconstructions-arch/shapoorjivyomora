import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5D3B3]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E5D3B3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
        <div className="text-[#E5D3B3] mb-8 font-serif tracking-[0.2em] uppercase text-sm border-b border-[#E5D3B3]/30 pb-2">
          Page Not Found
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          <span className="text-white/50 italic">404</span> - Not Found
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-lg leading-relaxed">
          The page you are looking for has been moved, removed, or never existed.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button 
              variant="gold"
              className="w-full sm:w-auto px-10 py-4 text-sm tracking-widest uppercase"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
