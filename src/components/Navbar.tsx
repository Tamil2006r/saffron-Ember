import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Specials', href: '#specials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121214]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#121214]/90 via-[#121214]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <a
          href="#home"
          className="text-lg md:text-xl font-serif tracking-[0.25em] text-[#FAF8F5] uppercase font-bold hover:text-[#D95D39] transition-colors whitespace-nowrap shrink-0"
        >
          SAFFRON & EMBER
        </a>

        {/* Zone 2: Navigation Links (Clean text with subtle underline) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-widest uppercase text-zinc-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#FAF8F5] ${
                  isActive ? 'text-[#D95D39] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D95D39]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Tasting Tray / Order Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Tasting Tray"
            className="relative p-2 text-zinc-300 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.03]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D95D39]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C24B2C] text-white text-[10px] font-semibold flex items-center justify-center tabular-nums shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Reserve a Table CTA */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#121214] bg-[#FAF8F5] hover:bg-[#D95D39] hover:text-white rounded-md transition-all duration-200 whitespace-nowrap shadow-sm active:scale-[0.98]"
          >
            Reserve a Table
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg border border-white/10 bg-white/[0.03]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161518]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#D95D39] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-widest text-[#121214] bg-[#FAF8F5] hover:bg-[#D95D39] hover:text-white rounded-md transition-colors text-center"
              >
                Reserve a Table
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
