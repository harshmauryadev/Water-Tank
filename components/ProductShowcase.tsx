'use client';

import React from 'react';
import { Cpu, Wifi, Radio, Sliders, ShieldCheck, Monitor, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const ProductShowcase = () => {
  const pointerLabels = [
    {
      id: 1,
      title: 'HD OLED Live Status Display',
      desc: 'Real-time level %, water volume, and pump relay status.',
      icon: Monitor,
      position: 'top-6 -left-4 sm:left-6',
    },
    {
      id: 2,
      title: 'Ultrasonic Sensor Input Port',
      desc: 'Contactless depth measurement port with zero mechanical floats.',
      icon: Radio,
      position: 'top-10 -right-4 sm:right-6',
    },
    {
      id: 3,
      title: 'Dual Wi-Fi & Bluetooth Antenna',
      desc: 'Seamless cloud sync for mobile app control & push notifications.',
      icon: Wifi,
      position: 'bottom-8 -left-4 sm:left-6',
    },
    {
      id: 4,
      title: 'Heavy-Duty 30A Auto Relay',
      desc: 'Supports heavy single-phase and 3-phase water pumps up to 5HP.',
      icon: Zap,
      position: 'bottom-8 -right-4 sm:right-6',
    },
  ];

  return (
    <section id="product-showcase" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Product Architecture"
          title="Engineered for Precision &"
          highlightedTitle="Industrial Durability"
          subtitle="Explore the advanced internal hardware and external interface of the AquaSmart IoT Controller."
        />

        {/* Large Centered Image / Controller Showcase Card with Interactive Pointer Badges */}
        <div className="mt-16 relative flex justify-center">
          
          <div className="w-full max-w-4xl bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border border-slate-200/80 rounded-[40px] p-8 sm:p-14 shadow-soft-xl relative">
            
            {/* Center Product Controller Graphics */}
            <div className="max-w-md mx-auto bg-slate-900 rounded-[32px] p-8 border-4 border-slate-800 shadow-2xl relative text-white">
              
              {/* Product Hardware Brand */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                    AS
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">AquaSmart Pro</h4>
                    <span className="text-[10px] text-blue-400 font-mono">MODEL: IoT-WLC-2026</span>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
              </div>

              {/* Center Display Panel */}
              <div className="my-8 bg-slate-950 p-6 rounded-2xl border border-blue-500/40 text-center relative shadow-inner">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">AUTOMATIC LEVEL CONTROL</div>
                <div className="text-5xl font-black text-white font-mono my-2 text-gradient-blue">
                  92<span className="text-3xl text-blue-400">%</span>
                </div>
                <div className="text-xs text-blue-300 font-mono">TANK FULL • MOTOR AUTO OFF</div>
                
                {/* Visual Level Meter */}
                <div className="mt-4 h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-blue-500 rounded-full w-[92%]" />
                </div>
              </div>

              {/* Ports & Switches */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">SENSOR PORT</span>
                  <span className="font-bold text-slate-200">ULTRASONIC V3</span>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">RELAY CAPACITY</span>
                  <span className="font-bold text-blue-400">30A HEAVY DUTY</span>
                </div>
              </div>

            </div>

            {/* Annotated Pointer Label Cards */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {pointerLabels.map((label) => {
                const IconComponent = label.icon;
                return (
                  <div
                    key={label.id}
                    className="glass-card-light rounded-3xl p-6 flex items-start gap-4 border border-blue-100/80 shadow-soft-card"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 font-bold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">{label.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{label.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
