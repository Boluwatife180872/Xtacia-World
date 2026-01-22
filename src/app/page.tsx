import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { HeroCarousel } from '@/components/HeroCarousel';
import { products, categories } from '@/data/products';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main className="bg-background">
      {/* Hero Carousel Section */}
      <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <HeroCarousel />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-1 sm:mb-2">
              Discover by Category
            </h2>
            <p className="text-center text-foreground/60 text-sm sm:text-base md:text-lg px-2">
              Explore our curated collections of premium beauty essentials
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                className="group bg-card rounded-lg p-4 sm:p-6 md:p-8 text-center border border-border hover:border-primary hover:shadow-lg transition-all duration-300 min-h-25 sm:min-h-30 flex items-center justify-center"
              >
                <p className="text-base sm:text-lg font-semibold capitalize text-foreground group-hover:text-primary transition-colors">
                  {category === 'perfume'
                    ? 'Perfumes'
                    : category === 'diffuser'
                      ? 'Diffusers'
                      : category === 'spray'
                        ? 'Sprays'
                        : 'Hair Care'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-1 sm:mb-2">
              Featured Collection
            </h2>
            <p className="text-center text-foreground/60 text-sm sm:text-base md:text-lg px-2">
              Handpicked favorites from our premium selection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/shop"
              className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
