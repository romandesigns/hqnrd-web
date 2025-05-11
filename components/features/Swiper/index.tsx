"use client";

import clsx from "clsx";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropTypes = {
  axis: EmblaOptionsType["axis"];
  slideWrapperClassName?: string;
  slideClassName?: string;
  delay?: number;
  children: React.ReactNode;
};

export default function Swiper({
  axis,
  slideWrapperClassName,
  slideClassName,
  delay = 5000,
  children,
}: PropTypes) {
  const options: EmblaOptionsType = {
    loop: true,
    axis,
    align: "start",
  };

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay, stopOnInteraction: false }),
  ]);

  const isHorizontal = axis === "x";

  return (
    <div ref={emblaRef} className="w-full h-full overflow-hidden rounded-lg">
      <div
        className={clsx(
          "touch-pan-y h-full w-full",
          isHorizontal ? "flex" : "flex flex-col",
          slideWrapperClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
