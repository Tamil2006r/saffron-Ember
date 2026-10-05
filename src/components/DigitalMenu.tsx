import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Info, X, SlidersHorizontal } from 'lucide-react';
import { MenuItem, MenuCategoryType } from '../types/restaurant';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface DigitalMenuProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  cartDishIds: Set<string>;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({
  items,
  onAddToCart,
  cartDishIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg' | 'specials'>('all');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'nonveg' && item.isVeg) return false;
      if (dietaryFilter === 'specials' && !item.isChefSpecial) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesPairing = item.pairingNote?.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesPairing;
      }

      return true;
    });
  }, [items, selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C24B2C] mb-2">
            Seasonal Gastronomy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
            The Digital Menu
          </h2>
          <p className="text-zinc-400 text-sm mt-3 [text-wrap:balance]">
            Explore our curated culinary courses blistered over fruitwood embers, simmered in bronze vessels, and seasoned with heirloom spices.
          </p>
        </div>

        {/* Search & Dietary Controls Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#18171B] p-3 rounded-lg border border-white/5">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, spices, pairings..."
              className="w-full bg-[#121214] border border-white/10 rounded-md pl-10 pr-9 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#C24B2C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121214] rounded-md border border-white/5 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                dietaryFilter === 'all'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Vegetarian
            </button>
            <button
              onClick={() => setDietaryFilter('nonveg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                dietaryFilter === 'nonveg'
                  ? 'bg-red-950/80 text-red-300 border border-red-500/30'
                  : 'text-zinc-400 hover:text-red-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Non-Vegetarian
            </button>
            <button
              onClick={() => setDietaryFilter('specials')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                dietaryFilter === 'specials'
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                  : 'text-zinc-400 hover:text-[#D4AF37]'
              }`}
            >
              Chef's Signatures
            </button>
          </div>
        </div>

        {/* Category Navigation Bar (All 8 requested categories) */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#C24B2C] text-white shadow-md'
                  : 'bg-[#1A191D] text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/15'
              }`}
            >
              Full Menu ({items.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const count = items.filter((i) => i.category === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C24B2C] text-white shadow-md'
                      : 'bg-[#1A191D] text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/15'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-6 px-1">
          <span>
            Showing <strong className="text-zinc-300 font-semibold">{filteredItems.length}</strong> creations
          </span>
          {(searchQuery || dietaryFilter !== 'all' || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="text-[#D95D39] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-[#17161A] rounded-xl border border-white/5">
            <SlidersHorizontal className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <div className="font-serif text-lg text-zinc-300">No dishes match your selection</div>
            <p className="text-xs text-zinc-500 mt-1">Try clearing your search query or switching dietary filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C24B2C] rounded-md"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const isAdded = cartDishIds.has(dish.id);
              return (
                <div
                  key={dish.id}
                  className="group flex flex-col justify-between bg-[#19181C] rounded-lg overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  {/* Dish Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      fallbackTitle={dish.name}
                      fallbackSubtitle={dish.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Indicator Symbols */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center bg-[#121214]/90 backdrop-blur-sm ${
                          dish.isVeg ? 'border-emerald-500' : 'border-red-600'
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
                          Signature
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-sm font-semibold text-[#FAF8F5] tabular-nums">
                      ${dish.price}
                    </div>

                    {/* Quick View Details Button */}
                    <button
                      onClick={() => setSelectedDishModal(dish)}
                      className="absolute bottom-3 left-3 bg-black/70 hover:bg-black/90 backdrop-blur-md p-1.5 rounded text-zinc-300 hover:text-white transition-colors"
                      title="View culinary details & allergens"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#FAF8F5] group-hover:text-[#D95D39] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-zinc-400 text-xs mt-2 leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>

                      {dish.pairingNote && (
                        <div className="mt-2 text-[11px] text-[#D4AF37]/90 truncate">
                          <span className="text-zinc-500 mr-1">Pairing:</span>
                          <span className="italic">{dish.pairingNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Footer */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="text-[11px] text-zinc-500">
                        {dish.spiceLevel ? (
                          <span>Spiciness: {'🌶️'.repeat(dish.spiceLevel)}</span>
                        ) : (
                          <span>Aromatic herbs</span>
                        )}
                      </div>

                      <button
                        onClick={() => onAddToCart(dish)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 ${
                          isAdded
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                            : 'bg-[#C24B2C] hover:bg-[#D95D39] text-white active:scale-95'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
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
        )}

        {/* Dish Detail Modal */}
        {selectedDishModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#1C1B1F] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedDishModal(null)}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/60 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9]">
                <ImageWithFallback
                  src={selectedDishModal.image}
                  alt={selectedDishModal.name}
                  fallbackTitle={selectedDishModal.name}
                  fallbackSubtitle={selectedDishModal.description}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-black/85 px-3 py-1 rounded text-base font-serif font-bold text-[#FAF8F5] tabular-nums">
                  ${selectedDishModal.price}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        selectedDishModal.isVeg ? 'bg-emerald-500' : 'bg-red-600'
                      }`}
                    />
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400">
                      {selectedDishModal.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                    {selectedDishModal.isChefSpecial && (
                      <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] ml-2">
                        · Chef Signature
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                    {selectedDishModal.name}
                  </h3>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {selectedDishModal.description}
                </p>

                {selectedDishModal.pairingNote && (
                  <div className="p-3 bg-white/[0.03] rounded border border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Sommelier Pairing Recommendation
                    </div>
                    <div className="text-xs text-zinc-200 italic mt-0.5">
                      {selectedDishModal.pairingNote}
                    </div>
                  </div>
                )}

                {selectedDishModal.allergens && (
                  <div className="text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-300">Allergen Notice: </span>
                    {selectedDishModal.allergens.join(', ')}
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-zinc-400">
                    Hearth preparation time: ~15-20 min
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart(selectedDishModal);
                      setSelectedDishModal(null);
                    }}
                    className="px-5 py-2.5 bg-[#C24B2C] hover:bg-[#D95D39] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                  >
                    Add to Tasting Tray
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
