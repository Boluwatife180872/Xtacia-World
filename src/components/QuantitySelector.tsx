'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (quantity: number) => void;
  max?: number;
  min?: number;
}

export const QuantitySelector = ({ value, onChange, max = 99, min = 1 }: QuantitySelectorProps) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg w-fit bg-accent touch-target">
      <button
        onClick={handleDecrement}
        disabled={value === min}
        className="p-2 sm:p-2.5 hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors touch-target"
        aria-label="Decrease quantity"
      >
        <Minus size={16} className="sm:w-4 sm:h-4 text-primary" />
      </button>
      <span className="px-3 sm:px-4 font-semibold text-center min-w-[36px] sm:min-w-[40px] text-foreground text-sm sm:text-base">{value}</span>
      <button
        onClick={handleIncrement}
        disabled={value === max}
        className="p-2 sm:p-2.5 hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors touch-target"
        aria-label="Increase quantity"
      >
        <Plus size={16} className="sm:w-4 sm:h-4 text-primary" />
      </button>
    </div>
  );
};
