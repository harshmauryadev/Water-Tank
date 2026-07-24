'use client';

import React from 'react';
import { Smartphone, Bell, SlidersHorizontal, BarChart3, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export const AppSection = () => {
  return (
    <section id="app-section" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Mobile Dashboard"
              title="Control Every Drop From the"
              highlightedTitle="Palm of Your Hand"
              subtitle="The AquaSense mobile app provides effortless remote management, custom threshold settings, and real-time tank graphics."
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Smart Push & SMS Notifications</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">Get immediate alerts when water drops below 20% or reaches 100% full status.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Manual Override Motor Switch</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">Turn your motor pump ON or OFF with a single tap from anywhere globally.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Historical Usage Analytics</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">Analyze water consumption patterns, peak hours, and estimated municipal bills.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="primary" icon={Download}>
                Download iOS & Android App
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

                {/* App Screen Content */}
                <div className="bg-slate-950 rounded-[32px] p-5 border border-slate-800 space-y-5 text-left">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">MAIN HOME TANK</span>
                      <h5 className="text-base font-extrabold text-white">Overhead Tank #1</h5>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  {/* Level Ring Graphic */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-teal-500/30 text-center relative overflow-hidden">
                    <div className="text-xs text-teal-400 font-semibold mb-1">CURRENT WATER LEVEL</div>
                    <div className="text-4xl font-black text-white font-mono">82%</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-1">820 / 1,000 Liters</div>
                    
                    {/* Simulated Wave fill inside card */}
                    <div className="mt-4 w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 w-[82%]" />
                    </div>
                  </div>

                  {/* Quick Controls inside App */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">PUMP STATUS</span>
                      <span className="text-xs font-bold text-emerald-400">IDLE (AUTO)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">LAST REFILL</span>
                      <span className="text-xs font-bold text-white">2h 15m ago</span>
                    </div>
                  </div>

                  {/* Alert banner inside app */}
                  <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/40 flex items-center justify-between text-xs">
                    <span className="text-teal-300 font-medium">All Sensors Normal</span>
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
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
