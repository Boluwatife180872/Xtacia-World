'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Order } from '@/types';

export default function Success() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const storedOrder = sessionStorage.getItem('lastOrder');
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  return (
    <main className="bg-background py-8 sm:py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-6 sm:p-8 md:p-12 text-center border border-border">
          <CheckCircle size={56} className="sm:w-18 sm:h-18 mx-auto text-green-600 mb-4 sm:mb-6" />

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">Order Confirmed!</h1>
          <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">Thank you for shopping with GloryStores. Your order is being prepared for shipment.</p>

          {order && (
            <div className="bg-accent rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-left border border-border">
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Order Summary</h2>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm sm:text-base gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{item.name}</p>
                      <p className="text-foreground/60 text-xs sm:text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-primary shrink-0">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-semibold text-foreground">₦{order.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-foreground/70">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-bold mt-3 sm:mt-4">
                  <span>Total</span>
                  <span>₦{order.total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                <p className="text-xs sm:text-sm text-foreground/70">
                  <span className="font-semibold">Delivery To:</span>
                  <br />
                  {order.customer.fullName}
                  <br />
                  {order.customer.address}
                  <br />
                  {order.customer.email} | {order.customer.phone}
                </p>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
            <p className="text-blue-900 font-semibold text-sm sm:text-base">⏱️ Payment Integration</p>
            <p className="text-blue-700 text-xs sm:text-sm mt-1">
              Payment will be completed after order confirmation. Paystack integration coming soon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/shop">
              <Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">Continue Shopping</Button>
            </Link>
            <Link href="/">
              <Button className="w-full sm:w-auto text-sm sm:text-base">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
