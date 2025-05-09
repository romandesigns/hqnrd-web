import { Locale } from "@/i18n-config";
import { NavigationMenu } from "../Menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { ContactWidget } from "@/components/features";
import Link from "next/link";

export function Mobile({ lang }: { lang: Locale }) {
  return (
    <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex flex-col md:hidden">
      <NavigationMenu lang={lang} />
      <div className="p-2 pt-0 h-[calc(100vh-56px)] flex items-center justify-center ">
        <ul className="bg-muted h-full w-full flex flex-col items-start justify-center gap-4 p-4 rounded-md">
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
          <li className="flex justify-center items-center w-full py-10">
            <ContactWidget lang={lang} btnVariant="flat" />
          </li>
          <li className="w-full">
            <Button variant="flat" size="full">
              Cerrar Sesión
            </Button>
          </li>
          <li className="text-xs text-center w-full py-3">
            <span className="text-muted-foreground">No te has registrado?</span>{" "}
            <Link href="/register" className={"underline"}>
              Crear cuenta
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
