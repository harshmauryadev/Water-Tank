'use client';

import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

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
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Specifications', href: '#product-showcase' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md shadow-sky-500/5'
          : 'bg-[#F8FAFC]/90 backdrop-blur-md py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] flex items-center justify-center text-white shadow-lg shadow-[#0EA5E9]/25 group-hover:scale-105 group-hover:rotate-3 transition-all">
              <Droplet className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A] flex items-center gap-0.5">
                Tanki <span className="bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] bg-clip-text text-transparent">Meter</span>
              </span>
              <span className="text-[9px] text-[#14B8A6] font-bold tracking-wider">Smart Tank. Smart Life.</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-[#0F172A] hover:text-[#0EA5E9] transition-all relative py-1 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call / Contact Us Direct Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+918004787983"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] hover:from-[#0284C7] hover:to-[#14B8A6] text-white text-sm font-bold shadow-md shadow-[#0EA5E9]/20 hover:shadow-lg transition-all active:scale-95"
            >
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#0EA5E9] rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 mt-2 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="py-2 text-base font-bold text-[#0F172A] hover:text-[#0EA5E9] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="tel:+918004787983"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white text-sm font-bold shadow-md"
            >
              <span>Call Us</span>
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;



