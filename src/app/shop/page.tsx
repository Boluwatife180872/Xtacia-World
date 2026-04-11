"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/Input";
import { categories } from "@/data/products";
import { Suspense } from "react";
import Loading from "./loading";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Shop() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category"),
  );

  const products = useQuery(api.products.list, {});

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  if (products === undefined) {
    return (
      <main className="bg-background">
        <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              Our Complete Collection
            </h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg px-2">
              Discover our carefully curated selection of premium beauty products
            </p>
          </div>
        </section>
        <div className="py-20 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-accent rounded mb-4"></div>
            <p className="text-foreground/40">Loading your collection...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-primary-foreground">
            Our Complete Collection
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg px-2">
            Discover our carefully curated selection of premium beauty products
          </p>
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
                  <h3 className="font-semibold text-base sm:text-lg text-primary mb-3 sm:mb-4">
                    Find Products
                  </h3>
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="sticky top-20">
                  <h3 className="font-semibold text-base sm:text-lg text-primary mb-3 sm:mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2 bg-accent rounded-lg p-3 sm:p-4">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`cursor-pointer block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                        selectedCategory === null
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-card/50"
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
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-foreground hover:bg-card/50"
                        }`}
                      >
                        {category === "perfume"
                          ? "Perfumes"
                          : category === "diffuser"
                            ? "Diffusers"
                            : category === "spray"
                              ? "Sprays"
                              : "Hair Care"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20 min-h-[40vh] flex flex-col items-center justify-center">
                    <p className="text-foreground/60 text-sm sm:text-base md:text-lg px-2 mb-4">
                      No products found matching your search.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                      className="text-primary hover:text-primary/80 transition-colors font-semibold text-sm sm:text-base border-b-2 border-primary/20 hover:border-primary"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={{ ...product, id: product._id } as any} />
                      ))}
                    </div>
                    <p className="text-foreground/60 text-xs sm:text-sm mt-8 font-medium">
                      Showing {filteredProducts.length} of {products.length}{" "}
                      products
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
