'use client';

import React from 'react';
import { Building2, Smile, Target, Headset } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const WhyChoose = () => {
  const stats = [
    {
      icon: Building2,
      value: '5000+',
      label: 'Installations',
      description: 'Active in residential homes, apartments, and factories.',
    },
    {
      icon: Smile,
      value: '10000+',
      label: 'Happy Customers',
      description: 'Living with 100% peace of mind and zero overflows.',
    },
    {
      icon: Target,
      value: '99%',
      label: 'Accuracy',
      description: 'Ultrasonic depth precision down to the millimeter.',
    },
    {
      icon: Headset,
      value: '24×7',
      label: 'Support',
      description: 'Dedicated technical assistance & warranty support.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50/70 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Proven Track Record"
          title="Why Thousands Choose"
          highlightedTitle="AquaSmart Controller"
          subtitle="Backed by numbers that prove superior reliability, energy efficiency, and customer satisfaction."
        />

        {/* 4 Statistics Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft-card text-center hover:shadow-soft-xl hover:border-blue-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight text-gradient-blue mb-2">
                  {stat.value}
                </div>

                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  {stat.label}
                </h4>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
