"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Package, ChevronRight, Calendar, CreditCard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function OrdersPage() {
  const orders = useQuery(api.orders.getMyOrders);

  if (orders === undefined) {
    return (
      <main className="bg-background py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 bg-accent rounded mx-auto"></div>
            <div className="h-24 bg-accent rounded"></div>
            <div className="h-24 bg-accent rounded"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-12">
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={32} className="text-primary/40" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">No orders yet</h2>
            <p className="text-foreground/60 mb-8 max-w-sm mx-auto">
              You haven't placed any orders with Xtacia World yet. Start exploring our premium collection!
            </p>
            <Link href="/shop">
              <Button className="px-8">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-accent/30 p-4 sm:p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-1">
                        Order Placed
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Calendar size={14} />
                        {new Date(order._creationTime).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-1">
                        Total
                      </p>
                      <div className="flex items-center gap-2 text-sm font-bold text-primary">
                        <CreditCard size={14} />
                        ₦{order.total.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-1">
                        Status
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-foreground/40 font-mono">
                    ID: {order._id.slice(-8).toUpperCase()}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col gap-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-accent rounded-lg overflow-hidden shrink-0 border border-border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-semibold text-primary truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-foreground/60">
                            Qty: {item.quantity} × ₦{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
