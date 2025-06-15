'use server';

import { BookingSchema, BookingSchemaType } from '../validation/validateAddReservation';
import { parseFormData } from '@/helpers/formParser';

type ActionResult =
  | { success: true; data: BookingSchemaType }
  | { success: false; errors: Record<string, string> };

const addReservatation = async (formData: FormData): Promise<ActionResult> => {
  const { success, data, errors } = parseFormData(BookingSchema, formData);

  if (!success) {
    return { success: false, errors: errors ?? {} };
  }

  const parsedData: BookingSchemaType = data;
  console.log('Booking data:', parsedData);

  // Save logic here

  return { success: true, data: parsedData };
};

export { addReservatation };
