'use client';

import React, { useState, useEffect } from 'react';
import { Waves, Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#product-showcase', highlight: true },
    { name: 'How It Works', href: '#how-it-works', highlight: true },
    { name: 'Mobile App', href: '#app-section', highlight: true },
    { name: 'Features', href: '#features', highlight: true },
    { name: 'Installation', href: '#installation', highlight: true },
    { name: 'FAQ', href: '#faq', highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <Waves className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                Tanki<span className="text-blue-600">Meter</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">by Inflection</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${link.highlight
                  ? 'font-extrabold text-blue-600 hover:text-blue-700 tracking-wide drop-shadow-sm'
                  : 'font-medium text-slate-600 hover:text-blue-600'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Buy Now Action Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="md" icon={ArrowRight} onClick={() => window.location.href = '#cta'}>
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-6 mt-2 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-slate-100 transition-colors ${link.highlight
                  ? 'text-base font-extrabold text-blue-600 hover:text-blue-700 tracking-wide'
                  : 'text-base font-semibold text-slate-700 hover:text-blue-600'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button variant="primary" size="md" className="w-full" icon={ArrowRight} onClick={() => { setMobileMenuOpen(false); window.location.href = '#cta'; }}>
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
