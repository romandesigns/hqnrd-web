import { SectionHeading } from "@/components/features/Heading";
import { Container, Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { CardReview } from "./CardReview";

export function Reviews({ lang }: { lang: Locale }) {
  return (
    <Container containerClass="py-10">
      <SectionHeading
        showBorders
        title="Guests Reviews"
        description="Our guests' testimonials speak for themselves."
        className="mb-8"
      />
      <Content>
        <div>
          <CardReview />
        </div>
      </Content>
    </Container>
  );
}
