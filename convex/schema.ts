import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,

  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    price: v.number(),
    images: v.array(v.string()),
    description: v.string(),
    stock: v.number(),
  }).index("by_slug", ["slug"]),

  orders: defineTable({
    userId: v.union(v.id("users"), v.null()),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      }),
    ),
    total: v.number(),
    status: v.string(), // "pending", "confirmed", "shipped", etc.
    customerDetails: v.object({
      fullName: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
    }),
  }).index("by_user", ["userId"]),
});
