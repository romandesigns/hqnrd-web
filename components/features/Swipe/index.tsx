"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ClientWrapper } from "@/components/layout";

export const Swipe = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <ClientWrapper lang="lang" showNavigation>
      <div className="flex items-center justify-center h-screen ">
        <div className="overflow-hidden border mx-auto" ref={emblaRef}>
          <div className="flex gap-2">
            <div className="flex-[0_0_100%] min-w-0 p-8 bg-red-500">
              Slide 1
            </div>
            <div className="flex-[0_0_100%] min-w-0 p-8 bg-green-500">
              <div>Title</div>
              <div>Description</div>
            </div>
            <div className="flex-[0_0_100%] min-w-0 p-8 bg-purple-500">
              Slide 3
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
};
