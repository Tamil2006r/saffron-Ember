import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { REVIEWS, WHY_CHOOSE_US } from '../data/restaurantData';

export const ReviewsAndWhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#121214] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* PART 1: Why Choose Us */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C] mb-2">
              The Hearth Distinction
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
              Why Dine at Saffron & Ember
            </h2>
            <p className="text-zinc-400 text-sm mt-3 [text-wrap:balance]">
              Every element of your evening — from raw ingredients to acoustic cadence — is orchestrated with intentional culinary discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="bg-[#18171B] p-6 rounded-xl border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: Critic & Diner Reviews */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Guest & Critic Acclaim</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
                Praise from the Table
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-zinc-400">
              <span className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </span>
              <span>4.9 / 5.0 Average Across 680+ Verified Diners</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#17161A] p-7 rounded-xl border border-white/5 flex flex-col justify-between shadow-lg relative group hover:border-[#C24B2C]/30 transition-all duration-300"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-[#D4AF37] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-white/10 group-hover:text-[#C24B2C]/30 transition-colors" />
                  </div>

                  <p className="font-serif italic text-sm text-[#E6E0D6] leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-semibold text-sm text-[#FAF8F5]">
                    {review.author}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5 flex items-center justify-between">
                    <span>{review.role}</span>
                    <span className="text-[11px] text-zinc-500">{review.date}</span>
                  </div>
                  {review.outlet && (
                    <div className="text-[11px] text-[#D4AF37] mt-1 font-medium">
                      {review.outlet}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
