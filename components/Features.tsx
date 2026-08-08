'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Ruler,
  ArrowDownToLine,
  Timer,
  Zap,
  Activity,
  CheckCircle2,
  Power,
  ShieldCheck,
  Edit3,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal,
  Smartphone,
  Cpu,
  Radio,
  Bell,
  Users,
  BarChart3,
  Wrench,
  Globe,
  Award,
  LifeBuoy
} from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Features = () => {
  const [autoMode, setAutoMode] = useState<boolean>(true);
  const [deviceName, setDeviceName] = useState<string>('TM-2607-0003');

  // Configuration parameters
  const [tankHeight, setTankHeight] = useState<number>(120);
  const [lowLevelThreshold, setLowLevelThreshold] = useState<number>(20);
  const [autoOffTimer, setAutoOffTimer] = useState<number>(20);
  const [maxVoltage, setMaxVoltage] = useState<number>(250);
  const [minVoltage, setMinVoltage] = useState<number>(180);
  const [maxCurrent, setMaxCurrent] = useState<number>(10);
  const [minCurrent, setMinCurrent] = useState<number>(2);

  // All 15 Key Features provided by user in pure English
  const all15Features = [
    {
      id: 1,
      title: '100% Wireless Freedom',
      subtitle: 'True Wireless Autonomy',
      desc: 'Forget wiring hassles! Our device works seamlessly across 5 to 10 floors without any roof-to-ground wires. No Wi-Fi or Internet is needed for daily automatic operation.',
      icon: Radio,
      badge: 'Wireless RF',
      gradient: 'from-blue-600 to-indigo-600',
      image: '/images/features/wireless_freedom.png',
    },
    {
      id: 2,
      title: 'Patented Smart Sensor',
      subtitle: 'High-Precision 2mm Sensor',
      desc: 'Conventional metal/brass sensors corrode and clog with hard water scale, algae, or sand. Our patented sensor provides 2 mm accurate readings unaffected by hard water or algae.',
      icon: Ruler,
      badge: 'Patented Tech',
      gradient: 'from-cyan-500 to-blue-600',
      image: '/images/features/patented_sensor.png',
    },
    {
      id: 3,
      title: 'Zero Maintenance',
      subtitle: 'Install & Forget',
      desc: 'Install it once and stay 100% worry-free! Unlike traditional wired sensors, you will never need periodic servicing, cleaning, or extra maintenance charges.',
      icon: CheckCircle2,
      badge: '0 Servicing',
      gradient: 'from-emerald-500 to-teal-600',
      image: '/images/features/zero_maintenance.png',
    },
    {
      id: 4,
      title: 'Continuous Multi-Mode Operation',
      subtitle: 'Triple-Mode Resilience',
      desc: 'Internet or no internet, your system never stops working! It automatically and smartly switches between Cloud Online, Local Hotspot, and Offline RF modes.',
      icon: Cpu,
      badge: 'Multi-Mode',
      gradient: 'from-purple-600 to-indigo-600',
      image: '/images/features/multimode_operation.png',
    },
    {
      id: 5,
      title: 'World-Wide Smart Control',
      subtitle: 'Global Remote Access',
      desc: 'Connect to your home Wi-Fi and control your motor from anywhere in the world via the smartphone app. Turn the pump ON/OFF and check live status anytime.',
      icon: Globe,
      badge: 'Global Cloud',
      gradient: 'from-sky-500 to-blue-600',
      image: '/images/features/global_control.png',
    },
    {
      id: 6,
      title: 'Live Voltage & Current Protection',
      subtitle: 'Smart Motor Safeguard',
      desc: 'Monitors real-time line voltage and running motor current. Instantly trips motor power during dry run conditions, low voltage, voltage surges, or current overload.',
      icon: Zap,
      badge: 'Motor Guard',
      gradient: 'from-amber-500 to-orange-600',
      image: '/images/features/voltage_protection.png',
    },
    {
      id: 7,
      title: 'All-in-One Digital Dashboard',
      subtitle: 'LCD & App Telemetry',
      desc: 'Displays live water level percentage, AC line voltage, motor running current, wireless signal strength, and pump state on both the backlit LCD screen and mobile app.',
      icon: SlidersHorizontal,
      badge: 'Digital Screen',
      gradient: 'from-teal-500 to-emerald-600',
    },
    {
      id: 8,
      title: 'Starter Perfect Sync',
      subtitle: 'Smart Manual Override',
      desc: 'Complete manual freedom! Turn the motor ON/OFF using physical starter buttons or device controls—both stay 100% synchronized in real time without conflict.',
      icon: Power,
      badge: 'Dual Sync',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      id: 9,
      title: 'Integrated Buzzer Alarm',
      subtitle: 'Smart Beep Audio Alerts',
      desc: 'Instant audio alerts during fault conditions! The built-in audio buzzer immediately alerts you with clear beep alarms during any dry-run, power trip, or error state.',
      icon: Bell,
      badge: 'Audio Alarm',
      gradient: 'from-rose-500 to-red-600',
    },
    {
      id: 10,
      title: 'Family App Sharing',
      subtitle: 'Multi-User Access',
      desc: 'Share mobile app access with all family members so everyone in your home can monitor tank water levels and operate the pump controls effortlessly.',
      icon: Users,
      badge: 'Multi-User',
      gradient: 'from-sky-600 to-cyan-600',
    },
    {
      id: 11,
      title: 'Power & Water Analytics',
      subtitle: 'Monthly Usage Reports',
      desc: 'Track your resource consumption! View detailed monthly reports on total water volume used and electricity units (kWh) consumed to optimize household costs.',
      icon: BarChart3,
      badge: 'Analytics',
      gradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 12,
      title: 'Super-Easy Installation',
      subtitle: 'Hassle-Free Setup',
      desc: 'Quick and simple installation! Mounts easily alongside your existing motor starter panel in less than 15 minutes without complicated wiring or headaches.',
      icon: Sparkles,
      badge: 'Quick Setup',
      gradient: 'from-amber-400 to-yellow-600',
    },
    {
      id: 13,
      title: 'Fail-Safe Auto Timer',
      subtitle: 'Automatic Safety Cutoff',
      desc: 'Double safety protection! Automatically turns off motor power after a pre-set runtime duration even if top sensor communication is lost to prevent water overflow.',
      icon: Timer,
      badge: 'Auto Cutoff',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      id: 14,
      title: 'Clear Warranty Policy',
      subtitle: 'Full Hardware Protection',
      desc: 'Complete peace of mind! Reliable official warranty policy protecting against internal hardware failures, relay issues, or wireless communication faults.',
      icon: ShieldCheck,
      badge: 'Full Warranty',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 15,
      title: 'Post-Warranty Service Support',
      subtitle: 'Lifetime Technical Care',
      desc: 'No worries even after warranty expiration! On-demand paid technical service support and genuine hardware repairs remain available whenever you need it.',
      icon: LifeBuoy,
      badge: 'Paid Support',
      gradient: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 text-slate-900 transition-all duration-700"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="15 Powerful Features"
          title="Complete Smart Automation &"
          highlightedTitle="Motor Safety Features"
          subtitle="Explore all 15 advanced features designed to give you 100% wireless freedom, motor protection, and total control."
          dark={false}
        />

        {/* Master Auto Mode Banner */}
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
                  {autoMode ? 'FULL AUTOMATION ACTIVE' : 'DISABLED'}
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-1 ${autoMode ? 'text-teal-200' : 'text-slate-600'}`}>
                {autoMode
                  ? '⚡ Auto Mode is ON! Tank level sensors, motor guards, and wireless communication are fully engaged.'
                  : 'Auto Mode is OFF. Toggle switch to activate 100% hands-free control.'}
              </p>
            </div>
          </div>

          {/* Master Toggle Switch */}
          <button
            type="button"
            onClick={() => setAutoMode(!autoMode)}
            className={`px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-3 transition-all duration-300 shadow-lg shrink-0 cursor-pointer ${
              autoMode
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-teal-500/40 hover:scale-105'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <Power className={`w-4 h-4 ${autoMode ? 'animate-pulse' : ''}`} />
            <span>{autoMode ? 'AUTO MODE: ON' : 'TURN AUTO MODE ON'}</span>
          </button>
        </div>

        {/* Live Configuration Mockup Section */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Mobile Mockup */}
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

                {/* APP SCREEN CONTENT */}
                <div
                  className={`rounded-[32px] p-4 text-left font-sans transition-all duration-500 space-y-4 border ${
                    autoMode
                      ? 'bg-slate-950 border-teal-500/50 text-white'
                      : 'bg-[#f4f7fc] border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <ChevronLeft className={`w-5 h-5 ${autoMode ? 'text-teal-400' : 'text-slate-700'}`} />
                      <h4 className={`text-base font-extrabold ${autoMode ? 'text-white' : 'text-slate-900'}`}>
                        Live Configuration
                      </h4>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 block mb-1.5 uppercase">
                      AUTOMATION
                    </span>
                    <div className={`p-3 rounded-2xl flex items-center justify-between border ${
                      autoMode ? 'bg-slate-900 border-teal-500/40 text-white' : 'bg-white border-slate-200 text-slate-900'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold block">Auto Mode Engine</span>
                          <span className="text-[10px] text-teal-400 font-mono">
                            {autoMode ? 'System Autonomous' : 'Manual Overridden'}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 block mb-1.5 uppercase">
                      LIVE PROTECTION PARAMETERS
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className={`p-2.5 rounded-xl flex items-center justify-between border ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                      }`}>
                        <span className="font-semibold">Voltage Limits</span>
                        <span className="font-mono text-sky-400 font-bold">{minVoltage}V - {maxVoltage}V</span>
                      </div>
                      <div className={`p-2.5 rounded-xl flex items-center justify-between border ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                      }`}>
                        <span className="font-semibold">Current Protection</span>
                        <span className="font-mono text-cyan-400 font-bold">{minCurrent}A - {maxCurrent}A</span>
                      </div>
                      <div className={`p-2.5 rounded-xl flex items-center justify-between border ${
                        autoMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                      }`}>
                        <span className="font-semibold">Failsafe Auto Timer</span>
                        <span className="font-mono text-amber-400 font-bold">{autoOffTimer} mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Brief Overview */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete System Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 tracking-tight">
                Smart Automation Built For Reliability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                Tanki Meter is engineered to deliver zero-maintenance water level sensing and complete pump motor protection. Below is the breakdown of all 15 core features included with every Tanki Meter kit.
              </p>
              
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-black text-blue-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-bold">Wireless RF</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-black text-cyan-600">2 mm</div>
                  <div className="text-[11px] text-slate-500 font-bold">Accuracy</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-black text-emerald-600">0</div>
                  <div className="text-[11px] text-slate-500 font-bold">Maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 15 ALL-FEATURE CARDS GRID SHOWCASE */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              All <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">15 Key Features</span> Detailed
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Comprehensive breakdown of hardware, wireless autonomy, app telemetry, and safety guards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {all15Features.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase block mb-1">
                      {item.id}. {item.subtitle}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Feature Image Thumbnail (If available) */}
                    {item.image && (
                      <div className="my-3 relative h-36 w-full rounded-xl overflow-hidden shadow-xs border border-slate-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;

