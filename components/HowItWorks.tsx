'use client';

import React from 'react';
import { ArrowRight, Waves, Radio, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Sensor Measures Water Depth',
      description: 'The contactless ultrasonic sensor sends live water depth data to the controller in milliseconds.',
    },
    {
      number: '02',
      title: 'Controller Analyzes Thresholds',
      description: 'The smart controller evaluates your custom high and low trigger levels automatically.',
    },
    {
      number: '03',
      title: 'Pump Switches Automatically',
      description: 'The heavy-duty relay triggers the water pump ON when water is low and OFF before overflow.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blue Rounded Background Section Container */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-[40px] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">

          {/* Subtle Ambient Wave Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <SectionHeading
            badge="Simple Automation Workflow"
            title="How the Smart System"
            highlightedTitle="Operates Seamlessly"
            subtitle="An end-to-end intelligent closed loop connecting your storage tank to your water pump."
            dark={true}
          />

          {/* ── Image Section (above the diagram) ── */}
          {/* 👉 Replace src with your actual image path, e.g. src="/images/system-overview.png" */}
          <div className="mt-12 mb-6 flex justify-center">
            <div className="w-[50%] h-[50%] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
              <img
                src="/images/how-it-works.png"
                alt="Smart Water Level Controller System Overview"
                className="w-full h-auto"
                onError={(e) => {
                  /* Fallback placeholder shown when image is missing */
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement as HTMLElement;
                  parent.innerHTML = `
                    <div style="height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:rgba(255,255,255,0.5);">
                      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                      <span style="font-size:12px;font-family:monospace;letter-spacing:.1em;">ADD YOUR IMAGE HERE</span>
                      <span style="font-size:10px;opacity:.6;">Place image at public/images/how-it-works.png</span>
                    </div>`;
                }}
              />
            </div>
          </div>

          {/* System Flow Diagram: Water Tank -> Sensor -> Controller -> Pump */}
          <div className="mb-16 p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <div className="text-center mb-6 text-xs font-mono font-bold tracking-widest text-blue-200 uppercase">
              SYSTEM ARCHITECTURE DIAGRAM
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center relative">

              {/* Step 1: Water Tank */}
              <div className="bg-white text-slate-900 rounded-2xl p-5 border border-white/40 shadow-lg text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                  <Waves className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900">1. Water Tank</h4>
                <span className="text-xs text-slate-500 mt-1">Storage Depth Data</span>
              </div>

              {/* Arrow Indicator 1 */}
              <div className="hidden lg:flex items-center justify-center text-blue-200">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* Step 2: Ultrasonic Sensor */}
              <div className="bg-white text-slate-900 rounded-2xl p-5 border border-white/40 shadow-lg text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                  <Radio className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900">2. IoT Sensor</h4>
                <span className="text-xs text-slate-500 mt-1">Ultrasonic Pulse Wave</span>
              </div>

              {/* Arrow Indicator 2 */}
              <div className="hidden lg:flex items-center justify-center text-blue-200">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* Step 3: Controller */}
              <div className="bg-white text-slate-900 rounded-2xl p-5 border border-white/40 shadow-lg text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900">3. Smart Controller</h4>
                <span className="text-xs text-slate-500 mt-1">Relay Logic Brain</span>
              </div>

              {/* Arrow Indicator 3 */}
              <div className="hidden lg:flex items-center justify-center text-blue-200">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* Step 4: Water Pump */}
              <div className="bg-white text-slate-900 rounded-2xl p-5 border border-white/40 shadow-lg text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900">4. Water Pump</h4>
                <span className="text-xs text-slate-500 mt-1">Automated Relay Cutoff</span>
              </div>

            </div>
          </div>

          {/* Three Simple Steps Below Diagram */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <span className="text-3xl font-black font-mono text-blue-200 block mb-2">{step.number}</span>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
