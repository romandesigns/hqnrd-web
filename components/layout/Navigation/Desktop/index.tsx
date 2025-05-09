import React from "react";
import { LocaleDialog, Logo, ModeToggle } from "@/components/features";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { buttonVariants } from "@/components/ui/button";
import { CartBookings } from "@/components/features/CartBookings";
import { NavigationMenu } from "../Menu";

export function Desktop({ lang }: { lang: Locale }) {
  return <NavigationMenu lang={lang} />;
}
