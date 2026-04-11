import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let products;
    if (args.category) {
      products = await ctx.db
        .query("products")
        .filter((q) => q.eq(q.field("category"), args.category))
        .collect();
    } else {
      products = await ctx.db.query("products").collect();
    }
    return products;
  },
});

export const getBySlug = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

export const seed = mutation({
  args: {
    products: v.array(
      v.object({
        name: v.string(),
        slug: v.string(),
        category: v.string(),
        price: v.number(),
        images: v.array(v.string()),
        description: v.string(),
        stock: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Only seed if empty
    const existing = await ctx.db.query("products").first();
    if (existing) return "Already seeded";

    for (const product of args.products) {
      await ctx.db.insert("products", product);
    }
    return "Seeded successfully";
  },
});
