'use client';

import React from 'react';
import { ChevronRight, Wifi, ShieldCheck, RefreshCw, Smartphone, Droplet, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-28 bg-gradient-to-b from-[#F8FAFC] via-[#E0F2FE]/60 to-[#F8FAFC] overflow-hidden text-[#0F172A]">
      
      {/* Soft Ambient Water Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Next-Gen Smart IoT Water Controller Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0EA5E9]/30 text-[#0284C7] text-xs font-extrabold shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>100% True Wireless Autonomy • 5–10 Floors Range (No Wi-Fi Needed)</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
                Smart Water Tank <br />
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] bg-clip-text text-transparent drop-shadow-xs">
                  Controller
                </span>
              </h1>
              
              <p className="text-[#64748B] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2 font-medium">
                Automatically monitors water level and controls your tank & motor intelligently. Save water. Save electricity. Stay worry-free.
              </p>
            </div>

            {/* 5 Feature Icons Row */}
            <div className="grid grid-cols-5 gap-2 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-[#0EA5E9] flex items-center justify-center font-bold shadow-xs">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">Auto Control</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-[#0284C7] flex items-center justify-center font-bold shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">Monitoring</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-teal-200 text-[#14B8A6] flex items-center justify-center font-bold shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">Motor Guard</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-[#0EA5E9] flex items-center justify-center font-bold shadow-xs">
                  <Droplet className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">Save Water</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-teal-200 text-[#14B8A6] flex items-center justify-center font-bold shadow-xs">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">WiFi IoT</span>
              </div>
            </div>

            {/* Gradient Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+918004787983"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] hover:from-[#0284C7] hover:to-[#14B8A6] text-white text-sm font-extrabold shadow-lg shadow-[#0EA5E9]/25 hover:shadow-[#0EA5E9]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Call Us Now</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-slate-300 text-[#0284C7] hover:bg-sky-50 text-sm font-extrabold shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Product Device Showcase Image */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-lg">
              
              {/* Soft Radial Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 via-[#0284C7]/15 to-[#14B8A6]/20 rounded-3xl blur-3xl transform scale-105 pointer-events-none" />

              {/* Main Product Image Container Card */}
              <div className="relative bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-2xl backdrop-blur-xl group hover:shadow-[#0EA5E9]/20 transition-all duration-500 overflow-hidden">
                
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm bg-[#0F172A] flex items-center justify-center p-2">
                  <img
                    src="/images/tanki-meter-device.png"
                    alt="Tanki Meter Smart IoT Water Controller Hardware Device"
                    className="w-full h-auto object-contain max-h-[380px] rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge Top Left */}
                <div className="absolute top-8 left-8 px-3.5 py-1.5 rounded-full bg-[#0F172A]/90 border border-[#0EA5E9]/40 text-white text-[11px] font-mono font-bold shadow-xl backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span>2mm SENSOR PRECISION</span>
                </div>

                {/* Floating Badge Bottom Right */}
                <div className="absolute bottom-8 right-8 px-4 py-2 rounded-2xl bg-white/95 border border-slate-200 text-[#0F172A] text-xs font-black shadow-2xl backdrop-blur-md flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                  <div>
                    <span className="block text-[9px] text-[#64748B] uppercase font-mono">WARRANTY</span>
                    <span>1 Year Official Warranty</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


