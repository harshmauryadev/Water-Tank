'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Will AquaSense work on my specific water tank type?',
      answer: 'Yes! AquaSense ultrasonic sensors work on plastic (HDPE), overhead PVC tanks, underground concrete sumps, stainless steel tanks, and rainwater harvesting drums up to 10 meters in depth.',
    },
    {
      question: 'How does the automatic motor pump switch work?',
      answer: 'The AquaSense controller wire connects directly to your existing motor starter panel. When water drops below your custom Low limit (e.g. 25%), it engages the relay. Once the tank reaches your High limit (e.g. 95%), it automatically stops the motor.',
    },
    {
      question: 'Can I install AquaSense myself without an electrician?',
      answer: 'Yes. The sensor mounts on top of the tank using heavy-duty weather adhesive or screw brackets provided in the kit. The wireless hub connects automatically via Wi-Fi or cellular plugin.',
    },
    {
      question: 'What happens during a power cut or Wi-Fi outage?',
      answer: 'AquaSense includes built-in non-volatile memory that retains all your settings and high/low safety cutoffs. Optional battery backup keeps the sensor actively tracking level even when main power is out.',
    },
    {
      question: 'Is the sensor waterproof and outdoor weatherproof?',
      answer: 'Absolutely. The sensor is IP67 industrial waterproof rated and UV resistant, designed to withstand extreme summer heat, heavy rainfall, and cold winters without degradation.',
    },
    {
      question: 'Are there any monthly subscription fees for the mobile app?',
      answer: 'No! The basic mobile app tracking, instant push notifications, and motor automation are 100% free with lifetime access included with your hardware purchase.',
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
