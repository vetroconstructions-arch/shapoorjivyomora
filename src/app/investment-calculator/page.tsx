import { Metadata } from "next";
import ROICalculator from "@/components/calculator/ROICalculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Investment & ROI Calculator | Shapoorji Pallonji Vyomora | Pune Real Estate",
  description: "Calculate your exact ROI, rental yields, and capital appreciation for Shapoorji Pallonji Vyomora. The ultimate investment calculator for Pune real estate.",
  keywords: ["roi calculator real estate", "pune real estate investment calculator", "shapoorji pallonji vyomora roi", "hinjewadi rental yield calculator"],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/investment-calculator",
  }
};

export default function InvestmentCalculatorPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <Breadcrumbs 
            items={[{ label: "Investment Calculator", href: "/investment-calculator" }]} 
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Project Your <span className="text-[#C5A059]">Wealth.</span>
            </h1>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              Use our advanced ROI simulator to calculate your exact returns at Shapoorji Pallonji Vyomora. Adjust your horizon, expected yields, and appreciation to see your future asset value.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container mx-auto px-6 md:px-12 -mt-10 relative z-10">
        <ROICalculator />
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-6 md:px-12 mt-12">
        <p className="text-xs text-gray-400 font-light max-w-4xl mx-auto text-center">
          *Disclaimer: The Investment & ROI Calculator is provided for illustrative purposes only. The projections for capital appreciation and rental yields are estimates based on historical data and current market trends in Hinjewadi, Pune. Actual returns may vary depending on macroeconomic factors, interest rate fluctuations, and individual loan terms. This does not constitute formal financial advice.
        </p>
      </section>
    </div>
  );
}
