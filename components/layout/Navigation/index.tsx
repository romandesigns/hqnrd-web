import React from "react";
import { Desktop } from "./Desktop";

export default function Navigation({ className }: { className?: string }) {
  return (
    <nav className={className}>
      {/* Navigation */}
      <Desktop />
      <p>Navigation</p>
    </nav>
  );
}
