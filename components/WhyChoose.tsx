'use client';

import React from 'react';
import { ShieldCheck, Droplet, Zap, Clock, Heart } from 'lucide-react';

export const WhyChoose = () => {
  const reasons = [
    {
      title: 'Protect Your Motor',
      desc: 'Prevents dry run & overflow. Increases motor life.',
      icon: ShieldCheck,
      gradient: 'from-blue-500 to-indigo-600',
      borderHover: 'hover:border-blue-300',
    },
    {
      title: 'Save Water',
      desc: 'Stop overflow & water wastage. Use water wisely.',
      icon: Droplet,
      gradient: 'from-cyan-400 to-blue-500',
      borderHover: 'hover:border-cyan-300',
    },
    {
      title: 'Save Electricity',
      desc: 'Avoid unnecessary motor running. Save electricity.',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      borderHover: 'hover:border-amber-300',
    },
    {
      title: 'Save Time',
      desc: 'No need to check tank again and again.',
      icon: Clock,
      gradient: 'from-indigo-500 to-purple-600',
      borderHover: 'hover:border-indigo-300',
    },
    {
      title: 'Peace of Mind',
      desc: 'Monitor your tank anytime, anywhere. Stay worry-free.',
      icon: Heart,
      gradient: 'from-rose-400 to-red-500',
      borderHover: 'hover:border-rose-300',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Tanki Meter</span>?
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* 5 Vibrant Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-md hover:shadow-xl ${item.borderHover} hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-start group`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
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


