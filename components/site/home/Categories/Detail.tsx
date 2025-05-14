import React from "react";

export function CardCategoryDetail({
  units,
  maxPerUnit,
}: {
  units: number;
  maxPerUnit: number;
}): React.JSX.Element {
  return (
    <>
      <p className="uppercase space-x-1 text-[0.65rem] font-bold text-muted-foreground bg-[var(--card)] rounded-lg p-1">
        <span>Units</span>
        <span className="py-1 px-4 bg-[var(--accent)] rounded-2xl text-primary">
          {units}
        </span>
      </p>
      <p className="uppercase space-x-1 text-[0.65rem] font-bold text-muted-foreground bg-[var(--card)] rounded-lg p-1">
        <span>Max Per Unit</span>
        <span className="py-1 px-4 bg-[var(--accent)] rounded-2xl text-primary">
          {maxPerUnit}
        </span>
      </p>
    </>
  );
}
