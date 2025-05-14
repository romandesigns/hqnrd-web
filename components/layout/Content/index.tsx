import { clsx } from "clsx";
import React, { ReactNode } from "react";

export default function Container({
  wrapperClass,
  children,
}: {
  containerClass?: string;
  wrapperClass?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={clsx(
        "w-full max-w-[var(--max-w-container)] mx-auto p-2 py-10",
        wrapperClass
      )}
    >
      {children}
    </section>
  );
}
