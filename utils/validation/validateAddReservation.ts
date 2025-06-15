import { z } from 'zod';

export const BookingSchema = z.object({
  adults: z
    .preprocess(val => {
      if (typeof val === 'string') return val.trim();
      return val;
    }, z.string())
    .transform(val => (val === '' ? 0 : Number(val)))
    .refine(val => !isNaN(val) && val >= 1, {
      message: 'You must select at least 1 adult',
    }),

  children: z
    .preprocess(val => {
      if (typeof val === 'string') return val.trim();
      return val;
    }, z.string())
    .transform(val => (val === '' ? undefined : Number(val)))
    .refine(val => val === undefined || (!isNaN(val) && val >= 0), {
      message: 'Children must be a valid number',
    }),

  checkIn: z
    .preprocess(val => {
      if (typeof val !== 'string' || val.trim() === '') return undefined;
      return val.trim();
    }, z.string())
    .transform(val => new Date(val))
    .refine(date => date instanceof Date && !isNaN(date.getTime()), {
      message: 'Invalid check-in date',
    }),

  checkOut: z
    .preprocess(val => {
      if (typeof val !== 'string' || val.trim() === '') return undefined;
      return val.trim();
    }, z.string())
    .transform(val => new Date(val))
    .refine(date => date instanceof Date && !isNaN(date.getTime()), {
      message: 'Invalid check-out date',
    }),

  message: z
    .preprocess(val => {
      if (val === null || val === undefined) return undefined;
      if (typeof val === 'string') return val.trim();
      return val;
    }, z.string().optional())
    .transform(val => (val === '' ? undefined : val)),

  unitNumber: z
    .preprocess(val => {
      if (typeof val === 'string') return val.trim();
      return val;
    }, z.string())
    .transform(val => Number(val))
    .refine(val => !isNaN(val), {
      message: 'Unit number must be a valid number',
    }),

  pricePerNight: z
    .preprocess(val => {
      if (typeof val === 'string') return val.trim();
      return val;
    }, z.string())
    .transform(val => Number(val))
    .refine(val => !isNaN(val), {
      message: 'Price per night must be a valid number',
    }),

  category: z
    .preprocess(val => (typeof val === 'string' ? val.trim() : ''), z.string())
    .refine(val => val.length >= 1, {
      message: 'Category is required',
    }),
});

export type BookingSchemaType = z.infer<typeof BookingSchema>;
