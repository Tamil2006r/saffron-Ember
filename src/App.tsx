import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { RestaurantStory } from './components/RestaurantStory';
import { SpecialsSection } from './components/SpecialsSection';
import { DigitalMenu } from './components/DigitalMenu';
import { GallerySection } from './components/GallerySection';
import { ReviewsAndWhyUs } from './components/ReviewsAndWhyUs';
import { ReservationsSection } from './components/ReservationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TastingTrayDrawer } from './components/TastingTrayDrawer';
import { MENU_ITEMS } from './data/restaurantData';
import { CartItem, MenuItem } from './types/restaurant';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [preselectedExperience, setPreselectedExperience] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Set of dish IDs in cart
  const cartDishIds = new Set(cartItems.map((ci) => ci.item.id));
  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'specials', 'gallery', 'reservations', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (dish: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === dish.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === dish.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item: dish, quantity: 1 }];
    });
    showToast(`Added "${dish.name}" to Tasting Tray`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveSpecials = (specialTitle: string) => {
    setPreselectedExperience(specialTitle);
    scrollToSection('reservations');
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#E8E6E3] font-sans selection:bg-[#C24B2C] selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1B1F] border border-[#C24B2C]/40 text-[#FAF8F5] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 text-xs animate-bounce">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => scrollToSection('reservations')}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero
        onReserveClick={() => scrollToSection('reservations')}
        onMenuClick={() => scrollToSection('menu')}
      />

      {/* Featured Dishes Section */}
      <FeaturedDishes
        dishes={MENU_ITEMS.filter((i) => i.isChefSpecial)}
        onAddToCart={handleAddToCart}
        cartDishIds={cartDishIds}
        onViewMenu={() => scrollToSection('menu')}
      />

      {/* Restaurant Story & Chef Section (About) */}
      <RestaurantStory />

      {/* Chef's Specials & Tasting Experiences */}
      <SpecialsSection onReserveSpecials={handleReserveSpecials} />

      {/* Digital Menu with Category Filtering & Search */}
      <DigitalMenu
        items={MENU_ITEMS}
        onAddToCart={handleAddToCart}
        cartDishIds={cartDishIds}
      />

      {/* Interactive Atmosphere & Food Gallery */}
      <GallerySection />

      {/* Why Choose Us & Customer/Critic Reviews */}
      <ReviewsAndWhyUs />

      {/* Table Reservation Form & Validation */}
      <ReservationsSection
        preselectedExperience={preselectedExperience}
        onClearPreselectedExperience={() => setPreselectedExperience(undefined)}
      />

      {/* Location, Contact & Map Section */}
      <ContactSection />

      {/* Architectural Footer */}
      <Footer />

      {/* Slide-over Tasting Tray / Order Drawer */}
      <TastingTrayDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onJumpToReservation={() => {
          setIsCartOpen(false);
          scrollToSection('reservations');
        }}
      />
    </div>
  );
}
