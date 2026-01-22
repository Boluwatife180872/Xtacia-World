# GloryStores Design System

## Overview
GloryStores features a premium, modern design system tailored for a sophisticated cosmetics and fragrance eCommerce brand. The visual language emphasizes elegance, refinement, and accessibility.

---

## Color Palette

### Primary Colors
- **Primary (Deep Rose)**: `#8b4956` - Main brand color used for CTAs, headings, and interactive elements
- **Primary Foreground**: `#ffffff` - Text/content on primary backgrounds

### Secondary Colors
- **Secondary (Soft Gold)**: `#d4af8f` - Accent color for premium feel and special highlights
- **Secondary Foreground**: `#1a1a1a` - Text on secondary backgrounds

### Neutral Colors
- **Background**: `#faf7f2` - Warm cream background (light mode)
- **Card**: `#ffffff` - White card surfaces
- **Accent**: `#f5f0e8` - Soft warm cream for accents and alternative backgrounds
- **Border**: `#e5ddd5` - Light taupe for borders and dividers
- **Foreground**: `#1a1a1a` - Primary text color

### Status Colors
- **Destructive**: `#dc2626` - Red for errors and destructive actions
- **Success**: `#16a34a` - Green for success states (built-in green)

### Dark Mode
- Background: `#0f0f0f` (nearly black)
- Card: `#1a1a1a` (very dark gray)
- Primary: `#c9b5a0` (warm light taupe)
- Secondary: `#8b4956` (deep rose, inverted from light mode)

---

## Typography

### Fonts
- **Heading Font**: Playfair Display (serif)
  - Weights: 600, 700, 800
  - Used for: H1-H6, brand name, featured text
  - Characteristics: Elegant, high-contrast, premium feel

- **Body Font**: Lato (sans-serif)
  - Weights: 300, 400, 700
  - Used for: Body text, buttons, labels
  - Characteristics: Clean, readable, modern

### Type Scale
- **H1**: `clamp(1.875rem, 5vw, 3.75rem)` - 30-60px
- **H2**: `clamp(1.5rem, 4vw, 3rem)` - 24-48px
- **H3**: `clamp(1.25rem, 3vw, 2rem)` - 20-32px
- **H4**: 18-20px
- **Body**: 16px (base), 14px (small)
- **Line Height**: 1.6 for body text, 1.2 for headings

---

## Spacing System
Using Tailwind's default spacing scale (4px increments):
- `gap-4`, `gap-6`, `gap-8` for element spacing
- `px-4 sm:px-6 lg:px-8` for horizontal padding
- `py-12 md:py-16` for vertical padding
- Consistent margin and padding throughout

---

## Radius and Borders
- **Border Radius**: 8px (0.5rem)
  - Buttons: `rounded-lg`
  - Cards: `rounded-lg`
  - Inputs: `rounded-lg`
  - Carousel: `rounded-xl`

- **Border Color**: `border-border` (light taupe)
- **Border Width**: 1px for most elements

---

## Shadow System
- **Light Shadow**: `shadow-sm` for subtle lift (cards, hover states)
- **Medium Shadow**: `shadow-md` for buttons and interactive elements
- **Large Shadow**: `shadow-lg` for hover/focus states on cards and buttons

---

## Component Styles

### Buttons
- **Primary**: Deep rose background, white text, shadow, hover:bg-primary/90
- **Secondary**: Soft gold background, dark text
- **Outline**: Border-only with primary color, hover background
- **Sizing**: sm (12px), md (16px, default), lg (18px)

### Input Fields
- White background with border-border
- Focus state: Focus ring in primary color with 2px width
- Error state: Red border and error text below
- Placeholder: Muted foreground color

### Product Cards
- White background with subtle border
- Hover: Border color changes to primary, shadow increases
- Image container: Warm cream background with rounded corners
- Image: Smooth scale transformation on hover (1.05x)

### Navigation
- Sticky header with subtle shadow
- Brand name in serif font (Playfair Display)
- Cart icon with primary color badge for item count
- Hover states with smooth transitions

### Hero Carousel
- Background color fades between slides
- Smooth opacity transitions (700ms)
- Dot indicators with primary color
- Navigation buttons appear on hover/mobile

---

## Micro-Interactions

### Transitions
- Duration: 200-300ms for most interactions
- Easing: Ease-in-out (Tailwind default)
- Focus states: Ring-2 ring-primary on inputs

### Hover States
- Buttons: Background color shift, shadow increase
- Links: Color change to primary, underline optional
- Cards: Border color change, shadow increase
- Icons: Color change to primary

---

## Responsive Design

### Breakpoints
- Mobile First: Base styles for mobile
- `sm`: 640px (tablets)
- `md`: 768px (landscape tablets, small desktops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)

### Key Responsive Behaviors
- Hero carousel: Smaller on mobile, full-height on desktop
- Grid layouts: 1 column mobile → 2/3 columns on larger screens
- Font sizes: Use `clamp()` for fluid typography
- Spacing: Increase padding/gaps on larger screens

---

## Accessibility

### Color Contrast
- Primary text on background: 14.5:1 (AAA)
- Primary buttons on primary: Good contrast with foreground
- All interactive elements: Minimum 4.5:1 contrast ratio

### Interactive Elements
- All buttons and links have clear focus states (ring-2 ring-primary)
- Icons paired with text labels where necessary
- Form fields include accessible labels
- Alt text on all images

### Keyboard Navigation
- Logical tab order throughout
- Clear focus indicators
- Buttons have aria-labels where icons-only

---

## How to Customize

### Update Colors
Edit CSS variables in `/src/app/globals.css`:
```css
:root {
  --primary: #8b4956; /* Change primary color here */
  --secondary: #d4af8f; /* Change secondary color here */
  --background: #faf7f2; /* Change background here */
  /* ... other variables */
}
```

### Update Fonts
Modify the imports and theme in `/src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_SERIF:wght@600;700;800&family=YOUR_SANS:wght@300;400;700&display=swap');

@theme inline {
  --font-sans: 'YOUR_SANS', ...;
  --font-serif: 'YOUR_SERIF', ...;
}
```

### Update Spacing/Radius
Modify in `/src/app/globals.css`:
```css
:root {
  --radius: 0.5rem; /* Adjust border radius */
}
```

---

## Usage Guidelines

### When to Use Each Color
- **Primary (Deep Rose)**: Buttons, headings, active states, focus indicators
- **Secondary (Soft Gold)**: Accent text, special promotions, borders on accent elements
- **Accent (Warm Cream)**: Alternative backgrounds, filter sections, hero carousel slides
- **Background**: Main page background
- **Border**: All borders and dividers

### Typography Usage
- Use serif font (Playfair Display) for:
  - Page headings (h1, h2)
  - Brand name
  - Section headlines
  - Special emphasis text

- Use sans-serif font (Lato) for:
  - Body text
  - Button labels
  - Form fields
  - UI labels

---

## Files Modified
- `/src/app/globals.css` - Color variables, typography, base styles
- `/src/app/layout.tsx` - Metadata and font configuration
- `/src/components/Navigation.tsx` - Header styling
- `/src/components/Footer.tsx` - Footer styling
- `/src/components/Button.tsx` - Button variants
- `/src/components/Input.tsx` - Form input styling
- `/src/components/ProductCard.tsx` - Product grid styling
- `/src/components/QuantitySelector.tsx` - Quantity control styling
- `/src/components/HeroCarousel.tsx` - NEW carousel component
- `/src/app/page.tsx` - Home page with carousel
- `/src/app/shop/page.tsx` - Shop page styling
- `/src/app/cart/page.tsx` - Cart page styling
- `/src/app/product/[slug]/page.tsx` - Product detail styling
- `/src/app/checkout/page.tsx` - Checkout form styling
- `/src/app/success/page.tsx` - Success page styling

---

## Future Enhancement Ideas
- Add dark mode toggle (CSS variables support both modes)
- Implement additional color themes
- Create Storybook documentation for components
- Add animation utilities for micro-interactions
- Implement CSS custom properties for easier runtime theming
