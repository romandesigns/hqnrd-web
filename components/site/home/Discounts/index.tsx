import { Container, Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import DiscountCard from "./DiscountCard";
import { SectionHeading } from "@/components/features/Heading";

export function Discounts({ lang }: { lang: Locale }) {
  const discounts = {
    shortStay: 5,
    longStay: 8,
  };

  return (
    <Container>
      <Content>
        <SectionHeading
          title="Discounts AVAILABLE TODAY"
          description="Check out our latest discounts and offers."
        />
      </Content>
      <Content className="flex justify-center items-center flex-col gap-8 md:flex-row p-4 !py-2">
        <DiscountCard
          discountPercent={discounts.shortStay}
          ctaText={`Available when booking ${discounts.shortStay} days or more`}
        />
        <DiscountCard
          discountPercent={discounts.longStay}
          ctaText={`Available when booking ${discounts.longStay} days or more`}
        />
      </Content>
    </Container>
  );
}
