'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Robert Vance',
      role: 'Apartment Complex Manager',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      comment: 'Before AquaSense, our 50-unit apartment building suffered from motor dry-runs and water overflows every single month. Since installing the ultrasonic system, water wastage dropped to zero and our electricity bills plummeted.',
      rating: 5,
      verified: true,
    },
    {
      name: 'Elena Rostova',
      role: 'Homeowner',
      location: 'Miami, FL',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      comment: 'The live water level widget on my phone is brilliant! I always know exactly how much water is in our rooftop tank. The automated pump shutoff has saved us from multiple potential floods.',
      rating: 5,
      verified: true,
    },
    {
      name: 'David Chen',
      role: 'Facility Operations Lead',
      location: 'San Jose, CA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      comment: 'Extremely easy 15-minute installation. The precision ultrasonic readings match our physical dipstick measurements with 99.8% accuracy. Outstanding product for smart facility management.',
      rating: 5,
      verified: true,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Customer Stories"
          title="Loved by Homeowners &"
          highlightedTitle="Facility Managers"
          subtitle="Discover how AquaSense is revolutionizing water management for thousands of happy customers."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-panel rounded-2xl p-8 flex flex-col justify-between relative group hover:border-teal-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-500/20 group-hover:text-teal-400/40 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{review.role} • {review.location}</p>
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
