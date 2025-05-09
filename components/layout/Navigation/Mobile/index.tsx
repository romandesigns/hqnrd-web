import { ContactWidget } from "@/components/features";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Locale } from "@/i18n-config";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Mobile({ lang }: { lang: Locale }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="md:hidden">
        <DrawerHeader className="hidden">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="p-2 pt-0 h-[calc(100vh-56px)] flex items-center justify-center ">
          <ul className="bg-muted h-full w-full flex flex-col items-start justify-center gap-4 p-4 rounded-md">
            <li className="w-full">
              <DrawerClose asChild>
                <Button variant="flat" size="full">
                  Inicio
                </Button>
              </DrawerClose>
            </li>
            <li className="w-full">
              <DrawerClose asChild>
                <Button variant="flat" size="full">
                  Habitaciones
                </Button>
              </DrawerClose>
            </li>
            <li className="flex justify-center items-center w-full py-10">
              <DrawerClose asChild>
                <ContactWidget lang={lang} btnVariant="flat" />
              </DrawerClose>
            </li>
            <li className="w-full">
              <DrawerClose asChild>
                <Button variant="flat" size="full">
                  Cerrar Sesión
                </Button>
              </DrawerClose>
            </li>
            <li className="text-xs text-center w-full py-3">
              <span className="text-muted-foreground">
                No te has registrado?
              </span>{" "}
              <Link href={`/${lang}/registrar`} className={"underline"}>
                Crear cuenta
              </Link>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
