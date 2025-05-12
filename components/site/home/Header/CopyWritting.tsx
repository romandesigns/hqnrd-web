import React from "react";
import { ContactWidget } from "@/components/features";
import { GoogleStats } from "@/components/features/GoogleStats";
import { FaLocationDot } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";

export function CopyWritting({ lang }: { lang: Locale }) {
  return (
    <article className="lg:aspect-square flex flex-col justify-center lg:justify-center items-center gap-8 max-lg:p-6">
      <div className="w-full flex justify-center items-center lg:justify-start">
        <GoogleStats ratingsCount={4.9} reviewsCount={100} />
      </div>
      <div>
        <p className="flex gap-1 font-bold items-baseline justify-center text-sm w-full lg:justify-start">
          <FaLocationDot
            size={13}
            className="animate-bounce text-[var(--error)]"
          />{" "}
          In Salcedo, Republica Dominicana
        </p>
        <h2 className="font-black text-2xl text-center lg:text-left lg:text-5xl my-4">
          UNMACHED COMFORT AND ELEGANCE AWAIT!
        </h2>
        <p className="text-xs lg:text-sm max-w-2xl text-center lg:text-left w-full text-muted-foreground max-lg:max-w-md max-lg:mx-auto">
          Traveling solo, with family, or on a romantic getaway? Our premium
          rooms have you covered. Visit us today!
        </p>
      </div>
      <div className="flex gap-20 flex-col items-stretch lg:items-start w-full justify-stretch lg:justify-start">
        <div className="flex gap-4  max-lg:mx-auto">
          <Button className="flex-1">Explore Rooms</Button>
          <Button className="flex-1" variant="secondary">
            Contact Us
          </Button>
        </div>
        <ContactWidget
          lang={lang}
          btnVariant="secondary"
          className="w-full justify-start flex-row [&_ul]:p-0 hidden lg:flex"
        />
      </div>
    </article>
  );
}
