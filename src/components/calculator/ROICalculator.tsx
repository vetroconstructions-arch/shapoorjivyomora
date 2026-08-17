"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { IndianRupee, TrendingUp, Home, ArrowRight, Calculator, Globe } from "lucide-react";

type CurrencyKey = "INR" | "USD" | "AED" | "SGD" | "GBP" | "EUR" | "QAR";

const currencies: Record<CurrencyKey, { symbol: string; rate: number; label: string }> = {
  INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
  AED: { symbol: "AED ", rate: 0.044, label: "AED (د.إ)" },
  SGD: { symbol: "S$", rate: 0.016, label: "SGD (S$)" },
  GBP: { symbol: "£", rate: 0.0094, label: "GBP (£)" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
  QAR: { symbol: "QAR ", rate: 0.043, label: "QAR (﷼)" },
};

export default function ROICalculator() {
  const [currency, setCurrency] = useState<CurrencyKey>("INR");
  const [propertyValue, setPropertyValue] = useState(12000000); // 1.2 Cr default
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [loanRate, setLoanRate] = useState(8.5);
  const [horizonYears, setHorizonYears] = useState(10);
  const [appreciationRate, setAppreciationRate] = useState(8);
  const [rentalYield, setRentalYield] = useState(5);

  const formatCurrency = (value: number) => {
    const converted = value * currencies[currency].rate;
    if (currency === "INR") {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(value);
    }
    return `${currencies[currency].symbol}${new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(converted)}`;
  };

  // Calculations
  const metrics = useMemo(() => {
    const downPayment = propertyValue * (downPaymentPct / 100);
    const loanAmount = propertyValue - downPayment;
    
    // EMI Calculation (Monthly)
    const r = loanRate / 12 / 100;
    const n = horizonYears * 12;
    const emi = loanAmount > 0 && r > 0 ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;
    
    const totalLoanPaid = emi * n;
    const totalInterestPaid = totalLoanPaid - loanAmount;

    // Appreciation
    const futurePropertyValue = propertyValue * Math.pow(1 + (appreciationRate / 100), horizonYears);
    const totalCapitalGain = futurePropertyValue - propertyValue;

    // Rental Income (Assuming 5% annual rent increase)
    let totalRentalIncome = 0;
    let currentAnnualRent = propertyValue * (rentalYield / 100);
    for (let i = 0; i < horizonYears; i++) {
      totalRentalIncome += currentAnnualRent;
      currentAnnualRent *= 1.05; // 5% rent escalation
    }

    // ROI
    const totalInvestment = downPayment + totalLoanPaid;
    const grossReturn = futurePropertyValue + totalRentalIncome;
    const netProfit = grossReturn - totalInvestment;
    const netROI = (netProfit / totalInvestment) * 100;

    return {
      downPayment,
      loanAmount,
      emi,
      totalLoanPaid,
      totalInterestPaid,
      futurePropertyValue,
      totalCapitalGain,
      totalRentalIncome,
      totalInvestment,
      grossReturn,
      netProfit,
      netROI
    };
  }, [propertyValue, downPaymentPct, loanRate, horizonYears, appreciationRate, rentalYield]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-0">
        
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0A192F] rounded-full flex items-center justify-center text-[#C5A059]">
                <Calculator size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#0A192F]">Investment Simulator</h2>
                <p className="text-xs text-gray-500 font-light mt-0.5">ROI & EMI Projections for Shapoorji Pallonji Vyomora</p>
              </div>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-lg border border-gray-200 self-start sm:self-auto">
              <Globe size={14} className="text-gray-400 ml-1.5" />
              {(["INR", "USD", "AED", "SGD", "GBP", "QAR"] as CurrencyKey[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                    currency === c ? "bg-[#0A192F] text-[#C5A059] shadow-sm" : "text-gray-600 hover:text-[#0A192F]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Property Value */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-[#0A192F]">Property Value</label>
                <span className="text-[#C5A059] font-semibold text-base">{formatCurrency(propertyValue)}</span>
              </div>
              <input 
                type="range" min="8500000" max="30000000" step="100000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full accent-[#C5A059] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>₹85 L (2 BHK)</span>
                <span>₹3 Cr (Duplex)</span>
              </div>
            </div>

            {/* Down Payment & Loan Rate */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#0A192F]">Down Payment</label>
                  <span className="text-[#C5A059] font-semibold">{downPaymentPct}%</span>
                </div>
                <input 
                  type="range" min="10" max="100" step="5"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full accent-[#C5A059] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#0A192F]">Home Loan Rate</label>
                  <span className="text-[#C5A059] font-semibold">{loanRate}%</span>
                </div>
                <input 
                  type="range" min="7" max="12" step="0.1"
                  value={loanRate}
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full accent-[#C5A059] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  disabled={downPaymentPct === 100}
                />
              </div>
            </div>

            {/* Market Variables */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#0A192F]">Expected Appreciation</label>
                  <span className="text-green-600 font-semibold">{appreciationRate}% /yr</span>
                </div>
                <input 
                  type="range" min="4" max="15" step="1"
                  value={appreciationRate}
                  onChange={(e) => setAppreciationRate(Number(e.target.value))}
                  className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#0A192F]">Expected Rental Yield</label>
                  <span className="text-blue-600 font-semibold">{rentalYield}% /yr</span>
                </div>
                <input 
                  type="range" min="2" max="8" step="0.5"
                  value={rentalYield}
                  onChange={(e) => setRentalYield(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Time Horizon */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-[#0A192F]">Investment Horizon</label>
                <span className="text-[#C5A059] font-semibold">{horizonYears} Years</span>
              </div>
              <input 
                type="range" min="3" max="20" step="1"
                value={horizonYears}
                onChange={(e) => setHorizonYears(Number(e.target.value))}
                className="w-full accent-[#C5A059] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Output */}
        <div className="lg:col-span-5 bg-[#0A192F] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <h3 className="text-[#C5A059] font-medium tracking-widest uppercase text-xs mb-8">Projected Returns in {horizonYears} Years</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-1">Total Asset Value</p>
                <p className="text-3xl font-serif text-white">{formatCurrency(metrics.futurePropertyValue)}</p>
                <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
                  <TrendingUp size={16} />
                  <span>+{formatCurrency(metrics.totalCapitalGain)} Capital Gain</span>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-1">Cumulative Rental Income</p>
                <p className="text-3xl font-serif text-white">{formatCurrency(metrics.totalRentalIncome)}</p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-end mb-2">
                  <p className="text-gray-400">Net Profit</p>
                  <p className="text-[#C5A059] text-xl font-semibold">{formatCurrency(metrics.netProfit)}</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-gray-400">Absolute ROI</p>
                  <p className="text-white text-4xl font-serif">{metrics.netROI.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
              }
            }}
            className="relative z-10 w-full mt-10 bg-[#C5A059] text-[#0A192F] py-4 rounded-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 group"
          >
            Download Detailed Report
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
