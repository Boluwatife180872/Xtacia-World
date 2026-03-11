"use client";

import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";
import { QuantitySelector } from "@/components/QuantitySelector";
import { Button } from "@/components/Button";

export default function Cart() {
  const items = useCart((state) => state.items);
  const total = useCart((state) => state.getTotal());
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);

  return (
    <main className="bg-background py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-12">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
              <ShoppingCart size={32} className="text-primary/40" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3">
              Your cart is empty
            </h2>
            <p className="text-foreground/60 text-base sm:text-lg mb-8 max-w-md">
              Discover our curated collection of premium beauty essentials and
              find something beautiful for yourself.
            </p>
            <Link href="/shop">
              <Button className="px-8 py-3 text-sm sm:text-base">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-lg shrink-0 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-semibold text-base sm:text-lg text-primary mb-1 sm:mb-2 truncate">
                        {item.name}
                      </h3>
                      <p className="text-foreground/70 mb-3 sm:mb-4 font-medium text-sm sm:text-base">
                        ₦{item.price.toLocaleString()}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(qty) => updateQuantity(item.id, qty)}
                        />

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors duration-200 w-fit touch-target"
                          aria-label="Remove item"
                        >
                          <Trash2
                            size={18}
                            className="sm:w-5 sm:h-5 text-destructive"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right flex flex-col justify-between pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-border sm:border-border pl-4 sm:pl-0">
                      <p className="text-base sm:text-lg font-bold text-primary">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-lg p-4 sm:p-6 sticky top-20 border border-border">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-foreground/70">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-foreground/70">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-foreground/70">Tax</span>
                    <span className="font-semibold text-foreground/60">
                      At checkout
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-4 sm:mb-6 text-base sm:text-lg font-bold text-primary">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>

                <Link href="/checkout">
                  <Button className="w-full text-sm sm:text-base">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link
                  href="/shop"
                  className="block text-center mt-3 sm:mt-4 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
