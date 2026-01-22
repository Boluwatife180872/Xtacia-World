'use client';

import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of Stock';
  const stockColor = product.stock > 0 ? 'text-green-600' : 'text-destructive';

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        <div className="aspect-square bg-accent overflow-hidden flex items-center justify-center">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
            {product.name}
          </h3>
          <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
            <span className={`text-xs font-semibold uppercase tracking-wide ${stockColor}`}>{stockStatus}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
