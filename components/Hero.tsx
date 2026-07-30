'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Zap, Wifi, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-blue-50/90 via-sky-50/40 to-white overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-sky-300/20 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>Next-Gen Smart IoT Water Controller</span>
            </div>

            {/* Large Product Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Tanki Meter IoT. <br />
              <span className="text-gradient-blue">Zero Effort. Zero Wastage.</span>
            </h1>

            {/* Small Description */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fail-safe add-on controller for your existing pump starter. Non-contact float level sensing, dry-run & voltage safety cutoffs, and real-time smartphone dashboard.
            </p>

            {/* One "Buy Now" Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button variant="primary" size="lg" icon={ArrowRight} onClick={() => window.location.href = '#cta'}>
                Order Now
              </Button>
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Fail-Safe Overlay Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>433 MHz RF Tank-Top</span>
              </div>
            </div>

          </div>

          {/* Right Product Image Showcase Container */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              
              {/* Product Card Visual */}
              <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[36px] p-6 sm:p-8 shadow-2xl shadow-blue-900/10 relative">
                
                {/* Floating Badge 1 */}
                <div className="absolute -top-4 -left-4 bg-white/95 border border-blue-100 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Wi-Fi & RF Link</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">● Cloud Active</span>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 border border-blue-100 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">3-Relay Overlay</span>
                    <span className="text-[10px] text-blue-600 font-semibold">START1 / START2 / STOP</span>
                  </div>
                </div>

                {/* Main Product Controller Mockup Graphic */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden border border-slate-800">
                  
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">TANKI METER BASE V1.0</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      SYS ONLINE
                    </span>
                  </div>

                  {/* OLED Simulated Display Screen */}
                  <div className="my-6 p-5 rounded-2xl bg-slate-950 border border-blue-500/30 shadow-inner text-center relative">
                    <div className="text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-1">LIVE WATER LEVEL</div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight my-1">
                      85<span className="text-2xl text-blue-400">%</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">235.7 V • 0.0 A • 49.8 Hz</div>
                    
                    {/* Simulated Wave Fill Bar */}
                    <div className="mt-4 w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full w-[85%]" />
                    </div>
                  </div>

                  {/* Relay Status */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-mono">PUMP RELAY</span>
                      <span className="font-bold text-blue-400">IDLE / AUTO</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-mono">SAFETY SYSTEM</span>
                      <span className="font-bold text-emerald-400">ACTIVE</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Water Wave Background Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-20 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
