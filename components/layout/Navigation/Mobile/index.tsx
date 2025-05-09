import { Locale } from "@/i18n-config";
import { NavigationMenu } from "../Menu";
import { Button } from "@/components/ui/button";
import { ContactWidget } from "@/components/features";

export function Mobile({ lang }: { lang: Locale }) {
  return (
    <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex flex-col md:hidden">
      <NavigationMenu lang={lang} />
      <div className="p-2 pt-0 h-[calc(100vh-56px)]">
        <ul className="bg-muted h-full flex flex-col items-start justify-start gap-2 p-4 rounded-md">
          <li className="w-full">
            <Button variant="flat" size="full">
              Inicio
            </Button>
          </li>
          <li className="w-full">
            <Button variant="flat" size="full">
              Habitaciones
            </Button>
          </li>
          <li>
            <ContactWidget lang={lang} />
          </li>
        </ul>
      </div>
    </div>
  );
}
