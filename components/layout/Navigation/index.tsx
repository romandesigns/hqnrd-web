import { clsx } from "clsx";
import { Content } from "..";
import { Desktop } from "./Desktop";

export default function Navigation({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-2xl",
        className
      )}
    >
      {/* Navigation */}
      <Desktop lang={lang} />
    </nav>
  );
}
