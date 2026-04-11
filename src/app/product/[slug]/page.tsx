'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { QuantitySelector } from '@/components/QuantitySelector';
import { Button } from '@/components/Button';
import { useCart } from '@/store/cart';
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const normalizedSlug = typeof slugParam === 'string' ? decodeURIComponent(slugParam) : '';
  
  const product = useQuery(api.products.getBySlug, { slug: normalizedSlug });
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);

  if (product === undefined) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-48 bg-accent rounded mb-4"></div>
          <p className="text-foreground/40">Loading product details...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Product not found</h1>
          <p className="text-foreground/60 mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/shop')}>Back to Shop</Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
    });
    toast.success(`${product.name} added to cart!`);
  };

  const inStock = product.stock > 0;

  return (
    <main className="bg-background py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.push('/shop')}
          className="text-primary/70 hover:text-primary mb-6 sm:mb-8 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base cursor-pointer"
        >
          ← Back to Shop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-accent rounded-lg overflow-hidden mb-3 sm:mb-4">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded border-2 overflow-hidden transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">{product.name}</h1>

            <div className="mb-3 sm:mb-4">
              <p className="text-foreground/60 capitalize text-xs sm:text-sm font-medium mb-1 sm:mb-2">Category: {product.category}</p>
            </div>

            <div className="mb-4 sm:mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-primary">₦{product.price.toLocaleString()}</p>
            </div>

            <div className="mb-4 sm:mb-6">
              <p className={`font-semibold text-sm sm:text-base ${inStock ? 'text-green-600' : 'text-destructive'}`}>
                {inStock ? `${product.stock} in stock` : 'Out of stock'}
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">Description</h3>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">{product.description}</p>
            </div>

            {/* Add to Cart Section */}
            {inStock && (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Quantity</label>
                  <QuantitySelector value={quantity} onChange={setQuantity} max={product.stock} />
                </div>

                <Button size="lg" onClick={handleAddToCart} className="w-full text-sm sm:text-base cursor-pointer">
                  Add to Cart
                </Button>
              </div>
            )}

            {!inStock && <Button disabled size="lg" className="w-full text-sm sm:text-base" variant="secondary">
              Out of Stock
            </Button>}
          </div>
        </div>
      </div>
    </main>
  );
}
