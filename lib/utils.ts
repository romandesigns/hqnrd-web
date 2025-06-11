import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const removePluralSuffix = (word:string) => word.replace(/(?<!l)es$|s$/, "");

export const addPluralSuffix = (word: string) => {
  if (word.endsWith('z')) {
    // e.g. "luz" -> "luces"
    return word.slice(0, -1) + 'ces';
  } else if (word.endsWith('ción')) {
    // e.g. "información" -> "informaciones"
    return word + 'es';
  } else if (word.endsWith('s') || word.endsWith('es')) {
    // Already plural
    return word;
  } else if (word.endsWith('l')) {
    // leave as is for simple words like "hotel"
    return word;
  } else {
    // default simple rule
    return word + 's';
  }
};
