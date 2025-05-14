import { SectionHeading } from "@/components/features/Heading";
import { Container, Content } from "@/components/layout";
import { images } from "@/helpers/localImages";
import { Locale } from "@/i18n-config";
import React from "react";
import Image from "next/image";
import { CategoryCard } from "./CategoryCard";

export function Categories({ lang }: { lang: Locale }) {
  const categories = [
    { category: "Basicas", details: [{ units: 2, maxPerUnit: 4 }] },
    { category: "Doble Camas", details: [{ units: 3, maxPerUnit: 2 }] },
    { category: "Familiares", details: [{ units: 1, maxPerUnit: 4 }] },
    { category: "Ejecutivas", details: [{ units: 2, maxPerUnit: 3 }] },
    {
      category: "Doble Habitaciones",
      details: [{ units: 2, maxPerUnit: 3 }],
    },
    { category: "Standards", details: [{ units: 2, maxPerUnit: 3 }] },
  ];

  return (
    <Container>
      <Content>
        <SectionHeading
          showBorders
          title="Select from our Categories"
          description="Explore our categories and find the perfect room for your stay."
        />
      </Content>
      <Content className="flex justify-center items-center p-4 !py-2">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category.category}
              details={category.details.map((detail) => ({
                units: detail.units,
                maxPerUnit: detail.maxPerUnit,
              }))}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
}
