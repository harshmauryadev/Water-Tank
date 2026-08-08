'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Waves, Cpu, Zap, Smartphone } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      step: '1. Sensor Detects Water Level',
      icon: Waves,
      gradient: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50/80',
      borderLight: 'border-blue-200',
    },
    {
      step: '2. Tanki Meter Processes Data',
      icon: Cpu,
      gradient: 'from-indigo-500 to-blue-600',
      bgLight: 'bg-indigo-50/80',
      borderLight: 'border-indigo-200',
    },
    {
      step: '3. Motor Turns ON/OFF Automatically',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      bgLight: 'bg-amber-50/80',
      borderLight: 'border-amber-200',
    },
    {
      step: '4. You Get Alert on Mobile App',
      icon: Smartphone,
      gradient: 'from-emerald-400 to-teal-600',
      bgLight: 'bg-emerald-50/80',
      borderLight: 'border-emerald-200',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#050914] via-[#091124] to-[#050914] border-y border-slate-800/80 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* 4-Step Vibrant Diagram Row */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3">
            
            {steps.map((s, index) => {
              const IconComponent = s.icon;
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center p-4 w-full md:w-1/4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 shadow-md group">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center mb-3 shadow-md group-hover:rotate-6 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-200 leading-tight">{s.step}</span>
                  </div>

                  {/* Arrow divider */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-cyan-400 font-bold">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}

          </div>

          {/* Real System Diagram Image Banner */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 flex justify-center items-center p-3 group">
            <img
              src="/images/how-it-works.png"
              alt="Tanki Meter How It Works Complete System Flow Diagram"
              className="w-full h-auto max-h-[320px] object-contain rounded-xl transform group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Subtext description & Explore More CTA */}
          <div className="mt-10 pt-8 border-t border-slate-800 space-y-5">
            <p className="text-sm font-medium text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
              Tanki Meter uses advanced sensors and smart logic to automate your water tank efficiently. No more manual checking!
            </p>

            <div className="flex justify-center">
              <a
                href="#product-showcase"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-xs font-extrabold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-95"
              >
                <span>Explore More</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;


