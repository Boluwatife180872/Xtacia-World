import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">
              <Sparkles className="inline-block ml-2" /> Xtacia World
            </h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
              Curated premium beauty, fragrance, and home essentials for the
              discerning customer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/shop"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Shop All Products
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
              Contact
            </h4>
            <p className="text-primary-foreground/80 text-xs sm:text-sm mb-0.5 sm:mb-1">
              Email: hello@xtaciaworld.com
            </p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              Phone: +234 800 123 4567
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center text-primary-foreground/70 text-xs sm:text-sm">
          <p>&copy; 2026 Xtacia World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
