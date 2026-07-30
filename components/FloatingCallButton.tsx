'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';

export const FloatingCallButton = () => {
  return (
    <a
      href="tel:+918900900815"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Call Us"
    >
      {/* Tooltip Label on Hover */}
      <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Call Us: +91 8900 900 815
      </span>

      {/* Floating Circular Button Container with Pulsing Ripple Effect */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing Backlight Ripple */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
        
        {/* Main Phone Icon Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl border-2 border-white/80 hover:scale-110 active:scale-95 transition-transform duration-200">
          <PhoneCall className="w-6 h-6 animate-pulse text-white" />
        </div>
      </div>
    </a>
  );
};

export default FloatingCallButton;
