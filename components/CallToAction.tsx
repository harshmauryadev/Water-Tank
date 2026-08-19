'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section id="cta" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Centered Soft Blue Card Container */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[40px] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              Ready to Upgrade?
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start Automating Your Water Pump Today
            </h2>

            {/* Short Description */}
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Order your Tanki Meter IoT kit by Inflection now — includes Tank-Base controller, Tank-Top RF unit, CT sensor, and 12V/9V adapters.
            </p>

            {/* "Call Us Now" Button */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918004787983"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-base shadow-2xl shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span>Call Us Now (+91 8004787983)</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Guarantee Trust Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-blue-200 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Truck className="w-4 h-4 text-white" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>1 Year Full Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Headphones className="w-4 h-4 text-white" />
                <span>24/7 Tech Support</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;

