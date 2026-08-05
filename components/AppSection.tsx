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

          {/* Right Column: Phone Mockup Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Phone Border Frame */}
              <div className="w-full bg-slate-900 border-4 border-slate-800 rounded-[45px] p-4 shadow-2xl shadow-teal-500/20 relative">
                
                {/* Phone Speaker Notch */}
                <div className="w-28 h-4 bg-slate-950 rounded-full mx-auto mb-4 border border-slate-800" />

                {/* App Screen Content (Original dashboard photo) */}
                <div className="bg-[#0b1222] rounded-[32px] p-4 border border-slate-800 space-y-4 text-left font-sans">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[9px] text-blue-400 font-mono tracking-wider uppercase font-bold">TM-2607-0003</span>
                      <h5 className="text-sm font-extrabold text-white">Tanki Meter Dashboard</h5>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold border border-emerald-500/40">
                      LIVE • 4s ago
                    </span>
                  </div>

                  {/* Pump Status Banner */}
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-mono">PUMP STATUS</span>
                      <span className="text-base font-black text-red-400">OFF</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Runtime: 0 min</span>
                  </div>

                  {/* 3 Quick Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-white">
                    <div className="p-2.5 rounded-xl bg-emerald-600 shadow-md">
                      <span>Turn ON</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-red-600 shadow-md">
                      <span>Turn OFF</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-600 shadow-md">
                      <span>Force ON</span>
                    </div>
                  </div>

                  {/* Telemetry Tiles */}
                  <div className="grid grid-cols-3 gap-2 text-white">
                    <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-900/60 text-center">
                      <span className="text-[8px] text-slate-400 block font-mono">VOLTAGE</span>
                      <span className="text-sm font-extrabold font-mono text-red-300">235.7 V</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-900/60 text-center">
                      <span className="text-[8px] text-slate-400 block font-mono">CURRENT</span>
                      <span className="text-sm font-extrabold font-mono text-red-300">0.00 A</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-900/60 text-center">
                      <span className="text-[8px] text-slate-400 block font-mono">POWER</span>
                      <span className="text-sm font-extrabold font-mono text-red-300">0 W</span>
                    </div>
                  </div>

                  {/* Tank Level & Info Footer */}
                  <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-blue-300 block font-mono">NETWORK (SSID)</span>
                      <span className="text-xs font-bold text-white">Inflection (192.168.1.59)</span>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
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

export default AppSection;

