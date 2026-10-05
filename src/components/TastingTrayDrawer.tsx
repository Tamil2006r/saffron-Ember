import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle, UtensilsCrossed, Calendar } from 'lucide-react';
import { CartItem } from '../types/restaurant';

interface TastingTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onJumpToReservation: () => void;
}

export const TastingTrayDrawer: React.FC<TastingTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onJumpToReservation,
}) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    setOrderConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#18171B] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-[#C24B2C]" />
              <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
                Your Tasting Tray
              </h3>
              <span className="text-xs text-zinc-400">
                ({items.reduce((sum, i) => sum + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close tasting tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {orderConfirmed ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                  Tasting Selection Saved!
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-xs mx-auto">
                  Your curated dishes have been noted for your dining session. You can attach these directly to your table reservation.
                </p>
                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      setOrderConfirmed(false);
                      onJumpToReservation();
                    }}
                    className="w-full py-3 bg-[#C24B2C] hover:bg-[#D95D39] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                  >
                    Attach to Table Reservation
                  </button>
                  <button
                    onClick={() => {
                      onClearCart();
                      setOrderConfirmed(false);
                      onClose();
                    }}
                    className="text-xs text-zinc-400 hover:text-white underline mt-2"
                  >
                    Start New Tray
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <UtensilsCrossed className="w-10 h-10 text-zinc-600 mx-auto" />
                <h4 className="font-serif text-lg text-zinc-300">Your tray is empty</h4>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                  Browse our seasonal menu and add hearth specialties, dum biryanis, or desserts to curate your dining selection.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-md"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="p-3.5 bg-[#121214] rounded-lg border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          cartItem.item.isVeg ? 'bg-emerald-500' : 'bg-red-600'
                        }`}
                      />
                      <h5 className="font-serif text-sm font-semibold text-[#FAF8F5] truncate">
                        {cartItem.item.name}
                      </h5>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 tabular-nums">
                      ${cartItem.item.price} each
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 border border-white/10 rounded bg-[#1A191D] px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                      className="text-zinc-400 hover:text-white"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-semibold text-zinc-200 w-4 text-center tabular-nums">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                      className="text-zinc-400 hover:text-white"
                      title="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Line Total & Remove */}
                  <div className="text-right">
                    <div className="text-xs font-semibold text-[#FAF8F5] tabular-nums">
                      ${cartItem.item.price * cartItem.quantity}
                    </div>
                    <button
                      onClick={() => onRemoveItem(cartItem.item.id)}
                      className="text-[11px] text-zinc-500 hover:text-red-400 transition-colors mt-1 inline-flex items-center gap-0.5"
                      title="Remove dish"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer (Only if not confirmed & items exist) */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#141317] space-y-4">
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-200 tabular-nums">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8.5%)</span>
                  <span className="font-semibold text-zinc-200 tabular-nums">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#FAF8F5] pt-2 border-t border-white/10">
                  <span>Estimated Total</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onJumpToReservation();
                  }}
                  className="w-full py-3 bg-[#FAF8F5] hover:bg-[#D95D39] text-[#121214] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Attach Tray to Reservation</span>
                </button>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-2.5 bg-[#C24B2C] hover:bg-[#A83B1F] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Submit Pre-Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                Pre-orders are billed at table checkout after dining.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
