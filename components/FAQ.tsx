'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  // Support multiple FAQs open at once or toggling individual FAQs
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'Does Tanki Meter replace my existing motor starter panel?',
      answer: 'No! Tanki Meter is an add-on controller that sits alongside your starter panel (fail-safe overlay design). Your original physical start/stop buttons continue to work normally.',
    },
    {
      question: 'How do the Tank-Base and Tank-Top units communicate?',
      answer: 'The Tank-Top unit communicates wirelessly with the Tank-Base unit over a 433 MHz RF radio link across hundreds of meters, requiring zero wiring between your roof and starter panel.',
    },
    {
      question: 'Do either of the units require batteries or solar panels?',
      answer: 'No. The Tank-Base unit plugs into a 12V DC adapter and the Tank-Top unit plugs into a 9V DC adapter near the tank. Both require a continuous power point.',
    },
    {
      question: 'What automatic safety cutoffs are built into the device?',
      answer: 'Tanki Meter automatically detects dry-run (low current), motor overload (high current), under-voltage (<150V), over-voltage (>250V), and auto-off timer limits. All safety rules run locally even if Wi-Fi is offline.',
    },
    {
      question: 'How is the water level measured inside the tank?',
      answer: 'The Tank-Top uses a non-contact float attached to a string inside the tank lid. As the float moves with the water level, the unit sends exact percentage depth data wirelessly.',
    },
    {
      question: 'How do I set up the mobile app for remote monitoring?',
      answer: 'Download the Tanki Meter app on Android, connect to the device\'s temporary setup Wi-Fi (TankiMeter-XXXX), enter your home Wi-Fi password, and setup is complete in less than 2 minutes.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-[#64748B] text-sm font-medium mt-2 max-w-xl mx-auto">
            Everything you need to know about hardware compatibility, installation, and app control.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] rounded-full mx-auto mt-3 shadow-xs" />
        </div>

        {/* 2 Part / 2-Column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                  isOpen ? 'border-[#0EA5E9] ring-2 ring-[#0EA5E9]/10' : 'border-slate-200 hover:border-[#0EA5E9]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-start justify-between gap-3 cursor-pointer focus:outline-none select-none"
                >
                  <span className="flex items-start gap-3 font-bold text-[#0F172A] text-sm sm:text-base leading-snug">
                    <HelpCircle className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0EA5E9] shrink-0 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-[#64748B] text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;


