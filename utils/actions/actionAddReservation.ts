'use server';

import { redirect } from 'next/navigation';
import { BookingSchema, BookingSchemaType } from '../validation/validateAddReservation';
import { parseFormData, serializeErrorsAndDefaults } from '@/helpers/formParser';

const addReservatation = async (formData: FormData) => {
  const lang = formData.get('lang')?.toString() || 'en';
  const slug = formData.get('slug')?.toString() || '';
  const unitNumber = formData.get('unitNumber')?.toString() || '';

  const { success, data, errors, validData } = parseFormData(BookingSchema, formData);

  if (!success) {
    const queryString = serializeErrorsAndDefaults(errors ?? {}, validData ?? {});
    redirect(`/${lang}/habitaciones/${slug}/${unitNumber}?${queryString}`);
  }

  const parsedData: BookingSchemaType = data;
  console.log('Booking data:', parsedData);

  // Save logic here

  redirect(`/${lang}/habitaciones/${slug}/${parsedData.unitNumber}?success=true`);
};

export { addReservatation };
