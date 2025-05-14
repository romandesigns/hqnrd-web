import { clsx } from "clsx";
import React, { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <section className={clsx("py-10", className)}>{children}</section>;
}
