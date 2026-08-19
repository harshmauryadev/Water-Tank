'use client';

import React from 'react';

export const WhyChoose = () => {
  const reasons = [
    {
      title: 'Protect Your Motor',
      desc: 'Prevents dry run & overflow. Increases motor life.',
      image: '/images/why-choose/protect_motor.png',
      badge: 'Motor Safety',
      badgeBg: 'bg-[#0EA5E9]',
    },
    {
      title: 'Save Water',
      desc: 'Stop overflow & water wastage. Use water wisely.',
      image: '/images/why-choose/save_water.png',
      badge: 'Zero Wastage',
      badgeBg: 'bg-[#0284C7]',
    },
    {
      title: 'Save Electricity',
      desc: 'Avoid unnecessary motor running. Lower power bills.',
      image: '/images/why-choose/save_electricity.png',
      badge: 'Energy Efficient',
      badgeBg: 'bg-[#14B8A6]',
    },
    {
      title: 'Save Time',
      desc: 'No need to check tank level manually again and again.',
      image: '/images/why-choose/save_time.png',
      badge: 'Smart Automation',
      badgeBg: 'bg-[#0EA5E9]',
    },
    {
      title: 'Peace of Mind',
      desc: 'Monitor your tank anytime, anywhere. Stay 100% worry-free.',
      image: '/images/why-choose/peace_of_mind.png',
      badge: 'Stress Free',
      badgeBg: 'bg-[#14B8A6]',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#F8FAFC] text-[#0F172A] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] bg-clip-text text-transparent">Tanki Meter</span>?
          </h2>
          <p className="text-[#64748B] text-sm font-medium mt-2 max-w-xl mx-auto">
            Experience real benefits designed for ultimate water savings and total peace of mind.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* 5 Real Image Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#0EA5E9] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Real Image Container */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  
                  {/* Badge on Image */}
                  <span className={`absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white px-2.5 py-1 rounded-md ${item.badgeBg} shadow-sm tracking-wide`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0F172A] mb-1.5 group-hover:text-[#0EA5E9] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed font-medium">
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



