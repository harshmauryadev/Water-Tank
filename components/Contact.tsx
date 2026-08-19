'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tankType: 'residential',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              align="left"
              badge="Get in Touch"
              title="Ready to Upgrade Your Water"
              highlightedTitle="Management?"
              subtitle="Fill out the form for a free consultation or custom bulk quote for apartment complexes, industrial plants, and commercial buildings."
              dark={false}
            />

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#64748B] block font-mono">SUPPORT & SALES PHONE</span>
                  <span className="text-sm font-bold text-[#0F172A]"> +91 8004787983 , +91 8900 900 815</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#14B8A6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#64748B] block font-mono">EMAIL SUPPORT</span>
                  <span className="text-sm font-bold text-[#0F172A]">team@inflection.org.in</span>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/dBqMwt4STbzpXYNb8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0EA5E9] shadow-sm transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#64748B] block font-mono">HEADQUARTERS</span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#0EA5E9] transition-colors">
                    Inflection ORG PVT LTD, Khamaria, Bhadohi, UP 221306
                  </span>
                  <span className="text-[10px] text-[#14B8A6] font-semibold block mt-0.5">
                    📍 View on Google Maps ↗
                  </span>
                </div>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#14B8A6] shrink-0" />
              <div className="text-xs text-[#64748B]">
                <span className="font-bold text-[#0F172A] block text-sm">30-Day Money Back Guarantee</span>
                Try Tanki Meter risk-free. Free shipping and 1-year full hardware warranty included.
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl relative">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-[#14B8A6] flex items-center justify-center text-[#14B8A6] mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">Thank You for Reaching Out!</h3>
                  <p className="text-[#64748B] max-w-md mx-auto text-sm">
                    Our smart water specialist will contact you within 2 hours with customized hardware recommendations and pricing.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Request Hardware Quote</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0EA5E9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@inflection.org.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0EA5E9]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 8004787983"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0EA5E9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Installation Type</label>
                      <select
                        value={formData.tankType}
                        onChange={(e) => setFormData({ ...formData, tankType: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#0EA5E9]"
                      >
                        <option value="residential">Single Family Home</option>
                        <option value="apartment">Multi-Family Apartment</option>
                        <option value="commercial">Commercial / Hotel</option>
                        <option value="industrial">Industrial Chemical/Water Sump</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your water tank size, number of tanks, or custom requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0EA5E9] resize-none"
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" icon={Send} className="w-full">
                    Submit Order Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
