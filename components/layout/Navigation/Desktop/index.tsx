import { Locale } from "@/i18n-config";
import { NavigationMenu } from "../Menu";

export function Desktop({ lang }: { lang: Locale }) {
  return <NavigationMenu lang={lang} />;
}
