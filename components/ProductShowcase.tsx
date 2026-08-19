'use client';

import React from 'react';
import { Cpu, Wifi, ShieldCheck, Zap, Radio, Sliders, Droplet } from 'lucide-react';

export const ProductShowcase = () => {
  const specifications = [
    {
      title: 'Wireless Technology',
      value: 'True Wireless Autonomy',
      desc: 'Operates on robust wireless (5 to 10 floors range). 100% independent of Wi-Fi or internet for standard day-to-day tank control.',
      icon: Wifi,
      gradient: 'from-blue-500 to-cyan-500',
      borderLight: 'border-blue-200',
    },
    {
      title: 'Sensor Precision',
      value: 'Patented 2mm Sensor',
      desc: 'Delivers 2mm accuracy. Engineered to withstand harsh conditions including hard water, sand, and algae build-up without losing performance.',
      icon: Radio,
      gradient: 'from-indigo-500 to-blue-600',
      borderLight: 'border-indigo-200',
    },
    {
      title: 'Maintenance & Service',
      value: 'Maintenance-Free Design',
      desc: 'Enjoy true reliability with zero ongoing service charges or recurring issues of traditional wired sensors.',
      icon: ShieldCheck,
      borderLight: 'border-emerald-200',
      gradient: 'from-emerald-400 to-teal-600',
    },
    {
      title: 'Operation Modes',
      value: 'Continuous Multi-Mode Operation',
      desc: 'Seamlessly switches between online, local, and offline modes for non-stop performance regardless of internet availability.',
      icon: Cpu,
      gradient: 'from-purple-500 to-indigo-600',
      borderLight: 'border-purple-200',
    },
    {
      title: 'Telemetry & Protection',
      value: 'Live Voltage & Current Monitoring',
      desc: 'Measures running current and line voltage to protect motor from hazardous voltage fluctuations and dry-run conditions.',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      borderLight: 'border-amber-200',
    },
    {
      title: 'Control & Hardware',
      value: 'Manual Override & Buzzer Alarm',
      desc: 'Physical manual override buttons synced with starter panel + built-in distinctive audio buzzer error alerts.',
      icon: Sliders,
      gradient: 'from-cyan-500 to-blue-600',
      borderLight: 'border-cyan-200',
    },
  ];

  return (
    <section id="product-showcase" className="py-20 bg-gradient-to-b from-slate-50/70 via-blue-50/30 to-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Specifications</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium mt-2 max-w-xl mx-auto">
            High-performance hardware components built for 24x7 continuous reliability.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* Split Grid: Left Image Graphic Card & Right Specifications Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Visual Product Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-blue-500/30 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden group hover:border-blue-400/60 transition-all duration-300">
              
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Hardware Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    <Droplet className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Tanki Meter IoT Base</h4>
                    <span className="text-[10px] text-cyan-400 font-mono">SPECIFICATION MODEL V1.0</span>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Real Hardware Image Visual Container */}
              <div className="my-5 bg-slate-950/90 p-3 rounded-2xl border border-blue-500/40 shadow-inner text-center relative overflow-hidden group/img">
                <img
                  src="/images/tanki-meter-device.png"
                  alt="Tanki Meter IoT Hardware Device"
                  className="w-full h-44 object-contain rounded-xl transform group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-cyan-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-md">
                  <span>LIVE SENSOR TELEMETRY</span>
                  <span className="text-emerald-400 font-bold">235.7V AC</span>
                </div>
              </div>

              {/* Feature Highlights Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">OVERLOAD CUTOFF</span>
                  <span className="font-bold text-cyan-400">AUTOMATIC PT/CT</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">ENCLOSURE</span>
                  <span className="font-bold text-emerald-400">ABS HEAVY DUTY</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>WARRANTY: 1 YEAR</span>
                <span className="text-cyan-400 font-bold">100% FAIL-SAFE</span>
              </div>

            </div>
          </div>

          {/* Right Side 6 Specs Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {specifications.map((spec, idx) => {
              const IconComponent = spec.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border ${spec.borderLight} rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${spec.gradient} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {spec.title}
                        </span>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                          {spec.value}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium pt-2 border-t border-slate-100">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;


