'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      name: 'Rajesh Verma',
      role: 'Housing Society President',
      location: 'Mumbai, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      comment: 'Before installing Tanki Meter, our 40-flat apartment complex suffered monthly motor dry-run failures and severe water overflow wastage. Now, water wastage is down to 0% and our electricity bills are significantly reduced!',
      rating: 5,
      verified: true,
      tag: 'Apartment Complex',
      accentColor: 'border-teal-500/30 hover:border-teal-400/70 hover:shadow-teal-500/10',
      badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
    {
      name: 'Priya Sundaram',
      role: 'Homeowner',
      location: 'Bengaluru, Karnataka',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      comment: 'Tracking live water percentage and tank depth on the mobile app is incredibly convenient. The automatic pump controller turns off the motor instantly when the tank reaches 100%. Highly reliable smart device!',
      rating: 5,
      verified: true,
      tag: 'Residential Tank',
      accentColor: 'border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-500/10',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
    {
      name: 'Amitabh Sharma',
      role: 'Hotel Operations Lead',
      location: 'Jaipur, Rajasthan',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      comment: 'Setup took less than 15 minutes! The non-contact ultrasonic sensor accuracy is over 99%. It is by far the best automation solution for commercial sumps and overhead tanks.',
      rating: 5,
      verified: true,
      tag: 'Commercial Hotel',
      accentColor: 'border-blue-500/30 hover:border-blue-400/70 hover:shadow-blue-500/10',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
    {
      name: 'Vikramaditya Singh',
      role: 'Villa Owner',
      location: 'Delhi NCR',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      comment: 'No more climbing up to the hot rooftop in peak summer to check the water tank. The long-range wireless RF penetrates easily through 4 concrete floors. Absolutely recommended!',
      rating: 5,
      verified: true,
      tag: 'Multi-Story Villa',
      accentColor: 'border-indigo-500/30 hover:border-indigo-400/70 hover:shadow-indigo-500/10',
      badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
    {
      name: 'Sunita Patel',
      role: 'Independent House Owner',
      location: 'Ahmedabad, Gujarat',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      comment: 'The built-in voltage protection saved our motor twice during severe low-voltage power spikes. The automatic cutoff feature gives our family 100% peace of mind.',
      rating: 5,
      verified: true,
      tag: 'Independent House',
      accentColor: 'border-amber-500/30 hover:border-amber-400/70 hover:shadow-amber-500/10',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
    {
      name: 'Dr. K. Ramanathan',
      role: 'Hospital Infrastructure Lead',
      location: 'Chennai, Tamil Nadu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      comment: 'We automated 6 overhead water tanks across our medical campus. Zero dry-runs, instant buzzer alarm alerts, and real-time app tracking. Exceptional engineering quality!',
      rating: 5,
      verified: true,
      tag: 'Hospital Sump & Tank',
      accentColor: 'border-purple-500/30 hover:border-purple-400/70 hover:shadow-purple-500/10',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
  ];

  const totalPages = Math.ceil(reviews.length / 3);

  // Auto-slide effect every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Customer Reviews & Stories"
          title="Loved by 10,000+ Indian Homeowners"
          highlightedTitle="& Society Managers"
          subtitle="See how Tanki Meter has transformed water conservation and hassle-free motor automation across India."
          dark={true}
        />

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 text-center shadow-xl backdrop-blur-md">
          <div>
            <div className="text-2xl md:text-3xl font-black text-white">10,000+</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Tanks Automated</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-teal-400">15M+ Litres</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Water Saved</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-amber-400">4.9 ★★★★★</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Customer Rating</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-cyan-400">99.8%</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Measurement Accuracy</div>
          </div>
        </div>

        {/* Auto-Slide Carousel Viewport (3 Items Per Page on Desktop) */}
        <div
          className="mt-14 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Page 1 (Items 0, 1, 2) */}
            <div className="w-full shrink-0 grid md:grid-cols-3 gap-6 px-1">
              {reviews.slice(0, 3).map((review, index) => (
                <div
                  key={index}
                  className={`bg-slate-900/90 border ${review.accentColor} rounded-3xl p-7 flex flex-col justify-between relative group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xl h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${review.badgeBg}`}>
                        {review.tag}
                      </span>
                      <Quote className="w-7 h-7 text-slate-700 group-hover:text-cyan-400/60 transition-colors" />
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-cyan-400/80 transition-colors shadow-md"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-black text-white">{review.name}</h4>
                        {review.verified && (
                          <span className="inline-flex items-center text-teal-400" title="Verified Customer">
                            <CheckCircle className="w-3.5 h-3.5 fill-teal-400/20 text-teal-400 shrink-0" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">{review.role}</p>
                      <p className="text-[10px] text-cyan-400 font-bold">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Page 2 (Items 3, 4, 5) */}
            <div className="w-full shrink-0 grid md:grid-cols-3 gap-6 px-1">
              {reviews.slice(3, 6).map((review, index) => (
                <div
                  key={index + 3}
                  className={`bg-slate-900/90 border ${review.accentColor} rounded-3xl p-7 flex flex-col justify-between relative group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xl h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${review.badgeBg}`}>
                        {review.tag}
                      </span>
                      <Quote className="w-7 h-7 text-slate-700 group-hover:text-cyan-400/60 transition-colors" />
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-cyan-400/80 transition-colors shadow-md"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-black text-white">{review.name}</h4>
                        {review.verified && (
                          <span className="inline-flex items-center text-teal-400" title="Verified Customer">
                            <CheckCircle className="w-3.5 h-3.5 fill-teal-400/20 text-teal-400 shrink-0" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">{review.role}</p>
                      <p className="text-[10px] text-cyan-400 font-bold">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls & Dots */}
        <div className="mt-8 flex items-center justify-between max-w-xs mx-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gradient-to-r from-teal-400 to-cyan-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


