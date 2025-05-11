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
    <div
      className={clsx(
        "w-full max-w-[var(--max-w-container)] mx-auto p-2",
        wrapperClass
      )}
    >
      {children}
    </div>
  );
}
