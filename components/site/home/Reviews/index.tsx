"use client";
import { SectionHeading } from "@/components/features/Heading";
import { Container, Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { CardReview } from "./CardReview";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/ui/card";
import { StarsRating } from "@/components/features";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Swiper from "@/components/features/Swiper";

export function Reviews({ lang }: { lang: Locale }) {
  const [emblaRef] = useEmblaCarousel();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container containerClass="py-10">
      <SectionHeading
        showBorders
        title="Guests Reviews"
        description="Our guests' testimonials speak for themselves."
        className="mb-8"
      />
      <Content>
        <div className="overflow-hidden w-full max-w-[340px] min-[630px]:max-w-[650px] pr-1 bg-yellow-200 mx-auto">
          {/* <Swiper axis="x" delay={5000}>
            <CardReview flexBasis="min-[630px]:flex-[0_0_90%] flex-[0_0_100%]" />
          </Swiper> */}
        </div>
      </Content>
    </Container>
  );
}
// <CardReview />
