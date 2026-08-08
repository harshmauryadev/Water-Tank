'use client';

import React from 'react';

export const WhyChoose = () => {
  const reasons = [
    {
      title: 'Protect Your Motor',
      desc: 'Prevents dry run & overflow. Increases motor life.',
      image: '/images/why-choose/protect_motor.png',
      badge: 'Motor Safety',
      borderHover: 'hover:border-blue-400',
      badgeBg: 'bg-blue-600/90',
    },
    {
      title: 'Save Water',
      desc: 'Stop overflow & water wastage. Use water wisely.',
      image: '/images/why-choose/save_water.png',
      badge: 'Zero Wastage',
      borderHover: 'hover:border-cyan-400',
      badgeBg: 'bg-cyan-600/90',
    },
    {
      title: 'Save Electricity',
      desc: 'Avoid unnecessary motor running. Lower power bills.',
      image: '/images/why-choose/save_electricity.png',
      badge: 'Energy Efficient',
      borderHover: 'hover:border-amber-400',
      badgeBg: 'bg-amber-600/90',
    },
    {
      title: 'Save Time',
      desc: 'No need to check tank level manually again and again.',
      image: '/images/why-choose/save_time.png',
      badge: 'Smart Automation',
      borderHover: 'hover:border-indigo-400',
      badgeBg: 'bg-indigo-600/90',
    },
    {
      title: 'Peace of Mind',
      desc: 'Monitor your tank anytime, anywhere. Stay 100% worry-free.',
      image: '/images/why-choose/peace_of_mind.png',
      badge: 'Stress Free',
      borderHover: 'hover:border-emerald-400',
      badgeBg: 'bg-emerald-600/90',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-[#050914] via-[#091124] to-[#050914] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tanki Meter</span>?
          </h2>
          <p className="text-slate-300 text-sm font-medium mt-2 max-w-xl mx-auto">
            Experience real benefits designed for ultimate water savings and total peace of mind.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* 5 Real Image Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl hover:shadow-cyan-500/10 ${item.borderHover} hover:-translate-y-1.5 transition-all duration-300 flex flex-col group overflow-hidden`}
              >
                {/* Real Image Container */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {/* Badge on Image */}
                  <span className={`absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white px-2.5 py-1 rounded-md backdrop-blur-md ${item.badgeBg} shadow-sm tracking-wide`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
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



