import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const RestaurantStory: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#121214] relative overflow-hidden">
      {/* Subtle decorative warmth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C24B2C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Saffron & Ember dining room ambience"
                  fallbackTitle="Main Dining Salon"
                  fallbackSubtitle="Warm charcoal stone and amber candlelit atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 bg-[#1C1B1F] border border-white/10 p-5 rounded-lg shadow-2xl backdrop-blur-md">
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                  The Fire Hearth
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">
                  Stone tandoors stoked with seasoned California fruitwood burning at 900°F.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C]">
              <span>Our Heritage & Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight">
              Honoring Ancient Fire with Modern Discipline
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Founded in 2021 by Executive Chef Aarav Sen, Saffron & Ember was born from a simple yet radical proposition: that the grand, centuries-old spice and dum culinary traditions of the Indian subcontinent belong on the modern world stage without compromise or dilution.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Every evening, our open hearth is stoked with fragrant apricot and white oak woods. We mill single-origin whole spices on stone chakki mills right before service, allowing volatile essential oils to bloom table-side. We do not mask ingredients; we coax their deep natural soul through flame and patient slow-braising.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C24B2C]/15 border border-[#C24B2C]/30 flex items-center justify-center text-[#D95D39] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Single-Origin Spices
                  </h4>
                  <p className="text-[12px] text-zinc-400 mt-0.5">
                    Direct-trade saffron from Pampore and Tellicherry peppers from Kerala.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C24B2C]/15 border border-[#C24B2C]/30 flex items-center justify-center text-[#D95D39] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Dum & Live Embers
                  </h4>
                  <p className="text-[12px] text-zinc-400 mt-0.5">
                    Slow-braised meats sealed in heirloom bronze handis with sourdough crusts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C24B2C]/15 border border-[#C24B2C]/30 flex items-center justify-center text-[#D95D39] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Bay Area Sourcing
                  </h4>
                  <p className="text-[12px] text-zinc-400 mt-0.5">
                    Pasture-raised Sonoma meats, Half Moon Bay seafood & organic produce.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C24B2C]/15 border border-[#C24B2C]/30 flex items-center justify-center text-[#D95D39] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Warm Hospitality
                  </h4>
                  <p className="text-[12px] text-zinc-400 mt-0.5">
                    Unhurried dining where your table remains exclusively yours for the evening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Chef Spotlight */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#17161A] p-8 md:p-12 rounded-xl border border-white/5">
            <div className="lg:col-span-4 aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80"
                alt="Executive Chef Aarav Sen plating at the hearth"
                fallbackTitle="Chef Aarav Sen"
                fallbackSubtitle="Executive Chef & Partner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                <span>Executive Chef & Culinary Director</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                Chef Aarav Sen
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Trained in the classical kitchens of Lyon and London before spending three years documenting heritage cooking styles across Awadh, Hyderabad, and Chettinad, Chef Sen marries Western precision with the intuitive emotional power of Indian live-fire cooking.
              </p>
              <blockquote className="border-l-2 border-[#C24B2C] pl-4 italic text-sm text-[#E6E0D6] font-serif">
                "Spice in great cooking is never meant to burn or overpower. It is meant to compose a fragrance symphony — cedar, mace, sweet cardamom, and wood smoke — that lingers in the memory like poetry."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
