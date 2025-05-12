"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { StarsRating } from "@/components/features";

import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";

export function CardReview({
  className,
  flexBasis,
}: {
  className?: string;
  flexBasis?: string;
}): React.JSX.Element[] {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return items.map((item) => (
    <div className={clsx(`flex gap-2 min-w-0`, flexBasis)} key={item}>
      <div className="border ml-2 bg-[var(--card)] rounded-md">
        <div className="p-1">
          <div className="flex items-center space-x-4 relative w-full">
            <div className="max-w-18 rounded-md absolute top-2 left-2 overflow-hidden bg-secondary p-2">
              <Avatar className="rounded-md">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-md"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className=" w-full">
              <p className="text-xs font-normal text-muted-foreground text-right p-2">
                05/12/2025
              </p>
              <p className="text-md font-bold text-left pl-22">Roman Feliz</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary px-4 pt-2">
          <div className="text-xs py-4  leading-relaxed">
            This is me sharing my lovely experience while staying at the hotel
            quinto nivel RD.
          </div>
          <div className="flex flex-col items-start justify-between w-full py-1">
            <div className="flex items-center gap-2 justify-start w-full">
              <h5 className="uppercase text-xs font-bold">Rated Us 4.5</h5>
              <StarsRating rating={4.5} />
            </div>
            <div className="flex items-center justify-start w-full text-xs gap-4">
              <h6 className="text-muted-foreground">
                Rooms: <span className="text-primary ml-1">5</span>
              </h6>
              <h6 className="text-muted-foreground">
                Location: <span className="text-primary ml-1">2</span>
              </h6>
              <h6 className="text-muted-foreground">
                Service: <span className="text-primary ml-1">2</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
