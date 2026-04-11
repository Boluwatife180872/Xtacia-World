'use client';

import Link from 'next/link';
import { ShoppingCart, Sparkles, User, LogOut } from 'lucide-react';
import { useCart } from '@/store/cart';
import { useConvexAuth, useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../convex/_generated/api";

export const Navigation = () => {
  const items = useCart((state) => state.items);
  const cartCount = items.length;
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signOut } = useAuthActions();
  const user = useQuery(api.users.viewer);
  const displayName =
    user?.name?.trim() ||
    user?.email?.split("@")[0] ||
    "Account";


  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight shrink-0">
            <Sparkles className="inline-block mr-2" />
            Xtacia World
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <Link href="/" className="hidden sm:inline text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium">
              Home
            </Link>
            <Link href="/shop" className="hidden sm:inline text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium">
              Shop
            </Link>
            
            <div className="flex items-center gap-3 sm:gap-6">
              {isLoading ? (
                <div className="h-5 w-5 bg-accent animate-pulse rounded-full" />
              ) : isAuthenticated ? (
                <>
                  <Link href="/orders" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-accent/50">
                    <User size={18} />
                    <span className="max-w-24 truncate sm:max-w-none">
                      {`Hi, ${displayName.split(' ')[0]}`}
                    </span>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-foreground/70 hover:text-destructive transition-colors duration-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-destructive/5 cursor-pointer bg-transparent border-none"
                  >
                    <LogOut size={18} />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              ) : (
                <Link href="/auth" className="group text-foreground/70 hover:text-primary transition-colors duration-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-primary/30">
                  <User size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Sign In</span>
                </Link>
              )}
              
              <Link href="/cart" className="relative group p-1.5 rounded-full hover:bg-accent/50 transition-colors">
                <ShoppingCart size={20} className="text-foreground/70 group-hover:text-primary transition-colors duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
