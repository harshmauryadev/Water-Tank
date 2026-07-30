'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Does Tanki Meter replace my existing motor starter panel?',
      answer: 'No! Tanki Meter is an add-on controller that sits alongside your starter panel (fail-safe overlay design). Your original physical start/stop buttons continue to work normally.',
    },
    {
      question: 'How do the Tank-Base and Tank-Top units communicate?',
      answer: 'The Tank-Top unit (mounted on the water tank) communicates wirelessly with the Tank-Base unit over a 433 MHz RF radio link across hundreds of meters, requiring zero long wiring between your roof and starter panel.',
    },
    {
      question: 'Do either of the units require batteries or solar panels?',
      answer: 'No. The Tank-Base unit plugs into a 12V DC adapter and the Tank-Top unit plugs into a 9V DC adapter near the tank. Both require a continuous power point.',
    },
    {
      question: 'What automatic safety cutoffs are built into the device?',
      answer: 'Tanki Meter automatically detects dry-run (low current), motor overload (high current), under-voltage (<150V), over-voltage (>250V), and auto-off timer limits. All safety rules run locally on the firmware even if Wi-Fi is offline.',
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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked"
          highlightedTitle="Questions"
          subtitle="Everything you need to know about hardware compatibility, installation, and app control."
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-teal-500/40 bg-slate-900/90' : 'hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 text-base md:text-lg focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/60 mt-2">
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
