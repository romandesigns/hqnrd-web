import React from "react";

export function FormLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <p className={`text-xs text-muted-foreground ${className}`}>{label}</p>
  );
}
