"use client";
import React from "react";

export function BookingsCounter() {
  const reservations = 8;
  return (
    reservations > 0 && (
      <>
        <span className="absolute bottom-5 left-5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500" />
        </span>
        <span className="absolute bottom-[1.3rem] left-[1.05rem] inline-block rounded-md px-2 text-[.6rem] font-bold text-black">
          {reservations}
        </span>
      </>
    )
  );
}
