'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/Input';
import { products, categories } from '@/data/products';
import { Suspense } from 'react';
import Loading from './loading';

export default function Shop() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">Our Complete Collection</h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg px-2">Discover our carefully curated selection of premium beauty products</p>
        </div>
      </section>

      {/* Filters and Products */}
      <Suspense fallback={<Loading />}>
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Search */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-semibold text-base sm:text-lg text-primary mb-3 sm:mb-4">Find Products</h3>
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="sticky top-20">
                  <h3 className="font-semibold text-base sm:text-lg text-primary mb-3 sm:mb-4">Categories</h3>
                  <div className="space-y-2 bg-accent rounded-lg p-3 sm:p-4">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`cursor-pointer block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                        selectedCategory === null
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-foreground hover:bg-card/50'
                      }`}
                    >
                      All Products
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`cursor-pointer block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 capitalize font-medium text-sm sm:text-base ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'text-foreground hover:bg-card/50'
                        }`}
                      >
                        {category === 'perfume'
                          ? 'Perfumes'
                          : category === 'diffuser'
                            ? 'Diffusers'
                            : category === 'spray'
                              ? 'Sprays'
                              : 'Hair Care'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-foreground/60 text-sm sm:text-base md:text-lg px-2">No products found matching your search.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}
                      className="mt-4 text-primary hover:underline font-medium text-sm sm:text-base"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                    <p className="text-foreground/60 text-xs sm:text-sm mt-8 font-medium">
                      Showing {filteredProducts.length} of {products.length} products
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}
