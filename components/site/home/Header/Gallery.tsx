import Swiper from "@/components/features/Swiper";
import { ImageSlideList } from "@/helpers/ImageSlideList";
import { images } from "@/helpers/localImages";
import React from "react";

export function Gallery() {
  return (
    <article className="relative flex h-auto w-full items-center justify-center mt-4 sm:mt-0 max-lg:max-w-3xl max-lg:mx-auto">
      {/* Top left image */}
      <figure className="absolute top-2 left-2 lg:top-6 lg:left-6 aspect-square h-auto w-[25%] rounded-md border-10 lg:border-14 border-muted bg-transparent" />
      {/* Top Right image */}
      <figure className="glass absolute top-6 right-6 z-[2] aspect-square h-auto w-[25%] rounded-md shadow-2xl shadow-background bg-white/20 backdrop-blur-2xl p-2 lg:p-4">
        <div className="relative aspect-square overflow-hidden rounded-md ">
          <Swiper axis="x">
            <ImageSlideList images={images} />
          </Swiper>
        </div>
      </figure>
      {/* Main image */}
      <figure className="glass relative z-[1] aspect-square w-5/6 overflow-hidden rounded-md shadow-2xl shadow-background bg-white/20 backdrop-blur-2xl p-2 lg:p-4">
        <div className="relative aspect-square overflow-hidden rounded-md">
          <Swiper axis="y" delay={6500}>
            <ImageSlideList images={images} />
          </Swiper>
        </div>
      </figure>
      {/* Bottom left image */}
      <figure className="glass absolute bottom-10 left-2 z-[2] aspect-square h-auto w-[30%] rounded-md shadow-2xl shadow-background bg-white/20 backdrop-blur-2xl p-2 lg:p-4">
        <div className="relative aspect-square overflow-hidden rounded-md">
          <Swiper axis="x" delay={6000}>
            <ImageSlideList images={images} />
          </Swiper>
        </div>
      </figure>
      {/* Bottom Right image */}
      <figure className="glass absolute bottom-2 right-2 z-[0] aspect-square h-auto w-[35%] rounded-md shadow-2xl shadow-background bg-white/20 backdrop-blur-2xl p-2 lg:p-4">
        <div className="relative aspect-square overflow-hidden rounded-md ">
          <Swiper axis="y" delay={7000}>
            <ImageSlideList images={images} />
          </Swiper>
        </div>
      </figure>
    </article>
  );
}
