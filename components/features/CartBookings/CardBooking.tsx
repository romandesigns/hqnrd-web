import React from "react";

export function CardBooking() {
  return (
    <div className="md:grid-cols-[7rem_1fr] h-28 borders my-1 grid md:gap-2 grid-rows-[7rem_5rem] md:grid-rows-1 overflow-hidden rounded-md">
      <div className="bg-purple-500 md:rounded-md md:aspect-square" />
      <div className="rounded-b-md bg-red-500 md:rounded-md">Content here</div>
    </div>
  );
}
