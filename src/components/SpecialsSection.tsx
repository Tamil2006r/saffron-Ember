import React from 'react';
import { Wine, Sparkles, Clock, Check } from 'lucide-react';
import { CHEF_SPECIALS } from '../data/restaurantData';

interface SpecialsSectionProps {
  onReserveSpecials: (specialTitle: string) => void;
}

export const SpecialsSection: React.FC<SpecialsSectionProps> = ({ onReserveSpecials }) => {
  return (
    <section id="specials" className="py-24 bg-[#161518] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chef's Atelier & Limited Releases</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
            Today's Seasonal Specials
          </h2>
          <p className="text-zinc-400 text-sm mt-3 [text-wrap:balance]">
            Rare seasonal ingredients, multi-course hearth tasting journeys, and table-side carved feasts requiring 48-hour advance preparation.
          </p>
        </div>

        {/* 3 Featured Specials Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHEF_SPECIALS.map((special, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={special.title}
                className={`relative flex flex-col justify-between rounded-xl p-7 md:p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#221F24] via-[#1E1C21] to-[#18161A] border-2 border-[#D4AF37]/50 shadow-2xl scale-[1.02]'
                    : 'bg-[#1A191D] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Badge text */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {special.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>Seasonal</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] leading-snug">
                    {special.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1 mb-4">
                    {special.tagline}
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {special.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                    {special.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#D95D39] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-serif font-bold text-[#FAF8F5] tabular-nums">
                        ${special.price}
                      </span>
                      <span className="text-xs text-zinc-400 ml-1">/ guest</span>
                    </div>

                    {special.winePairing && (
                      <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                        <Wine className="w-3.5 h-3.5" />
                        <span>+${special.winePairing} pairing</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onReserveSpecials(special.title)}
                    className={`w-full py-3 px-4 rounded text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                      isFeatured
                        ? 'bg-[#D4AF37] hover:bg-[#E5BF47] text-[#121214] shadow-lg active:scale-[0.98]'
                        : 'bg-[#C24B2C] hover:bg-[#D95D39] text-white active:scale-[0.98]'
                    }`}
                  >
                    Reserve with This Experience
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sommelier Note Banner */}
        <div className="mt-12 bg-white/[0.02] border border-white/10 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FAF8F5]">
                Private Reserve Cellar & Bespoke Pairings
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Head Sommelier Claire Dubois curates custom cellar flights for private dining parties upon request.
              </div>
            </div>
          </div>
          <button
            onClick={() => onReserveSpecials('Custom Sommelier Pairing')}
            className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#E6C66E] border-b border-[#D4AF37]/40 pb-0.5 whitespace-nowrap"
          >
            Inquire Cellar Reservation
          </button>
        </div>
      </div>
    </section>
  );
};
