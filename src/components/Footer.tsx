import React, { useState } from 'react';
import { Flame, CheckCircle, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0E0E10] border-t border-white/10 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#C24B2C]/20 border border-[#C24B2C]/40 flex items-center justify-center text-[#D95D39]">
                <Flame className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-[#FAF8F5] uppercase">
                {RESTAURANT_INFO.name}
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Contemporary hearth and slow-dum gastronomy honoring ancient spice routes with rigorous Northern California seasonality.
            </p>

            <div className="text-[11px] text-[#D4AF37] space-y-1">
              <div>Michelin Guide 2026 Recommended</div>
              <div>Wine Spectator Award of Excellence</div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Experience
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#FAF8F5] transition-colors">The Hearth</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF8F5] transition-colors">Seasonal Menu</a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#FAF8F5] transition-colors">Chef's Atelier</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">Culinary Philosophy</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">Atmosphere Gallery</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-[#FAF8F5] transition-colors">Table Booking</a>
              </li>
            </ul>
          </div>

          {/* Dining Salons & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Dining & Valet
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              {RESTAURANT_INFO.address}
            </p>
            <div className="text-xs space-y-1 pt-1">
              <div className="text-zinc-300">Dinner: Tue – Sun 5:00 PM – Late</div>
              <div className="text-zinc-300">Lunch: Tue – Sun 11:30 AM – 2:30 PM</div>
              <div className="text-zinc-500">Mondays Closed for R&D</div>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.reservationPhone}`}
                className="text-xs text-[#D95D39] hover:underline"
              >
                {RESTAURANT_INFO.reservationPhone}
              </a>
            </div>
          </div>

          {/* Seasonal Journal Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Seasonal Dispatches
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Receive private invitations for limited-seating hearth collaborations and rare cellar bottle releases.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded border border-emerald-500/20">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>You have been added to our private table list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-[#161518] border border-white/10 rounded-md px-3 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to seasonal newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#C24B2C] hover:bg-[#D95D39] text-white rounded text-xs flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-zinc-500">
                  Strictly unhurried dispatches. No spam.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-zinc-300 transition-colors">Dining Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Press & Media</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
