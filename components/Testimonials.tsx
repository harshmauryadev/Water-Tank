'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Rajesh Verma',
      role: 'Housing Society President',
      location: 'Mumbai, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      comment: 'Hamare 40-flats ke apartment complex me har mahine motor dry-run aur water overflow se bhot pareshani hoti thi. Tanki Meter lagane ke baad paani ki wastage 0% ho gayi aur electricity bill bhi kafi kam ho gaya.',
      rating: 5,
      verified: true,
      tag: 'Apartment Complex'
    },
    {
      name: 'Priya Sundaram',
      role: 'Homeowner',
      location: 'Bengaluru, Karnataka',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      comment: 'Mobile app pe live water percentage aur tank level dekhna bohot convenient hai. Automatic pump controller motor ko overflow hote hi turant off kar deta hai. Very reliable smart device!',
      rating: 5,
      verified: true,
      tag: 'Residential Tank'
    },
    {
      name: 'Amitabh Sharma',
      role: 'Hotel & Resort Operations Lead',
      location: 'Jaipur, Rajasthan',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      comment: 'Installation sirf 15 minutes me ho gayi. Ultrasonic sensor ki accuracy 99% se zyada hai. Commercial water sumps aur overhead tanks ke liye sabse best automation solution hai.',
      rating: 5,
      verified: true,
      tag: 'Commercial Hotel'
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-slate-950/90 overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Customer Stories"
          title="Loved by 10,000+ Indian Homeowners"
          highlightedTitle="& Society Managers"
          subtitle="Dekhiye kaise Tanki Meter ne India bhar me paani ki bachat aur motor automation ko aasan banaya hai."
          dark={true}
        />

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel text-center">
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-white">10,000+</div>
            <div className="text-xs text-slate-400 font-medium">Tanks Automated</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-teal-400">15M+ Litres</div>
            <div className="text-xs text-slate-400 font-medium">Water Saved</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-amber-400">4.9 ★★★★★</div>
            <div className="text-xs text-slate-400 font-medium">Customer Rating</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">99.8%</div>
            <div className="text-xs text-slate-400 font-medium">Measurement Accuracy</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-panel-glow rounded-3xl p-8 flex flex-col justify-between relative group hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {review.tag}
                  </span>
                  <Quote className="w-8 h-8 text-teal-500/20 group-hover:text-teal-400/50 transition-colors" />
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400/60 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    {review.verified && (
                      <span className="inline-flex items-center text-teal-400" title="Verified Customer">
                        <CheckCircle className="w-3.5 h-3.5 fill-teal-400/20 text-teal-400 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{review.role}</p>
                  <p className="text-[11px] text-teal-400/80 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
