import Content from "@/components/layout/Content";
import Container from "@/components/layout/Content";
import { hqnrd } from "@/constants";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import React from "react";

export function Discounts({ lang }: { lang: Locale }) {
  return (
    <Container>
      <Content containerClass="flex justify-center items-center">
        <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
          <div>
            <div className="border ml-2 bg-[var(--card)] rounded-md inline-flex flex-col justify-center items-center p-4 ">
              {/* TOP */}
              <h3 className="uppercase font-black rounded-t-md  bg-secondary text-primary p-4 py-2">
                Discount Available
              </h3>
              {/* MID */}
              <div className="relative p-1 bg-secondary rounded-md">
                <Image
                  src="/images/rooms/img-1.webp"
                  width={500}
                  height={500}
                  alt={`${hqnrd.name.long}-Discount`}
                  className="rounded-md z-10 relative"
                />
                <div className="absolute rounded-md inset-0  bg-linear-to-t from-[var(--card)] via-secondary/20 overflow-hidden to-secondary" />
              </div>
              {/* BOTTOM */}
              <p className="pt-4">Available when booking 5 days or more</p>
            </div>
          </div>
          <div>
            <div className="border ml-2 bg-[var(--card)] rounded-md inline-flex flex-col justify-center items-center p-4 ">
              {/* TOP */}
              <h3 className="uppercase font-black rounded-t-md  bg-secondary text-primary p-4 py-2">
                Discount Available
              </h3>
              {/* MID */}
              <div className="relative p-1 bg-secondary rounded-md">
                <Image
                  src="/images/rooms/img-1.webp"
                  width={500}
                  height={500}
                  alt={`${hqnrd.name.long}-Discount`}
                  className="rounded-md z-10 relative"
                />
                <div className="absolute rounded-md inset-0  bg-linear-to-t from-[var(--card)] via-secondary/20 overflow-hidden to-secondary" />
              </div>
              {/* BOTTOM */}
              <p className="pt-4">Available when booking 5 days or more</p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
