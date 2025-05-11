"use client";
import React, { useMemo } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

type EmblaCarouselProps = {
  className?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
  slidesPerView?: number;
  autoplay?: boolean;
  autoplaySpeed?: number; // in seconds
  children: React.ReactNode[];
};

export function EmblaCarousel({
  className,
  slideClassName,
  options = {},
  slidesPerView = 1,
  autoplay = true,
  autoplaySpeed = 3, // Default 3 seconds
  children,
}: EmblaCarouselProps): React.JSX.Element {
  const plugins = useMemo(() => {
    if (!autoplay) return [];
    return [
      Autoplay({
        delay: autoplaySpeed * 1000, // convert to ms
        playOnInit: true,
        stopOnInteraction: false,
      }),
    ];
  }, [autoplay, autoplaySpeed]);

  const [emblaRef] = useEmblaCarousel({ loop: true, ...options }, plugins);

  return (
    <div className={clsx("embla overflow-hidden max-w-lg", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y flex-col">
          {children.map((child, index) => (
            <div
              key={index}
              className={clsx(
                "shrink-0 grow-0 px-2 relative w-48 h-40",
                slideClassName
              )}
              style={{ flexBasis: `calc(100% / ${slidesPerView})` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
