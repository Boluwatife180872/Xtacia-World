import React from "react";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "@/app/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Xtacia World - Premium Beauty & Fragrance",
  description:
    "Discover our curated collection of premium cosmetics, hair care, perfumes, and home fragrance diffusers.",
  keywords:
    "cosmetics, beauty, hair care, perfume, fragrance, diffuser, skincare",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lato:wght@300;400;700&display=swap"
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ConvexAuthNextjsServerProvider>
          <Providers>
            <Navigation />
            <div className="grow">{children}</div>
            <Footer />
            <Toaster />
          </Providers>
        </ConvexAuthNextjsServerProvider>
      </body>
    </html>
  );
}
