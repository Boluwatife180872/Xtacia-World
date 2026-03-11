# How to Customize Xtacia World Colors & Fonts

This guide explains how to modify colors, fonts, and design elements without touching component code.

---

## Quick Color Change

All colors are defined as CSS variables. To change the entire color scheme:

### Step 1: Open `/src/app/globals.css`

### Step 2: Find the `:root` section (lines 7-43)

### Step 3: Update color values

```css
:root {
  /* Change these 3 colors to customize the entire site */
  --primary: #8b4956; /* Main brand color - buttons, headings, links */
  --secondary: #d4af8f; /* Accent color - special highlights */
  --background: #faf7f2; /* Page background color */
  --card: #ffffff; /* Card background color */
  --accent: #f5f0e8; /* Alternative section background */
  --border: #e5ddd5; /* Border and divider color */
  --foreground: #1a1a1a; /* Main text color */
}
```

### Step 4: Update dark mode colors (lines 46-78)

If you want dark mode to work, update the `.dark` section with inverted colors:

```css
.dark {
  --primary: #c9b5a0; /* Light version of primary */
  --secondary: #8b4956; /* Dark version of secondary */
  --background: #0f0f0f; /* Very dark background */
  --foreground: #f5f0e8; /* Light text for dark mode */
  /* ... other dark mode colors */
}
```

---

## Color Palette Recommendations

### Professional Cosmetics (Current - Deep Rose)

```
Primary: #8b4956 (Deep Rose)
Secondary: #d4af8f (Soft Gold)
Perfect for: Premium, sophisticated cosmetics brands
```

### Luxury Minimalist (Clean)

```
Primary: #2a2a2a (Deep Charcoal)
Secondary: #d4af8f (Gold)
Background: #ffffff (Pure White)
```

### Modern & Bold (Teal)

```
Primary: #0d9488 (Teal)
Secondary: #f59e0b (Amber)
Background: #f8fafc (Slate)
```

### Soft & Feminine (Blush)

```
Primary: #e879a8 (Rose Pink)
Secondary: #fbbf24 (Warm Amber)
Background: #fef3f2 (Blush)
```

### Dark & Sophisticated (Charcoal)

```
Primary: #1f2937 (Dark Gray)
Secondary: #7c3aed (Purple)
Background: #ffffff (White)
```

---

## Changing Fonts

### Step 1: Open `/src/app/globals.css`

### Step 2: Find the Google Fonts import (line 3)

Current:

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lato:wght@300;400;700&display=swap");
```

### Step 3: Replace with your chosen fonts

**Option A: Keep serif + sans-serif combo**

Example with different fonts:

```css
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;800&family=Inter:wght@300;400;700&display=swap");
```

**Popular Font Combinations:**

1. **Elegant (Current)**
   - Serif: Playfair Display
   - Sans: Lato

2. **Modern Clean**
   - Serif: EB Garamond
   - Sans: Inter

3. **Sophisticated**
   - Serif: Cormorant Garamond
   - Sans: Poppins

4. **Editorial**
   - Serif: Crimson Text
   - Sans: Work Sans

5. **Luxury**
   - Serif: Bodoni Moda
   - Sans: Montserrat

### Step 4: Update font names in @theme section (lines 82-84)

Replace:

```css
@theme inline {
  --font-sans: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
```

With your new fonts:

```css
@theme inline {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'EB Garamond', Georgia, serif;
```

---

## Adjusting Border Radius

All components use `--radius: 0.5rem` (8px) by default.

To make everything more rounded:

```css
:root {
  --radius: 1rem; /* 16px - very rounded */
}
```

To make everything more square:

```css
:root {
  --radius: 0.25rem; /* 4px - subtle rounding */
}
```

---

## Spacing Customization

Spacing uses Tailwind's default 4px increments. To increase overall spacing:

1. Open components and change `gap-4` → `gap-6` or `gap-8`
2. Change `px-4` → `px-6` or `px-8`
3. Change `py-12` → `py-16` or `py-20`

Example in `/src/app/page.tsx`:

```jsx
<section className="py-16 md:py-20">  {/* Increased from py-12 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

## Shadow Customization

The design uses Tailwind's shadow utilities:

- `shadow-sm` - Subtle shadows
- `shadow-md` - Medium shadows (buttons)
- `shadow-lg` - Large shadows (hover states)

To adjust, modify Tailwind config or inline in components:

```jsx
<div className="shadow-lg">  {/* Larger shadow */}
```

---

## Complete Customization Example

Here's a full example changing the site to a teal/gold luxury theme:

### In `/src/app/globals.css`, update :root:

```css
:root {
  --background: #f0faf8; /* Light teal tint */
  --foreground: #0d3d3a; /* Deep teal text */
  --card: #ffffff;
  --card-foreground: #0d3d3a;
  --primary: #0d9488; /* Bright teal */
  --primary-foreground: #ffffff;
  --secondary: #f59e0b; /* Amber gold */
  --secondary-foreground: #0d3d3a;
  --accent: #f0faf8; /* Light teal */
  --accent-foreground: #0d9488;
  --border: #c7e9e6; /* Pale teal */
  /* ... rest of variables */
}
```

### In `/src/app/globals.css`, update .dark:

```css
.dark {
  --background: #0a1f1d;
  --foreground: #e0f2f0;
  --primary: #14b8a6; /* Lighter teal for dark mode */
  --secondary: #fbbf24; /* Lighter gold for dark mode */
  /* ... rest of variables */
}
```

### In `/src/app/globals.css`, update fonts (if desired):

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Poppins:wght@300;400;700&display=swap');

@theme inline {
  --font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
```

That's it! The entire site is now teal + gold with new fonts. No component changes needed.

---

## Testing Your Changes

1. Save changes to `/src/app/globals.css`
2. The site auto-reloads (if in dev mode)
3. Check all pages:
   - Homepage (hero, categories, products)
   - Shop page (filters, products)
   - Product detail
   - Cart
   - Checkout
   - Success page
4. Test dark mode (if toggled)

---

## Useful Resources

### Color Tools

- **Color Picker**: https://colorpicker.com/
- **Palette Generator**: https://coolors.co/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Blindness Simulator**: https://www.color-blindness.com/coblis-color-blindness-simulator/

### Google Fonts Combinations

- https://fonts.google.com/
- https://www.fontpair.co/ (curated pairings)

### Design Inspiration

- https://dribbble.com/
- https://www.behance.net/
- https://www.awwwards.com/

---

## Need More Help?

### To change text on specific pages:

Edit the component files (e.g., `/src/components/Navigation.tsx` for header text)

### To change product data:

Edit `/src/data/products.ts`

### To change page layouts:

Edit the page files (e.g., `/src/app/page.tsx` for homepage)

### To add new sections:

Create new component in `/src/components/` and import in the relevant page

All styling uses CSS variables and Tailwind classes, making changes straightforward and maintainable!
