'use client';

import React from 'react';
import { Droplet, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const [activeModal, setActiveModal] = React.useState<{ title: string; content: string } | null>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPolicy = (e: React.MouseEvent, title: string, content: string) => {
    e.preventDefault();
    setActiveModal({ title, content });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 text-xs border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={scrollToTop} className="flex items-center gap-3 group text-left cursor-pointer">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] flex items-center justify-center text-white shadow-lg shadow-[#0EA5E9]/20 group-hover:scale-105 transition-all">
                <Droplet className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
                  Tanki<span className="bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] bg-clip-text text-transparent">Meter</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold -mt-1">BY INFLECTION</span>
              </div>
            </button>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Smart Tank. Smart Life. <br />
              A smart IoT solution to automate your water tank and make your life easier, smarter and worry-free.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0EA5E9] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={scrollToTop} className="hover:text-[#0EA5E9] transition cursor-pointer">Home</button></li>
              <li><a href="#features" className="hover:text-[#0EA5E9] transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#0EA5E9] transition">How It Works</a></li>
              <li><a href="#product-showcase" className="hover:text-[#0EA5E9] transition">Specifications</a></li>
              <li><a href="#contact" className="hover:text-[#0EA5E9] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#faq" className="hover:text-[#0EA5E9] transition">FAQs</a></li>
              <li>
                <button
                  onClick={(e) => openPolicy(e, 'User Manual & Setup Guide', 'Tanki Meter kit includes a plug-and-play User Guide. Step 1: Mount Tank-Base next to starter panel. Step 2: Fix Tank-Top float unit inside tank lid. Step 3: Plug 12V & 9V power adapters. Step 4: Open mobile app to connect home Wi-Fi.')}
                  className="hover:text-[#0EA5E9] transition cursor-pointer text-left"
                >
                  User Manual
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => openPolicy(e, 'Shipping & Delivery Policy', 'We offer FREE express courier shipping across India on all Tanki Meter hardware orders. Orders are processed within 24 hours and delivered within 3–5 business days with live tracking.')}
                  className="hover:text-[#0EA5E9] transition cursor-pointer text-left"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => openPolicy(e, '30-Day Money Back Guarantee', 'Try Tanki Meter risk-free! If you are not completely satisfied with device performance within 30 days of purchase, return the undamaged hardware unit for a full product refund.')}
                  className="hover:text-[#0EA5E9] transition cursor-pointer text-left"
                >
                  Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => openPolicy(e, '1 Year Hardware Warranty', 'Tanki Meter comes with 1 Year Official Hardware Replacement Warranty by Inflection Electronics. Covers internal relay, RF radio modules, and sensor circuitry. Lifetime paid tech service is also available.')}
                  className="hover:text-[#0EA5E9] transition cursor-pointer text-left"
                >
                  Warranty
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Contact Us</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <a href="tel:+918004787983" className="text-slate-300 font-medium hover:text-[#0EA5E9] transition">
                  +91 8004787983, <br />+91 8900 900 815
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                <a href="mailto:team@inflection.org.in" className="text-slate-300 font-medium hover:text-[#0EA5E9] transition">team@inflection.org.in</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/dBqMwt4STbzpXYNb8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 font-medium hover:text-[#0EA5E9] transition"
                >
                  Inflection ORG PVT LTD, Khamaria, Bhadohi, UP 221306
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 gap-3 text-[11px]">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Tanki Meter by Inflection. All Rights Reserved.
          </div>
          <div>
            Designed with <span className="text-rose-500">❤️</span> by Inflection Electronics Lab
          </div>
        </div>

      </div>

      {/* Support Policy Popup Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0F172A] border border-[#0EA5E9]/40 rounded-3xl p-6 max-w-md w-full shadow-2xl text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-extrabold text-white">{activeModal.title}</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {activeModal.content}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] text-white text-xs font-bold shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

