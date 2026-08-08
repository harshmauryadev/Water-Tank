'use client';

import React from 'react';
import { Smartphone, Bell, SlidersHorizontal, BarChart3, ShieldCheck, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export const AppSection = () => {
  return (
    <section id="app-section" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Mobile Dashboard"
              title="Real-Time Smartphone Control"
              highlightedTitle="From Anywhere Globally"
              subtitle="The Tanki Meter Android app by Inflection gives you quick pump actions, live electrical telemetry (Voltage, Current, Frequency), and safety configuration."
              dark={false}
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Quick Actions: Turn ON / OFF / Force ON</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">One-tap motor triggers with Force ON override mode for emergency top-ups.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0 text-cyan-600">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Electrical Telemetry & Voltage Protection</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Live monitoring of 230V AC Voltage, Current (A), Active Power (W), and Frequency (49.8 Hz).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Safety Limits & Sensor Calibration</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Configure Auto-Off timers, Min/Max Voltage limits (180V–250V), and depth thresholds.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="primary" icon={Download} onClick={() => window.open('https://play.google.com/store/apps/details?id=org.inflection.iot.tankimeter', '_blank')}>
                Get Android App (Play Store)
              </Button>
            </div>
          </div>

          {/* Right Column: Realistic Dual Phone Mockup Visual */}
          <div className="lg:col-span-6 flex justify-center items-center py-6 overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-lg flex justify-center items-center px-2">
              
              {/* Decorative Glow behind phones */}
              <div className="absolute w-80 h-80 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-teal-400/30 rounded-full blur-3xl pointer-events-none" />

              {/* Phone 1: Left Phone (Live Control & Status Screen) */}
              <div className="relative z-20 w-[210px] xs:w-[240px] sm:w-[285px] bg-slate-950 border-[5px] sm:border-[7px] border-slate-800 rounded-[38px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl shadow-blue-950/60 ring-1 ring-slate-700/60 transform -rotate-6 hover:rotate-0 transition-transform duration-500 shrink-0">
                {/* Side Volume / Power Buttons */}
                <div className="absolute -left-[8px] sm:-left-[10px] top-20 w-[3px] h-8 sm:h-9 bg-slate-700 rounded-l-md" />
                <div className="absolute -left-[8px] sm:-left-[10px] top-32 w-[3px] h-8 sm:h-9 bg-slate-700 rounded-l-md" />
                <div className="absolute -right-[8px] sm:-right-[10px] top-24 w-[3px] h-10 sm:h-12 bg-slate-700 rounded-r-md" />

                {/* Dynamic Island / Notch */}
                <div className="w-18 sm:w-22 h-3.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-center gap-2 border border-slate-800/80 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-2 h-2 rounded-full bg-blue-950 border border-blue-500/50 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
                  </div>
                </div>

                {/* Screen Content */}
                <div className="bg-[#080d1a] rounded-[28px] sm:rounded-[36px] p-2.5 sm:p-3 border border-slate-800/80 flex flex-col justify-between min-h-[420px] xs:min-h-[440px] sm:min-h-[490px] text-left font-sans overflow-hidden">
                  
                  <div className="space-y-2 sm:space-y-2.5">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 font-mono px-0.5">
                      <span>09:41</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[8px] sm:text-[9px]">5G</span>
                        <div className="w-3.5 sm:w-4 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
                          <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 sm:pb-2">
                      <div>
                        <span className="text-[7px] sm:text-[8px] text-cyan-400 font-mono tracking-wider uppercase font-bold">TM-2607</span>
                        <h5 className="text-[11px] sm:text-xs font-black text-white">Tanki Meter Pro</h5>
                      </div>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[7px] sm:text-[8px] font-bold border border-emerald-500/40 animate-pulse">
                        LIVE
                      </span>
                    </div>

                    {/* Water Tank Level Gauge Card */}
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-slate-900 to-blue-950/80 border border-blue-500/30 text-center relative overflow-hidden shadow-inner">
                      <span className="text-[7px] sm:text-[8px] font-mono text-cyan-400 uppercase tracking-widest block mb-0.5">TANK LEVEL</span>
                      <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight my-0.5 flex items-baseline justify-center gap-0.5">
                        85<span className="text-base sm:text-lg text-cyan-400">%</span>
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-emerald-400 font-semibold">Water Available (Optimal)</p>
                      
                      {/* Water Level Bar */}
                      <div className="mt-1.5 sm:mt-2 w-full h-2.5 sm:h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 rounded-full w-[85%] animate-pulse" />
                      </div>
                    </div>

                    {/* Pump Status & Live Telemetry Summary */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1 sm:space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-slate-400 block font-mono">PUMP STATE</span>
                          <span className="text-[10px] sm:text-xs font-black text-emerald-400">AUTO (IDLE)</span>
                        </div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="grid grid-cols-2 gap-1 pt-1 border-t border-slate-800 text-[8px] sm:text-[9px]">
                        <div>
                          <span className="text-slate-400 block text-[7px] sm:text-[8px]">Voltage</span>
                          <span className="font-mono font-bold text-cyan-300">232 V</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[7px] sm:text-[8px]">Power</span>
                          <span className="font-mono font-bold text-cyan-300">0.0 W</span>
                        </div>
                      </div>
                    </div>

                    {/* 3 Quick Action Controls */}
                    <div>
                      <span className="text-[7px] sm:text-[8px] font-mono text-slate-400 uppercase tracking-wider block mb-1">MOTOR CONTROLS</span>
                      <div className="grid grid-cols-3 gap-1 text-center text-[8px] sm:text-[9px] font-extrabold text-white">
                        <button className="py-1.5 sm:py-2 px-0.5 rounded-lg sm:rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-700 shadow-md">
                          ON
                        </button>
                        <button className="py-1.5 sm:py-2 px-0.5 rounded-lg sm:rounded-xl bg-gradient-to-b from-red-500 to-red-700 shadow-md">
                          OFF
                        </button>
                        <button className="py-1.5 sm:py-2 px-0.5 rounded-lg sm:rounded-xl bg-gradient-to-b from-purple-500 to-purple-700 shadow-md">
                          FORCE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* App Bottom Navigation Bar */}
                  <div className="pt-1">
                    <div className="p-1 sm:p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-around text-[8px] sm:text-[9px] text-slate-400">
                      <span className="text-cyan-400 font-bold flex flex-col items-center">
                        <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[6px] sm:text-[7px]">Home</span>
                      </span>
                      <span className="hover:text-white flex flex-col items-center">
                        <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[6px] sm:text-[7px]">Stats</span>
                      </span>
                      <span className="hover:text-white flex flex-col items-center">
                        <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[6px] sm:text-[7px]">Settings</span>
                      </span>
                    </div>
                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="w-20 sm:w-24 h-1 bg-slate-700 rounded-full mx-auto mt-1.5" />
              </div>

              {/* Phone 2: Right Phone (Telemetry & Analytics Screen) */}
              <div className="relative z-10 w-[195px] xs:w-[220px] sm:w-[265px] bg-slate-950 border-[5px] sm:border-[7px] border-slate-800 rounded-[38px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl shadow-cyan-950/50 ring-1 ring-slate-700/60 transform rotate-6 -ml-20 xs:-ml-24 sm:-ml-16 mt-6 sm:mt-8 hover:rotate-0 transition-transform duration-500 shrink-0">
                {/* Side Buttons */}
                <div className="absolute -right-[8px] sm:-right-[10px] top-24 w-[3px] h-10 sm:h-12 bg-slate-700 rounded-r-md" />

                {/* Dynamic Island */}
                <div className="w-16 sm:w-18 h-3.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-center gap-1.5 border border-slate-800/80 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>

                {/* Screen Content */}
                <div className="bg-[#080d1a] rounded-[28px] sm:rounded-[36px] p-2.5 sm:p-3 border border-slate-800/80 flex flex-col justify-between min-h-[420px] xs:min-h-[440px] sm:min-h-[490px] text-left font-sans overflow-hidden">
                  
                  <div className="space-y-2 sm:space-y-2.5">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-400 font-mono px-0.5">
                      <span>09:41</span>
                      <span className="text-cyan-400 font-bold">TELEMETRY</span>
                    </div>

                    {/* Header */}
                    <div className="border-b border-slate-800/80 pb-1 sm:pb-1.5">
                      <span className="text-[7px] sm:text-[8px] text-cyan-400 font-mono uppercase font-bold">SENSORS</span>
                      <h5 className="text-[11px] sm:text-xs font-black text-white">Monitoring</h5>
                    </div>

                    {/* Telemetry Tiles */}
                    <div className="space-y-1 sm:space-y-1.5 text-white">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-between">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-slate-400 block font-mono">VOLTAGE</span>
                          <span className="text-[10px] sm:text-xs font-black text-cyan-300">235.7 V</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">OPTIMAL</span>
                      </div>

                      <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-slate-400 block font-mono">CURRENT</span>
                          <span className="text-[10px] sm:text-xs font-black text-cyan-300">0.00 A</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-mono">IDLE</span>
                      </div>

                      <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-slate-400 block font-mono">FREQUENCY</span>
                          <span className="text-[10px] sm:text-xs font-black text-cyan-300">49.8 Hz</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-mono">STABLE</span>
                      </div>

                      <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-slate-400 block font-mono">POWER FACTOR</span>
                          <span className="text-[10px] sm:text-xs font-black text-cyan-300">0.98 PF</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] text-emerald-400 font-mono">OK</span>
                      </div>
                    </div>

                    {/* Cutoff Settings Card */}
                    <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-0.5">
                      <span className="text-[7px] sm:text-[8px] text-emerald-400 font-mono uppercase font-bold block">SAFETY PROTECTION</span>
                      <p className="text-[7.5px] sm:text-[8.5px] text-slate-300 font-semibold">Dry-Run Cutoff & Auto Limit Active</p>
                    </div>
                  </div>

                  {/* Network & Device Info Footer */}
                  <div className="pt-1 sm:pt-1.5">
                    <div className="p-1.5 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-between text-[8px] sm:text-[9px]">
                      <span className="text-slate-300 font-medium font-mono text-[7px] sm:text-[8px]">SSID: Inflection_IoT</span>
                      <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-400" />
                    </div>
                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="w-18 sm:w-22 h-1 bg-slate-700 rounded-full mx-auto mt-1.5" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AppSection;

