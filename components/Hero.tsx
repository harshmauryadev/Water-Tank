'use client';

import React from 'react';
import { ShoppingCart, ChevronRight, Wifi, Zap, ShieldCheck, RefreshCw, Smartphone, Bell, Droplet, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-28 bg-gradient-to-b from-[#050914] via-[#091124] to-[#050914] overflow-hidden text-white">
      
      {/* Soft Ambient Water Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Next-Gen Smart IoT Water Controller Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>100% True Wireless Autonomy • 5–10 Floors Range (No Wi-Fi Needed)</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Smart Water Tank <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                  Controller
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2 font-medium">
                Automatically monitors water level and controls your tank & motor intelligently. Save water. Save electricity. Stay worry-free.
              </p>
            </div>

            {/* 5 Feature Icons Row */}
            <div className="grid grid-cols-5 gap-2 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-cyan-400 flex items-center justify-center font-bold shadow-xs">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">Auto Control</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center justify-center font-bold shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">Monitoring</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">Motor Guard</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-500/30 text-teal-300 flex items-center justify-center font-bold shadow-xs">
                  <Droplet className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">Save Water</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-300 flex items-center justify-center font-bold shadow-xs">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">WiFi IoT</span>
              </div>
            </div>

            {/* Gradient Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+918004787983"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-extrabold shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Call Us Now</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-cyan-300 hover:bg-slate-800 text-sm font-extrabold shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-teal-400/30 rounded-3xl blur-3xl transform scale-105 pointer-events-none" />

              {/* Main Product Image Container Card */}
              <div className="relative bg-gradient-to-b from-white/90 to-blue-50/80 p-4 sm:p-6 rounded-3xl border border-blue-200/80 shadow-2xl backdrop-blur-xl group hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-900 flex items-center justify-center p-2">
                  <img
                    src="/images/tanki-meter-device.png"
                    alt="Tanki Meter Smart IoT Water Controller Hardware Device"
                    className="w-full h-auto object-contain max-h-[380px] rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge Top Left */}
                <div className="absolute top-8 left-8 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-white text-[11px] font-mono font-bold shadow-xl backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>2mm SENSOR PRECISION</span>
                </div>

                {/* Floating Badge Bottom Right */}
                <div className="absolute bottom-8 right-8 px-4 py-2 rounded-2xl bg-white/95 border border-blue-200 text-slate-900 text-xs font-black shadow-2xl backdrop-blur-md flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-mono">WARRANTY</span>
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


