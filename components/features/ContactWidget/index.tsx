import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/components/features/Menu";
import { LocaleDialog } from "../LocaleDialog";
import { ExternalLink } from "../ExternalLink";
import { MessageCircle } from "lucide-react";
import { hqnrd } from "@/constants";

export function ContactWidget({
  lang,
  direction = "horizontal",
  showBorders,
  className,
  btnVariant,
  btnClassNames,
}: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
  className?: string;
  btnVariant?: "default" | "ghost" | "outline";
  btnClassNames?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
      <ul
        className={cn(
          `flex items-center justify-center gap-2 space-x-0.5 px-2 ${
            direction === "horizontal" ? "flex-row" : "flex-col"
          }`
        )}
      >
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
            asChild
          >
            <ExternalLink href={hqnrd.contact.googleMap}>
              <MessageCircle />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExternalLink href={hqnrd.contact.whatsapp}>
              <MessageCircle />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <LocaleDialog
            lang={lang}
            btnVariant={btnVariant}
            className={cn(btnClassNames)}
          />
        </MenuItem>
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExternalLink href={hqnrd.contact.email}>
              <MessageCircle />
            </ExternalLink>
          </Button>
        </MenuItem>
      </ul>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
    </div>
  );
}
