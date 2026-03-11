# 🛒 Xtacia World

[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State_Management-764ABC?style=for-the-badge&logo=react)](https://github.com/pmndrs/zustand)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Xtacia World** is a premium, high-fidelity eCommerce platform specifically designed for luxury cosmetics and lifestyle brands. Built with the cutting-edge **Next.js 16** and **React 19**, it offers a seamless, blazingly fast shopping experience with a focus on sophisticated aesthetics and intuitive UX.

---

## ✨ Key Features

- 💎 **Premium Design System**: Fully responsive "Deep Rose" and "Soft Gold" aesthetic.
- 🛍️ **Smart Shopping Cart**: Real-time updates with persistent local storage via Zustand.
- ⚡ **Dynamic Product Filters**: Instant category and search filtering for large catalogs.
- 📱 **Mobile-First UX**: Perfectly optimized for all devices, from mobile to ultra-wide displays.
- 🌗 **Elegant Dark Mode**: Native support with meticulously chosen color inversions.
- ✅ **Secure Checkout**: Seamless multi-step form validation with React Hook Form & Zod.
- 🚀 **Performance Optimized**: Leveraging Next.js 16's latest features for minimal bundle size and maximal SEO.

---

## 🎨 Design Philosophy

Xtacia World is built with a custom-engineered design system that prioritizes:
- **Tone**: Elegant, sophisticated, and trustworthy.
- **Palette**: Warm Cream, Deep Rose, and Soft Gold.
- **Typography**: Refined serif for headings (Playfair Display) and modern sans-serif for body (Lato).

---

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19.2 (Concurrent Mode)
- **Styling**: Tailwind CSS v4 + `tailwindcss-animate`
- **State**: Zustand (Persist Middleware)

### Forms & Validation
- **Forms**: React Hook Form
- **Validation**: Zod (Schema-based)
- **Notifications**: Sonner

### Development
- **Language**: TypeScript
- **Icons**: Lucide React
- **Linting**: ESLint

---

## 📂 Project Architecture

```bash
src/
├── app/               # ⚡ Next.js App Router (Pages & Layouts)
│   ├── shop/          # Product listing with advanced filters
│   ├── product/       # Dynamic product detail pages
│   ├── cart/          # Unified shopping cart view
│   ├── checkout/      # Multi-step checkout process
│   └── success/       # Order confirmation experience
├── components/        # 🧩 Reusable, atomic UI components
│   ├── HeroCarousel.tsx # Premium homepage experience
│   ├── ProductCard.tsx  # Dynamic interactive cards
│   └── ...
├── store/             # 🧠 Global state (Zustand)
├── data/              # 📦 Mock data & product catalogs
├── types/             # 🏷️ TypeScript definitions
└── utils/             # 🛠️ Helpers & Zod schemas
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Xtacia-World
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Launch the development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the site in action.

### Production Build

```bash
npm run build
npm start
```

---

## 🛠️ Customization

### Theming
The entire design is tokenized. You can easily switch the brand identity in `src/app/globals.css`:

```css
:root {
  --primary: #8b4956;    /* Main brand accent */
  --secondary: #d4af8f;  /* Secondary accent */
  --background: #faf7f2; /* Page background */
}
```

### Products
Manage your inventory directly in `src/data/products.ts`. Adding a new product is as simple as updating a JSON-like object.

---

## 🔮 Roadmap

- [ ] **Auth**: User accounts & order history.
- [ ] **Payments**: Full Paystack/Stripe integration (API scaffolding ready).
- [ ] **Admin**: Content management dashboard.
- [ ] **Wishlist**: Save favorite items for later.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🤝 Support

For technical issues or feature requests, please open an issue or contact the development team.

Built with ❤️ for **Xtacia World**.
