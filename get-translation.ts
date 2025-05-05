import "server-only";
import { i18n, Locale } from "./i18n-config";

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("./translations/en.json").then((module) => module.default),
  es: () => import("./translations/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries[i18n.defaultLocale]();
};
