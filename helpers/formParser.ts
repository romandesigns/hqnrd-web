import { z } from 'zod';

// Main form parser
export function parseFormData<T extends z.ZodTypeAny>(schema: T, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    const normalizedErrors: Record<string, string[]> = {};
    for (const [field, messages] of Object.entries(fieldErrors)) {
      if (messages) {
        normalizedErrors[field] = messages;
      }
    }

    const validData: Partial<z.infer<T>> = {};
    for (const key in rawData) {
      if (!fieldErrors[key as keyof typeof fieldErrors]) {
        (validData as Record<string, any>)[key] = rawData[key];
      }
    }

    return { success: false, errors: normalizedErrors, validData };
  }

  return { success: true, data: parsed.data };
}

// Serializer for URL query
export function serializeErrorsAndDefaults(
  errors: Record<string, string[]>,
  validData: Record<string, any>
) {
  const params = new URLSearchParams();

  Object.entries(errors).forEach(([field, messages]) => {
    if (messages?.length) {
      params.append(`error_${field}`, messages[0]);
    }
  });

  Object.entries(validData).forEach(([field, value]) => {
    if (value !== undefined && value !== null) {
      params.append(`default_${field}`, String(value));
    }
  });

  return params.toString();
}
