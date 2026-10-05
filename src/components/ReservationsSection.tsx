import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, Utensils, AlertCircle, Sparkles, Download, Phone, Mail } from 'lucide-react';
import { ReservationDetails } from '../types/restaurant';

interface ReservationsSectionProps {
  preselectedExperience?: string;
  onClearPreselectedExperience?: () => void;
}

export const ReservationsSection: React.FC<ReservationsSectionProps> = ({
  preselectedExperience,
  onClearPreselectedExperience,
}) => {
  // Today's date as default min date
  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'main-dining' | 'hearthside-counter' | 'chefs-table' | 'garden-terrace'>('main-dining');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [specialRequests, setSpecialRequests] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationDetails | null>(null);

  const timeSlots = [
    { label: '12:00 PM', value: '12:00', meal: 'Lunch' },
    { label: '12:30 PM', value: '12:30', meal: 'Lunch' },
    { label: '1:00 PM', value: '13:00', meal: 'Lunch' },
    { label: '1:30 PM', value: '13:30', meal: 'Lunch' },
    { label: '5:30 PM', value: '17:30', meal: 'Dinner' },
    { label: '6:00 PM', value: '18:00', meal: 'Dinner' },
    { label: '6:30 PM', value: '18:30', meal: 'Dinner' },
    { label: '7:00 PM', value: '19:00', meal: 'Dinner' },
    { label: '7:30 PM', value: '19:30', meal: 'Dinner' },
    { label: '8:00 PM', value: '20:00', meal: 'Dinner' },
    { label: '8:30 PM', value: '20:30', meal: 'Dinner' },
    { label: '9:00 PM', value: '21:00', meal: 'Dinner' },
  ];

  const seatingAreas = [
    { id: 'main-dining', label: 'Main Dining Salon', desc: 'Spacious banquettes & candlelit ambiance' },
    { id: 'hearthside-counter', label: "Hearthside Chef's Counter", desc: 'Front-row view of the live fire hearth' },
    { id: 'chefs-table', label: 'Private Wine Vault', desc: 'Intimate setting surrounded by rare vintages' },
    { id: 'garden-terrace', label: 'Covered Garden Terrace', desc: 'Heated open-air terrace with hanging lanterns' },
  ] as const;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required for SMS confirmation';
    } else if (phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!email.trim()) {
      errs.email = 'Email address is required for confirmation receipt';
    } else if (!email.includes('@') || !email.includes('.')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!date) errs.date = 'Please select a dining date';
    if (!time) errs.time = 'Please select a dining time slot';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newReservation: ReservationDetails = {
        id: `SE-${Math.floor(1000 + Math.random() * 9000)}`,
        date,
        time,
        guests,
        seatingArea,
        fullName,
        phone,
        email,
        occasion,
        specialRequests: preselectedExperience
          ? `[Experience: ${preselectedExperience}] ${specialRequests}`
          : specialRequests,
        createdAt: new Date().toISOString(),
      };
      setConfirmedReservation(newReservation);
      setIsSubmitting(false);
    }, 600);
  };

  const handleDownloadCalendar = () => {
    if (!confirmedReservation) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Saffron and Ember//Reservations//EN
BEGIN:VEVENT
SUMMARY:Dining Reservation at Saffron & Ember (${confirmedReservation.guests} guests)
DESCRIPTION:Reservation ID: ${confirmedReservation.id}\\nGuests: ${confirmedReservation.guests}\\nSeating: ${confirmedReservation.seatingArea}
LOCATION:428 Sansome Street, San Francisco, CA 94111
DTSTART:${confirmedReservation.date.replace(/-/g, '')}T${confirmedReservation.time.replace(':', '')}00Z
DURATION:PT2H
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Saffron-Ember-Reservation-${confirmedReservation.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="reservations" className="py-24 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C] mb-2">
            Table Booking
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
            Reserve a Table
          </h2>
          <p className="text-zinc-400 text-sm mt-3 [text-wrap:balance]">
            Join us for an unhurried culinary journey. Tables are held for 15 minutes past reservation time.
          </p>
        </div>

        {confirmedReservation ? (
          /* Confirmation Success State */
          <div className="max-w-2xl mx-auto bg-[#19181C] border border-emerald-500/30 rounded-xl p-8 md:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 block mb-1">
              Table Confirmed
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#FAF8F5]">
              We Look Forward to Welcoming You, {confirmedReservation.fullName}
            </h3>

            <div className="mt-2 text-sm text-zinc-400">
              Confirmation Code: <strong className="text-white font-mono tracking-wider">{confirmedReservation.id}</strong>
            </div>

            {/* Summary Details Card */}
            <div className="my-8 p-6 bg-[#121214] rounded-lg border border-white/5 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block">Date & Time</span>
                <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                  {confirmedReservation.date} at {confirmedReservation.time}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block">Party Size</span>
                <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                  {confirmedReservation.guests} {confirmedReservation.guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block">Seating Area</span>
                <span className="text-sm font-semibold text-zinc-200 mt-0.5 block capitalize">
                  {confirmedReservation.seatingArea.replace('-', ' ')}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block">Contact Confirmation</span>
                <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                  {confirmedReservation.email}
                </span>
              </div>
              {confirmedReservation.specialRequests && (
                <div className="sm:col-span-2 pt-2 border-t border-white/5">
                  <span className="text-zinc-500 uppercase tracking-wider block">Special Notes</span>
                  <span className="text-zinc-300 mt-0.5 block italic">
                    {confirmedReservation.specialRequests}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C24B2C] hover:bg-[#D95D39] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                Add to Calendar (.ics)
              </button>
              <button
                onClick={() => setConfirmedReservation(null)}
                className="w-full sm:w-auto px-6 py-3 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Book Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Pane Form & Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Form Input */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-[#17161A] p-6 sm:p-8 rounded-xl border border-white/5 space-y-6"
            >
              {preselectedExperience && (
                <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#FAF8F5]">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>
                      Selected Experience: <strong>{preselectedExperience}</strong>
                    </span>
                  </div>
                  {onClearPreselectedExperience && (
                    <button
                      type="button"
                      onClick={onClearPreselectedExperience}
                      className="text-xs text-zinc-400 hover:text-white underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}

              {/* 1. Date, Time & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Dining Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full bg-[#121214] border ${
                        errors.date ? 'border-red-500' : 'border-white/10'
                      } rounded-md px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-[#C24B2C]`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Party Size
                  </label>
                  <div className="flex items-center border border-white/10 rounded-md bg-[#121214] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-bold"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center text-xs font-semibold text-zinc-200 tabular-nums">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(14, guests + 1))}
                      className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Time dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-md px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-[#C24B2C]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label} ({slot.meal})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Seating Area Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Select Seating Ambiance
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingAreas.map((area) => (
                    <button
                      type="button"
                      key={area.id}
                      onClick={() => setSeatingArea(area.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        seatingArea === area.id
                          ? 'border-[#C24B2C] bg-[#C24B2C]/10 text-white shadow-sm'
                          : 'border-white/5 bg-[#121214] text-zinc-400 hover:border-white/15'
                      }`}
                    >
                      <div className="text-xs font-semibold text-zinc-200">{area.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{area.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Guest Contact Fields */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Primary Guest Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Roosevelt"
                    className={`w-full bg-[#121214] border ${
                      errors.fullName ? 'border-red-500' : 'border-white/10'
                    } rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Phone Number (SMS confirmation) *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (415) 000-0000"
                      className={`w-full bg-[#121214] border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className={`w-full bg-[#121214] border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-[#121214] border border-white/10 rounded-md px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-[#C24B2C]"
                    >
                      <option value="Casual Dining">Casual Dining</option>
                      <option value="Date Night / Anniversary">Date Night / Anniversary</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Business Dinner">Business Dinner</option>
                      <option value="Special Celebration">Special Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Dietary Requirements & Notes
                    </label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Nut allergy, gluten sensitive, anniversary surprise"
                      className="w-full bg-[#121214] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-md bg-[#FAF8F5] hover:bg-[#D95D39] text-[#121214] hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-xl active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming with Reservation Desk...' : 'Complete Table Reservation'}
              </button>
            </form>

            {/* Right 5 Columns: Live Summary & Salon Policy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#17161A] p-6 rounded-xl border border-white/5 space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border-b border-white/5 pb-3">
                  Live Reservation Summary
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C24B2C]" />
                      Date:
                    </span>
                    <span className="font-semibold text-zinc-200">{date || 'Select date'}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C24B2C]" />
                      Time Slot:
                    </span>
                    <span className="font-semibold text-zinc-200">{time}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#C24B2C]" />
                      Party Size:
                    </span>
                    <span className="font-semibold text-zinc-200">{guests} Guests</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <Utensils className="w-3.5 h-3.5 text-[#C24B2C]" />
                      Selected Seating:
                    </span>
                    <span className="font-semibold text-zinc-200 capitalize">
                      {seatingArea.replace('-', ' ')}
                    </span>
                  </div>

                  {preselectedExperience && (
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[#D4AF37]">
                      <span>Experience:</span>
                      <span className="font-semibold truncate max-w-[180px]">{preselectedExperience}</span>
                    </div>
                  )}
                </div>

                {/* Policy Notes */}
                <div className="pt-4 border-t border-white/5 text-[11px] text-zinc-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>No deposit required for parties under 6 guests.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Table held for 15 minutes past scheduled time.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Complimentary valet parking available from 5:30 PM.</span>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Contact Box */}
              <div className="bg-[#1C1B1F] p-6 rounded-xl border border-white/5 text-xs text-zinc-400">
                <div className="font-semibold text-zinc-200 mb-1">
                  Need a Large Party or Private Vault?
                </div>
                <p className="text-zinc-400 leading-relaxed mb-3">
                  For parties of 8 or more, or private buyouts of our cellar salon, please contact our guest concierge directly.
                </p>
                <div className="space-y-1.5 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C24B2C]" />
                    <span>+1 (415) 890-4421</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C24B2C]" />
                    <span>concierge@saffronandember.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
