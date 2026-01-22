import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{label}</label>}
        <input
          ref={ref}
          className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-base border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${error ? 'border-destructive focus:ring-destructive' : ''} ${className}`}
          {...props}
        />
        {error && <p className="text-destructive text-xs sm:text-sm mt-1 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
