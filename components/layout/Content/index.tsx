import { clsx } from "clsx";
import React, { ReactNode } from "react";

export default function Content({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "w-full max-w-[var(--max-w-container)] mx-auto p-2 py-10",
        className
      )}
    >
      {children}
    </div>
  );
}
