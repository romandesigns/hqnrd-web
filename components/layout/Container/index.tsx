import { clsx } from "clsx";
import React, { ReactNode } from "react";

export default function Container({
  containerClass,
  wrapperClass,
  children,
}: {
  containerClass?: string;
  wrapperClass?: string;
  children: ReactNode;
}) {
  return (
    <section className={clsx("", containerClass)}>
      <div
        className={clsx(
          "w-full max-w-[var(--max-w-container)] mx-auto",
          wrapperClass
        )}
      >
        {children}
      </div>
    </section>
  );
}
