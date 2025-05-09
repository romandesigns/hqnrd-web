import React from "react";
import { Desktop } from "./Desktop";
import Container from "../Container";
import { clsx } from "clsx";
import { Mobile } from "./Mobile";

export default function Navigation({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  return (
    <nav className={clsx("sticky top-0 z-50 bg-background", className)}>
      <Container>
        {/* Navigation */}
        <Desktop lang={lang} />
      </Container>
    </nav>
  );
}
