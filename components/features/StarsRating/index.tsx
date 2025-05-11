import { FaRegStar, FaStar, FaStarHalfAlt } from "@/components/icons";
import React from "react";

export function StarsRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-[var(--warning)]" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-[var(--warning)]" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-[var(--warning)]" />
      ))}
    </div>
  );
}
