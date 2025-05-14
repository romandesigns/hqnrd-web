"use client";
import { SectionHeading } from "@/components/features/Heading";
import Swiper from "@/components/features/Swiper";
import { Container, Content } from "@/components/layout";
import { CardReview } from "./CardReview";

export function Reviews() {
  return (
    <Container className="py-10">
      <SectionHeading
        title="Guests Reviews"
        description="Our guests' testimonials speak for themselves."
        className="mb-8"
      />
      <Content className="border !p-2 sm:!p-4 rounded-lg xl:max-w-[1120px]">
        <div className="overflow-hidden w-full max-w-[340px] min-[630px]:max-w-[650px] pr-1 min-[412px]:max-w-[380px] min-[480px]:max-w-[450px]  min-[520px]:max-w-[500px] sm:max-w-[730px] lg:max-w-[930px]  xl:max-w-[1120px]  mx-auto">
          <Swiper axis="x" delay={5000} autoScroll>
            <CardReview flexBasis="flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_40%]" />
          </Swiper>
        </div>
      </Content>
    </Container>
  );
}
