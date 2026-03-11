'use client';

import Link from 'next/link';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '@/store/cart';

export const Navigation = () => {
  const items = useCart((state) => state.items);
  const cartCount = items.length;

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight shrink-0">
            <Sparkles className="inline-block mr-2" />
            Xtacia World
          </Link>
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="hidden sm:inline text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium">
              Home
            </Link>
            <Link href="/shop" className="hidden sm:inline text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium">
              Shop
            </Link>
            <Link href="/cart" className="relative group touch-target">
              <ShoppingCart size={20} className="sm:w-5.5 sm:h-5.5 text-foreground/70 group-hover:text-primary transition-colors duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
