import { Logo, ModeToggle } from "@/components/features";
import { CartBookings } from "@/components/features/CartBookings";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Content } from "../..";
import { Mobile } from "../Mobile";

export function NavigationMenu({ lang }: { lang: Locale }) {
  return (
    <Content className="!py-2">
      <ul className="lg:py-1 rounded-bl-md rounded-br-md flex items-center justify-start gap-2 text-sm">
        <li className="mr-auto">
          <Logo height={20} width={20} />
        </li>
        <li className="hidden md:block">
          <Link href={`/${lang}`}>
            <Button variant="link" className="text-xs font-bold">
              Inicio
            </Button>
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href={`/${lang}/habitaciones`}>
            <Button variant="link" className="text-xs font-bold">
              Habitaciones
            </Button>
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href={`/${lang}/iniciar-sesion`}>
            <Button variant="secondary" className="text-xs font-bold">
              Cerrar Sesión
            </Button>
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href={`/${lang}/crear-cuenta`}>
            <Button variant="outline" className="text-xs font-bold">
              Crear Cuenta
            </Button>
          </Link>
        </li>
        <li>
          <ModeToggle btnVariant="secondary" />
        </li>
        <li>
          <CartBookings btnVariant="outline" />
        </li>
        <li className="block md:hidden">
          <Mobile lang={"en"} />
        </li>
      </ul>
    </Content>
  );
}
