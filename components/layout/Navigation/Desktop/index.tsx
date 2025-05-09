import React from "react";
import Container from "../../Container";
import { LocaleDialog, Logo, ModeToggle } from "@/components/features";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { buttonVariants } from "@/components/ui/button";
import { CartBookings } from "@/components/features/CartBookings";

export function Desktop({ lang }: { lang: Locale }) {
  return (
    <Container>
      <ul className="p-4 py-3 rounded-bl-md rounded-br-md flex items-center justify-start gap-2 text-sm">
        <li className="mr-auto">
          <Logo />
        </li>
        <li>
          <Link
            href={`/${lang}`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/habitaciones`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Habitaciones
          </Link>
        </li>
        <li>
          <CartBookings btnVariant="outline" />
        </li>
        <li>
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
      </ul>
    </Container>
  );
}
