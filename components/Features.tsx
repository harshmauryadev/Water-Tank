'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Ruler,
  ArrowDownToLine,
  Timer,
  Zap,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Power,
  ShieldCheck,
  Edit3,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal,
  Smartphone,
  Cpu,
  Flame,
  Radio,
  Bell
} from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Features = () => {
  const [autoMode, setAutoMode] = useState<boolean>(true);
  const [deviceName, setDeviceName] = useState<string>('TM-2607-0003');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  // Configuration parameters
  const [tankHeight, setTankHeight] = useState<number>(120);
  const [lowLevelThreshold, setLowLevelThreshold] = useState<number>(20);
  const [autoOffTimer, setAutoOffTimer] = useState<number>(20);
  const [maxVoltage, setMaxVoltage] = useState<number>(250);
  const [minVoltage, setMinVoltage] = useState<number>(180);
  const [maxCurrent, setMaxCurrent] = useState<number>(10);
  const [minCurrent, setMinCurrent] = useState<number>(2);

  return (
    <section
      id="features"
      className={`py-24 relative overflow-hidden transition-all duration-700 ${
        autoMode
          ? 'bg-slate-950 text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Dynamic Background Glows when Auto Mode is ON */}
      {autoMode ? (
        <>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        </>
      ) : (
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Interactive Configuration & Features"
          title="Designed with 6 Premium"
          highlightedTitle="Smart Features"
          subtitle="Explore the live Configuration screen from your mobile app. Turn ON Auto Mode to experience instant full-system automation!"
        />

        {/* Top Special Banner: Auto Mode Master Status Bar */}
        <div
          className={`mt-10 p-4 sm:p-6 rounded-3xl border transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 ${
            autoMode
              ? 'bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border-teal-500/60 shadow-2xl shadow-teal-500/20 ring-1 ring-teal-500/40'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                autoMode
                  ? 'bg-gradient-to-tr from-teal-400 to-cyan-300 text-slate-950 shadow-lg shadow-teal-400/50 scale-105'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              <Sparkles className={`w-7 h-7 ${autoMode ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`text-xl font-black ${autoMode ? 'text-white' : 'text-slate-900'}`}>
                  ✨ MASTER AUTO MODE
                </h3>
                <span
                  className={`px-3 py-0.5 text-[11px] font-black rounded-full font-mono uppercase tracking-wider ${
                    autoMode
                      ? 'bg-teal-500 text-slate-950 animate-pulse'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {autoMode ? 'FULL SYSTEM AUTOMATION ACTIVE' : 'DISABLED'}
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-1 ${autoMode ? 'text-teal-200' : 'text-slate-600'}`}>
                {autoMode
                  ? '⚡ Auto Mode is ON! Pump auto-trigger, tank level sensors, and all 4 safety guards are fully engaged.'
                  : 'Auto Mode is OFF. Toggle the switch below to activate 100% hands-free control.'}
              </p>
            </div>
          </div>

          {/* Master Toggle Switch */}
          <button
            onClick={() => setAutoMode(!autoMode)}
            className={`px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-3 transition-all duration-300 shadow-lg shrink-0 ${
              autoMode
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-teal-500/40 hover:scale-105'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <Power className={`w-4 h-4 ${autoMode ? 'animate-pulse' : ''}`} />
            <span>{autoMode ? 'AUTO MODE: ON' : 'TURN AUTO MODE ON'}</span>
          </button>
        </div>

        {/* Main Grid: Interactive Mobile App Mockup (Exact Screenshot UI) + 6 Feature Cards */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: EXACT MOBILE CONFIGURATION SCREEN (FROM SCREENSHOT) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div
                className={`w-full rounded-[45px] p-4 border-4 shadow-2xl transition-all duration-500 relative ${
                  autoMode
                    ? 'bg-slate-900 border-teal-500/70 shadow-teal-500/30'
                    : 'bg-slate-900 border-slate-700 shadow-slate-900/50'
                }`}
              >
                {/* Phone Speaker Notch */}
                <div className="w-28 h-4 bg-slate-950 rounded-full mx-auto mb-4 border border-slate-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900" />
                </div>

                {/* APP SCREEN CONTENT (EXACT UI FROM USER SCREENSHOT) */}
                <div
                  className={`rounded-[32px] p-4 text-left font-sans transition-all duration-500 space-y-4 border ${
                    autoMode
                      ? 'bg-slate-950 border-teal-500/50 text-white'
                      : 'bg-[#f4f7fc] border-slate-200 text-slate-900'
                  }`}
                >
                  {/* Top Mobile Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <ChevronLeft className={`w-5 h-5 ${autoMode ? 'text-teal-400' : 'text-slate-700'}`} />
                      <h4 className={`text-base font-extrabold ${autoMode ? 'text-white' : 'text-slate-900'}`}>
                        Configuration
                      </h4>
                    </div>
                  </div>

                  {/* 1. GENERAL */}
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 block mb-1.5 uppercase">
                      GENERAL
                    </span>
                    <div className={`p-3 rounded-2xl flex items-center justify-between border ${
                      autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
                          <Edit3 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block font-sans">Device Name</span>
                          <span className={`text-xs font-bold font-mono ${autoMode ? 'text-teal-300' : 'text-slate-900'}`}>
                            {deviceName}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  {/* 2. AUTOMATION (AUTO MODE TOGGLE) */}
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-teal-400 block mb-1.5 uppercase">
                      AUTOMATION
                    </span>
                    <div
                      className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                        autoMode
                          ? 'bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border-teal-400/80 shadow-md'
                          : 'bg-white border-slate-200 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            autoMode ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Sparkles className={`w-4 h-4 ${autoMode ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                        </div>
                        <div>
                          <h5 className={`text-xs font-extrabold ${autoMode ? 'text-white' : 'text-slate-900'}`}>
                            Auto Mode
                          </h5>
                          <span className={`text-[10px] font-mono ${autoMode ? 'text-teal-300 font-bold' : 'text-slate-500'}`}>
                            {autoMode ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      </div>

                      {/* Switch */}
                      <button
                        onClick={() => setAutoMode(!autoMode)}
                        className={`w-12 h-7 rounded-full p-1 transition-all flex items-center ${
                          autoMode ? 'bg-teal-400 justify-end' : 'bg-slate-300 justify-start'
                        }`}
                      >
                        <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                  </div>

                  {/* 3. TANK SETTINGS */}
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 block mb-1.5 uppercase">
                      TANK SETTINGS
                    </span>
                    <div className="space-y-2">
                      <div className={`p-3 rounded-2xl flex items-center justify-between border ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center">
                            <Ruler className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold">Total Tank Height</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-extrabold font-mono text-sky-400">{tankHeight} cm</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>

                      <div className={`p-3 rounded-2xl flex items-center justify-between border ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                            <ArrowDownToLine className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold">Low Level Threshold</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-extrabold font-mono text-cyan-400">{lowLevelThreshold} %</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. SAFETY LIMITS */}
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 block mb-1.5 uppercase">
                      SAFETY LIMITS
                    </span>
                    <div className="space-y-1.5">
                      <div className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Timer className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-semibold">Auto-Off Timer</span>
                        </div>
                        <span className="font-mono font-bold text-sky-400">{autoOffTimer} min ›</span>
                      </div>

                      <div className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-semibold">Max Voltage</span>
                        </div>
                        <span className="font-mono font-bold text-sky-400">{maxVoltage} V ›</span>
                      </div>

                      <div className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-semibold">Min Voltage</span>
                        </div>
                        <span className="font-mono font-bold text-sky-400">{minVoltage} V ›</span>
                      </div>

                      <div className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Activity className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-semibold">Max Current</span>
                        </div>
                        <span className="font-mono font-bold text-sky-400">{maxCurrent} A ›</span>
                      </div>

                      <div className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Activity className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-semibold">Min Current</span>
                        </div>
                        <span className="font-mono font-bold text-sky-400">{minCurrent} A ›</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 PREMIUM FEATURE CARDS EXPLAINING EACH CONFIGURATION */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* FEATURE 1: AUTO MODE (SPECIAL HIGH HIGHLIGHT) */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-500 flex flex-col justify-between sm:col-span-2 ${
                autoMode
                  ? 'bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 border-teal-400 shadow-xl shadow-teal-500/20'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                      autoMode ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/50' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Sparkles className={`w-6 h-6 ${autoMode ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider ${
                      autoMode
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 animate-pulse'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {autoMode ? '✨ EVERYTHING ACTIVATED' : 'STANDBY'}
                  </span>
                </div>

                <h4 className={`text-xl font-extrabold ${autoMode ? 'text-white' : 'text-slate-900'}`}>
                  1. Smart Auto Mode (Master Switch)
                </h4>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${autoMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Turning Auto Mode ON activates the entire IoT system: tank depth sensing, low-level auto pump start (&lt;20%), full tank auto-stop, and 4-layer electrical protection guards simultaneously!
                </p>
              </div>

              {autoMode && (
                <div className="mt-4 pt-3 border-t border-teal-500/30 flex items-center justify-between text-xs text-teal-300 font-mono">
                  <span>⚡ Tanki Meter IoT Autonomous Engine Active</span>
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                </div>
              )}
            </div>

            {/* FEATURE 2: TANK HEIGHT */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                autoMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mb-4">
                  <Ruler className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold mb-1">2. Total Tank Height ({tankHeight} cm)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Calibrate your exact overhead tank height (120 cm) so RF float sensors accurately measure remaining water volume.
                </p>
              </div>
              <span className="text-[10px] font-mono text-sky-400 font-bold mt-4 block">TANK SETTING</span>
            </div>

            {/* FEATURE 3: LOW LEVEL THRESHOLD */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                autoMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-4">
                  <ArrowDownToLine className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold mb-1">3. Low Level Trigger ({lowLevelThreshold}%)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Auto Mode starts the water pump instantly as soon as water level drops to 20% capacity.
                </p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold mt-4 block">AUTO PUMP TRIGGER</span>
            </div>

            {/* FEATURE 4: VOLTAGE PROTECTION (MIN & MAX) */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                autoMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold mb-1">4. Voltage Protection ({minVoltage}V - {maxVoltage}V)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Monitors AC mains line. Cuts motor power if voltage drops below 180V or surges past 250V.
                </p>
              </div>
              <span className="text-[10px] font-mono text-amber-400 font-bold mt-4 block">VOLTAGE GUARD</span>
            </div>

            {/* FEATURE 5: CURRENT OVERLOAD & DRY RUN (MIN & MAX) */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                autoMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold mb-1">5. Current & Dry-Run ({minCurrent}A - {maxCurrent}A)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  CT sensor trips motor if current falls below 2A (dry run / zero water) or exceeds 10A (overload).
                </p>
              </div>
              <span className="text-[10px] font-mono text-indigo-400 font-bold mt-4 block">AMPERAGE GUARD</span>
            </div>

            {/* FEATURE 6: AUTO-OFF TIMER */}
            <div
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between sm:col-span-2 ${
                autoMode
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center mb-4">
                  <Timer className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold mb-1">6. Failsafe Auto-Off Timer ({autoOffTimer} min)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safety timer automatically stops motor after 20 minutes of continuous runtime to prevent pipe burst accidents and electricity loss.
                </p>
              </div>
              <span className="text-[10px] font-mono text-rose-400 font-bold mt-4 block">SAFETY TIMER</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
