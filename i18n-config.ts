import { hqnrd } from "./constants";

export const i18n = {
  defaultLocale: hqnrd.locales[1],
  locales: hqnrd.locales,
} as const;

export type Locale = (typeof i18n)["locales"][number];
