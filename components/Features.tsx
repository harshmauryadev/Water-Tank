'use client';

import React from 'react';
import { ToggleLeft, ShieldAlert, AlertTriangle, Smartphone, Bell, Zap, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Features = () => {
  const featureList = [
    {
      icon: ToggleLeft,
      title: 'Auto ON/OFF',
      desc: 'Automatically turns your water pump ON when water level is low and turns it OFF when the tank is full.',
      highlight: 'Hands-Free Control',
    },
    {
      icon: ShieldAlert,
      title: 'Overflow Protection',
      desc: 'Prevents thousands of liters of precious water from spilling over overhead tank walls with 100% safety.',
      highlight: 'Zero Wastage',
    },
    {
      icon: AlertTriangle,
      title: 'Dry Run Protection',
      desc: 'Detects absent municipal supply lines and instantly cuts off motor power to prevent motor burnouts.',
      highlight: 'Motor Lifespan Saver',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Control',
      desc: 'Monitor live tank depth, manual motor overrides, and view water stats from your iOS or Android app.',
      highlight: 'Global Remote Access',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      desc: 'Receive immediate push notifications, SMS warnings, and audio buzzer alarms during critical water events.',
      highlight: 'Instant Alerting',
    },
    {
      icon: Zap,
      title: 'Electricity Saving',
      desc: 'Cuts unnecessary motor runtime, slashing your monthly electricity bills by up to 30%.',
      highlight: 'Energy Efficient',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Core Capabilities"
          title="Designed with 6 Premium"
          highlightedTitle="Smart Features"
          subtitle="Everything you need to automate your water supply and safeguard your electrical water pump."
        />

        {/* 6 Premium Feature Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-card-light rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between group hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 font-mono">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
