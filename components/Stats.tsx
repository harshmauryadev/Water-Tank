'use client';

import React from 'react';
import { Droplets, ShieldCheck, Building2, Users } from 'lucide-react';

export const Stats = () => {
  const statItems = [
    {
      icon: Droplets,
      value: '2.5M+',
      label: 'Gallons of Water Saved',
      sublabel: 'Prevented from overflow wastage',
    },
    {
      icon: ShieldCheck,
      value: '10,000+',
      label: 'Active Tank Monitors',
      sublabel: 'Installed across homes & industrial sites',
    },
    {
      icon: Building2,
      value: '99.9%',
      label: 'System Uptime',
      sublabel: '24/7 continuous sensor tracking',
    },
    {
      icon: Users,
      value: '4.9 / 5',
      label: 'Customer Satisfaction',
      sublabel: 'Based on 1,200+ verified reviews',
    },
  ];

  return (
    <section className="py-16 relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto mb-4 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono text-gradient-cyan">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-2">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
