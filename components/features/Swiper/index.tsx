"use client";

import clsx from "clsx";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

type PropTypes = {
  axis: EmblaOptionsType["axis"];
  slideWrapperClassName?: string;
  delay?: number;
  children: React.ReactNode;
  autoScroll?: boolean;
};

export default function Swiper({
  axis,
  slideWrapperClassName,
  delay = 5000,
  children,
  autoScroll = false,
}: PropTypes) {
  const options: EmblaOptionsType = {
    loop: true,
    axis,
    align: "start",
  };

  const plugins: NonNullable<
    ReturnType<typeof Autoplay | typeof AutoScroll>
  >[] = [
    Autoplay({ delay, stopOnInteraction: false }),
    autoScroll
      ? AutoScroll({
          speed: 0.5,
          stopOnInteraction: false,
        })
      : undefined,
  ].filter(Boolean) as NonNullable<
    ReturnType<typeof Autoplay | typeof AutoScroll>
  >[];

  const [emblaRef] = useEmblaCarousel(options, plugins);

  const isHorizontal = axis === "x";

  return (
    <div ref={emblaRef} className="overflow-hidden rounded-lg w-full h-full">
      <div
        className={clsx(
          "w-full h-full",
          isHorizontal ? "flex flex-row" : "flex flex-col",
          slideWrapperClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
