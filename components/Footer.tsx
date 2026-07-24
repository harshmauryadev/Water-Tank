'use client';

import React from 'react';
import { Waves, Twitter, Github, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
              <Waves className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-slate-900">
              Aqua<span className="text-blue-600">Smart</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#product-showcase" className="hover:text-blue-600 transition">Showcase</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#why-choose-us" className="hover:text-blue-600 transition">Why Choose Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition"
              aria-label="Github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} AquaSmart IoT Inc. All rights reserved. Designed for smart water conservation.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
