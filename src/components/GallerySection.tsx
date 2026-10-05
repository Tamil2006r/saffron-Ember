import React, { useState } from 'react';
import { Eye, X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dishes' | 'ambience' | 'kitchen' | 'bar'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Views' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'ambience', label: 'Interior & Dining' },
    { id: 'kitchen', label: 'Chef & Hearth' },
    { id: 'bar', label: 'Lounge & Bar' },
  ] as const;

  const filteredGallery = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === 0 ? filteredGallery.length - 1 : activeLightboxIndex - 1
    );
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === filteredGallery.length - 1 ? 0 : activeLightboxIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-[#161518] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Atmosphere</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
              The Gallery
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              An intimate look into our dining salons, hearth flames, culinary preparations, and craft cocktail cellar.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#121214] rounded-lg border border-white/5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#C24B2C] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer border border-white/5 bg-[#1C1B1F] shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                fallbackTitle={item.title}
                fallbackSubtitle={item.categoryLabel}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />

              {/* Hover Overlay with Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-base font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-white/80 font-medium">
                  <Eye className="w-3.5 h-3.5 text-[#D95D39]" />
                  <span>Click to view large</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#161518] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-[340px] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Media Viewport */}
              <div className="flex-1 aspect-[16/10] md:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Media Caption Panel */}
              <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-[#19181C]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                    {activeLightboxItem.categoryLabel}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] leading-snug">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-4 leading-relaxed">
                    {activeLightboxItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs text-zinc-500 flex items-center justify-between">
                  <span>Photo {((activeLightboxIndex ?? 0) + 1)} of {filteredGallery.length}</span>
                  <span className="text-[#D95D39]">Saffron & Ember Archive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
