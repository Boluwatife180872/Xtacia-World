'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Luxurious Hair Care',
    subtitle: 'Transform your locks with our premium hair products collection',
    cta: 'Explore Hair Products',
    imageSrc: '/images/hero-hair.jpg',
    imageAlt: 'Premium hair care products with elegant styling',
  },
  {
    id: 2,
    title: 'Enchanting Fragrances',
    subtitle: 'Discover captivating scents that define your elegance',
    cta: 'Browse Perfumes',
    imageSrc: '/images/hero-fragrance.jpeg',
    imageAlt: 'Luxury perfume bottles on a vanity',
  },
  {
    id: 3,
    title: 'Home Fragrance',
    subtitle: 'Create a sanctuary with our essential oil diffusers',
    cta: 'Shop Diffusers',
    imageSrc: '/images/hero-diffuser.jpg',
    imageAlt: 'Home diffuser with soft ambient lighting',
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const slide = slides[current];

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slides */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="absolute inset-0">
                <img
                  src={s.imageSrc}
                  alt={s.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/70" />
              </div>
              <div className="relative z-10 text-center max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">{s.title}</h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 line-clamp-2 sm:line-clamp-none">{s.subtitle}</p>
                <Link
                  href="/shop"
                  className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 sm:p-2.5 rounded-full shadow-md transition-all duration-200 touch-target lg:opacity-0 lg:hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-primary" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 sm:p-2.5 rounded-full shadow-md transition-all duration-200 touch-target lg:opacity-0 lg:hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5 text-primary" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-primary w-8' : 'bg-primary/40 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
