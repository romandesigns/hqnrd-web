import React from "react";
import { Desktop } from "./Desktop";

export default function Navigation({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  return (
    <nav className={className}>
      {/* Navigation */}
      <Desktop lang={lang} />
      <p>Navigation</p>
    </nav>
  );
}
