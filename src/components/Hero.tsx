import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onMenuClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Media with Measured Scrim for > 4.5:1 Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Saffron & Ember dining atmosphere and woodfire hearth"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121214]/30 to-[#121214]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        {/* Subtle Accolade Lead-in (Zero-pill metadata) */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
          <span>Michelin Guide 2026 Recommended</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Open Woodfire Hearth</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>San Francisco</span>
        </div>

        {/* Restaurant Name */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.12em] text-[#FAF8F5] uppercase mb-4 drop-shadow-md">
          {RESTAURANT_INFO.name}
        </h1>

        {/* Memorable Tagline (Balanced Text) */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E6E0D6] max-w-3xl mb-6 font-normal tracking-wide [text-wrap:balance]">
          "{RESTAURANT_INFO.tagline}"
        </p>

        {/* Short Description */}
        <p className="text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed mb-10 [text-wrap:balance]">
          {RESTAURANT_INFO.subheading}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#121214] bg-[#FAF8F5] hover:bg-[#D95D39] hover:text-white rounded-md transition-all duration-200 shadow-xl active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            Reserve a Table
          </button>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              onMenuClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 rounded-md transition-all duration-200 active:scale-[0.98]"
          >
            View Seasonal Menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Ambient Service Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#C24B2C] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Location
              </div>
              <div className="text-sm text-zinc-200 mt-0.5">
                428 Sansome St, Financial District
              </div>
              <div className="text-xs text-zinc-400">Valet parking from 5:30 PM</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#C24B2C] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Dinner Service
              </div>
              <div className="text-sm text-zinc-200 mt-0.5">
                Tuesday – Sunday · 5:00 PM – Late
              </div>
              <div className="text-xs text-zinc-400">Lunch Tue–Sun 11:30 AM – 2:30 PM</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Tonight's Hearth Status
              </div>
              <div className="text-sm text-zinc-200 mt-0.5">
                Apricot Wood Embers Active
              </div>
              <div className="text-xs text-zinc-400">Limited counter seatings available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
