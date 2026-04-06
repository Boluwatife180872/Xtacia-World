'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useCart } from '@/store/cart';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { checkoutSchema, type CheckoutFormData } from '@/utils/checkout';

export default function Checkout() {
  const router = useRouter();
  const items = useCart((state) => state.items);
  const total = useCart((state) => state.getTotal());
  const clearCart = useCart((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  if (items.length === 0) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Checkout</h1>
          <p className="text-foreground/60 mb-8">Your cart is empty. Add items before checking out.</p>
          <Button onClick={() => router.push('/shop')}>Back to Shop</Button>
        </div>
      </main>
    );
  }

  const onSubmit = async (data: CheckoutFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store order data in sessionStorage for the success page
    const order = {
      items,
      customer: data,
      total,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem('lastOrder', JSON.stringify(order));
    clearCart();
    toast.success('Order placed successfully!');
    router.push('/success');
  };

  return (
    <main className="bg-background py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-12">Complete Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-lg p-4 sm:p-8 border border-border">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Delivery Information</h2>

              <div className="space-y-4 sm:space-y-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  {...register('fullName')}
                  error={errors.fullName?.message}
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />

                <Input
                  label="Phone Number"
                  placeholder="+234 800 123 4567"
                  {...register('phone')}
                  error={errors.phone?.message}
                />

                <Input
                  label="Delivery Address"
                  placeholder="123 Main Street, Lagos, Nigeria"
                  {...register('address')}
                  error={errors.address?.message}
                />
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <Button type="submit" size="lg" className="w-full text-sm sm:text-base cursor-pointer" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-accent rounded-lg p-4 sm:p-6 sticky top-20 border border-border">
              <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Order Summary</h2>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm sm:text-base gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-foreground/60 text-xs sm:text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-primary shrink-0">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-semibold text-foreground">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-foreground/70">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-base sm:text-lg font-bold text-primary">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>

              <p className="text-xs sm:text-sm text-foreground/70 mt-3 sm:mt-4">
                <span className="font-semibold">Note:</span> Payment will be completed after order confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
