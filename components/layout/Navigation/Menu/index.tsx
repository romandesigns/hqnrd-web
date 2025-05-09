import { Logo, ModeToggle } from "@/components/features";
import { CartBookings } from "@/components/features/CartBookings";
import { Button, buttonVariants } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { Menu } from "lucide-react";
import Link from "next/link";
import Container from "../../Container";

export function NavigationMenu({ lang }: { lang: Locale }) {
  return (
    <Container>
      <ul className="p-4 py-3 rounded-bl-md rounded-br-md flex items-center justify-start gap-2 text-sm">
        <li className="mr-auto">
          <Logo height={20} width={20} />
        </li>
        <li className="hidden md:block">
          <Link
            href={`/${lang}`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Inicio
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href={`/${lang}/habitaciones`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Habitaciones
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href={`/${lang}/signin`}
            className={buttonVariants({ variant: "secondary" })}
          >
            Cerrar Sesión
          </Link>
        </li>
        <li>
          <ModeToggle btnVariant="secondary" />
        </li>
        <li>
          <CartBookings btnVariant="outline" />
        </li>

        <li className="block md:hidden">
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </li>
      </ul>
    </Container>
  );
}
