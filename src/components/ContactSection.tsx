import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, ExternalLink, Instagram, Music } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Dining Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#161518] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C] mb-2">
            Location & Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
            Find & Contact Us
          </h2>
          <p className="text-zinc-400 text-sm mt-3 [text-wrap:balance]">
            Located in the historic Sansome corridor in San Francisco. We welcome inquiries for general dining, private cellar events, and press.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 Cols): Hours, Address & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Details Card */}
            <div className="bg-[#1C1B1F] p-7 rounded-xl border border-white/5 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C24B2C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Address
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    {RESTAURANT_INFO.valetNote}
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#C24B2C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Direct Lines
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Reservations: <a href={`tel:${RESTAURANT_INFO.reservationPhone}`} className="hover:text-[#D95D39] transition-colors">{RESTAURANT_INFO.reservationPhone}</a>
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Main Office: <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#D95D39] transition-colors">{RESTAURANT_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#C24B2C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    Electronic Inquiries
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#D95D39] transition-colors">{RESTAURANT_INFO.email}</a>
                  </p>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Hours of Hospitality</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Lunch Service:</span>
                    <span>Tue – Sun: 11:30 AM – 2:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Dinner Service:</span>
                    <span>Tue – Thu, Sun: 5:00 PM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Weekend Dinner:</span>
                    <span>Fri – Sat: 5:00 PM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Ember Lounge & Bar:</span>
                    <span>Tue – Sun: 4:30 PM – Midnight</span>
                  </div>
                  <div className="flex justify-between py-1 text-zinc-500">
                    <span>Mondays:</span>
                    <span className="italic">Closed (Culinary R&D)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Interactive Map Preview */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-[#1A191D] group shadow-lg">
              {/* Architectural Map Background Image */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Map location of Saffron & Ember"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

              {/* Pin Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C24B2C] text-white flex items-center justify-center shadow-2xl animate-bounce mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="bg-[#121214]/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10 text-xs font-semibold text-[#FAF8F5]">
                  428 Sansome St, San Francisco
                </div>
                <a
                  href="https://maps.google.com/?q=428+Sansome+St+San+Francisco+CA"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-zinc-200 text-[11px] font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D95D39]" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Contact Form & Socials */}
          <div className="lg:col-span-7 bg-[#1C1B1F] p-8 md:p-10 rounded-xl border border-white/5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                Send an Inquiry
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                For private dining salon buyouts, corporate dinner menus, or general questions.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-[#121214] rounded-lg border border-emerald-500/30 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#FAF8F5]">
                  Thank You, {formData.name}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-md mx-auto">
                  Your message has been dispatched to our guest relations director. We typically respond within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Dining Inquiry', message: '' });
                  }}
                  className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#D95D39] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#121214] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#121214] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Subject / Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#121214] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-[#C24B2C]"
                  >
                    <option value="General Dining Inquiry">General Dining Inquiry</option>
                    <option value="Private Dining & Salon Buyouts">Private Dining & Salon Buyouts (12–60 Guests)</option>
                    <option value="Wine Cellar Flight Request">Wine Cellar Flight Request</option>
                    <option value="Press & Media Relations">Press & Media Relations</option>
                    <option value="Culinary Career Opportunities">Culinary Career Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, party size, desired dates, or inquiry..."
                    className="w-full bg-[#121214] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-md bg-[#C24B2C] hover:bg-[#D95D39] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}

            {/* Social Media & Booking Links */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                Connect & Digital Portals
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D95D39] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D95D39]" />
                  <span>@saffronandember</span>
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D95D39] transition-colors"
                >
                  <Music className="w-4 h-4 text-[#D95D39]" />
                  <span>Salon Vinyl Playlist</span>
                </a>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">Resy Verified Partner</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">OpenTable Diner's Choice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
