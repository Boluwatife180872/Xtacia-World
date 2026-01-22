import { z } from 'zod';

export const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
