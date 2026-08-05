'use client';

import React from 'react';
import { ShoppingCart, ChevronRight, Wifi, Zap, ShieldCheck, RefreshCw, Smartphone, Bell, Droplet, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-28 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-white overflow-hidden">
      
      {/* Soft Ambient Water Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Next-Gen Smart IoT Water Controller Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-blue-200 text-blue-700 text-xs font-bold shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>100% True Wireless Autonomy • 5–10 Floors Range (No Wi-Fi Needed)</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Smart Water Tank <br />
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  Controller
                </span>
              </h1>
              
              <p className="text-slate-700 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2 font-semibold">
                Automatically monitors water level and controls your tank & motor intelligently. Save water. Save electricity. Stay worry-free.
              </p>
            </div>

            {/* 5 Feature Icons Row */}
            <div className="grid grid-cols-5 gap-2 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100/90 text-blue-600 flex items-center justify-center font-bold shadow-xs">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 leading-tight">Auto Tank Control</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-100/90 text-cyan-600 flex items-center justify-center font-bold shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 leading-tight">Real-time Monitoring</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/90 text-indigo-600 flex items-center justify-center font-bold shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 leading-tight">Motor Protection</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100/90 text-teal-600 flex items-center justify-center font-bold shadow-xs">
                  <Droplet className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 leading-tight">Water & Power Saving</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100/90 text-sky-600 flex items-center justify-center font-bold shadow-xs">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 leading-tight">WiFi IoT Enabled</span>
              </div>
            </div>

            {/* Gradient Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+918004787983"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-extrabold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Call Us Now</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white border-2 border-blue-500/80 text-blue-600 hover:bg-blue-50 text-sm font-extrabold shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


