'use client';

import React from 'react';
import { Droplet, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
                <Droplet className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
                  Tanki<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Meter</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold -mt-1">BY INFLECTION</span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Smart Tank. Smart Life. <br />
              A smart IoT solution to automate your water tank and make your life easier, smarter and worry-free.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
              <li><a href="#product-showcase" className="hover:text-blue-400 transition">Specifications</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#faq" className="hover:text-blue-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">User Manual</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Warranty</a></li>
            </ul>
          </div>

          {/* Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Contact Us</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">+91 8004787983, <br />+91 8900 900 815</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:team@inflection.org.in" className="text-slate-300 font-medium hover:text-cyan-400 transition">team@inflection.org.in</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/dBqMwt4STbzpXYNb8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 font-medium hover:text-cyan-400 transition"
                >
                  Inflection ORG PVT LTD, Khamaria, Bhadohi, UP 221306
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 gap-3 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tanki Meter by Inflection. All Rights Reserved.
          </div>
          <div>
            Designed with <span className="text-rose-500">❤️</span> by Inflection Electronics Lab
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

