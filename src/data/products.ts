export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'hair' | 'perfume' | 'diffuser' | 'spray';
  price: number;
  images: string[];
  description: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'argan-oil-hair-serum',
    name: 'Argan Oil Hair Serum',
    category: 'hair',
    price: 4500,
    images: ['/images/product-1.jpg', '/images/product-1-alt.jpg'],
    description: 'Nourishing argan oil serum for shiny, silky hair. Perfect for all hair types.',
    stock: 25,
  },
  {
    id: '2',
    slug: 'deep-moisture-conditioner',
    name: 'Deep Moisture Conditioner',
    category: 'hair',
    price: 3800,
    images: ['/images/product-2.jpg'],
    description: 'Rich conditioning formula that restores moisture and elasticity to dry hair.',
    stock: 18,
  },
  {
    id: '3',
    slug: 'anti-frizz-hair-spray',
    name: 'Anti-Frizz Hair Spray',
    category: 'spray',
    price: 2900,
    images: ['/images/product-3.jpg'],
    description: 'Lightweight spray that tames frizz and adds shine without heaviness.',
    stock: 32,
  },
  {
    id: '4',
    slug: 'silk-protein-conditioner',
    name: 'Silk Protein Conditioner',
    category: 'hair',
    price: 3500,
    images: ['/images/product-4.jpg'],
    description: 'Infused with silk proteins for smooth, glossy hair.',
    stock: 20,
  },
  {
    id: '5',
    slug: 'rose-garden-perfume',
    name: 'Rose Garden Perfume',
    category: 'perfume',
    price: 8500,
    images: ['/images/product-5.jpg'],
    description: 'Elegant floral perfume with notes of damascus rose, jasmine, and musk.',
    stock: 15,
  },
  {
    id: '6',
    slug: 'midnight-noir-perfume',
    name: 'Midnight Noir Perfume',
    category: 'perfume',
    price: 9200,
    images: ['/images/product-6.jpg'],
    description: 'Mysterious and sensual fragrance with deep amber and vanilla notes.',
    stock: 12,
  },
  {
    id: '7',
    slug: 'citrus-breeze-perfume',
    name: 'Citrus Breeze Perfume',
    category: 'perfume',
    price: 7800,
    images: ['/images/product-7.jpg'],
    description: 'Fresh and uplifting scent with notes of lemon, bergamot, and white tea.',
    stock: 22,
  },
  {
    id: '8',
    slug: 'lavender-essential-diffuser',
    name: 'Lavender Essential Diffuser',
    category: 'diffuser',
    price: 5600,
    images: ['/images/product-8.jpg'],
    description: 'Ultrasonic diffuser with pure lavender essential oil for relaxation.',
    stock: 28,
  },
  {
    id: '9',
    slug: 'eucalyptus-mint-diffuser',
    name: 'Eucalyptus Mint Diffuser',
    category: 'diffuser',
    price: 5400,
    images: ['/images/product-9.jpg'],
    description: 'Invigorating blend of eucalyptus and peppermint to refresh any space.',
    stock: 19,
  },
  {
    id: '10',
    slug: 'volumizing-hair-spray',
    name: 'Volumizing Hair Spray',
    category: 'spray',
    price: 3200,
    images: ['/images/product-10.jpg'],
    description: 'Adds instant volume and texture to fine, limp hair.',
    stock: 30,
  },
  {
    id: '11',
    slug: 'ocean-breeze-diffuser',
    name: 'Ocean Breeze Diffuser',
    category: 'diffuser',
    price: 6000,
    images: ['/images/product-11.jpg'],
    description: 'Coastal-inspired diffuser with sea salt and driftwood notes.',
    stock: 14,
  },
  {
    id: '12',
    slug: 'heat-protection-spray',
    name: 'Heat Protection Spray',
    category: 'spray',
    price: 3500,
    images: ['/images/product-12.jpg'],
    description: 'Protects hair from damage during blow-drying and styling.',
    stock: 26,
  },
];

export const categories = ['hair', 'perfume', 'diffuser', 'spray'] as const;
