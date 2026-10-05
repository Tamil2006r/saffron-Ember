import React from 'react';
import { Plus, Check, ArrowRight, Flame } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { ImageWithFallback } from './ImageWithFallback';

interface FeaturedDishesProps {
  dishes: MenuItem[];
  onAddToCart: (dish: MenuItem) => void;
  cartDishIds: Set<string>;
  onViewMenu: () => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({
  dishes,
  onAddToCart,
  cartDishIds,
  onViewMenu,
}) => {
  return (
    <section className="py-20 bg-[#161518] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C] mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Hearth Signatures</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] font-bold tracking-tight">
              Featured Creations
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Curated master dishes blistered in clay ovens, slow-braised over embers, and scented with hand-ground Kashmiri saffron.
            </p>
          </div>

          <button
            onClick={onViewMenu}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-[#E6C66E] transition-colors"
          >
            <span>Explore All 32 Dishes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.slice(0, 3).map((dish) => {
            const isAdded = cartDishIds.has(dish.id);
            return (
              <div
                key={dish.id}
                className="group flex flex-col bg-[#1C1B1F] rounded-lg overflow-hidden border border-white/5 hover:border-[#C24B2C]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Image Slot (65-70% visual focus) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    fallbackTitle={dish.name}
                    fallbackSubtitle={dish.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Veg / Non-Veg Indicator Badge & Chef Special */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center bg-[#121214]/90 backdrop-blur-sm ${
                        dish.isVeg
                          ? 'border-emerald-500'
                          : 'border-red-600'
                      }`}
                      title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          dish.isVeg ? 'bg-emerald-500' : 'bg-red-600'
                        }`}
                      />
                    </div>
                    {dish.isChefSpecial && (
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D4AF37] bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded">
                        Chef Signature
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-sm font-semibold text-[#FAF8F5] tabular-nums">
                    ${dish.price}
                  </div>
                </div>

                {/* Dish Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF8F5] group-hover:text-[#D95D39] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed line-clamp-3">
                      {dish.description}
                    </p>
                    {dish.pairingNote && (
                      <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-[#D4AF37]/90 flex items-center gap-1.5">
                        <span className="font-semibold uppercase tracking-wider text-zinc-500">Pairing:</span>
                        <span className="italic truncate">{dish.pairingNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[11px] text-zinc-500">
                      {dish.spiceLevel ? (
                        <span>Spiciness: {'🌶️'.repeat(dish.spiceLevel)}</span>
                      ) : (
                        <span>Delicate seasoning</span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 ${
                        isAdded
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                          : 'bg-[#C24B2C] hover:bg-[#D95D39] text-white active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Tasting Tray</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
