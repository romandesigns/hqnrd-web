import Swiper from "@/components/features/Swiper";
import Container from "@/components/layout/Container";
import Particles from "@/components/ui/particles";
import { ImageSlideList } from "@/helpers/ImageSlideList";
import { images } from "@/helpers/localImages";
import { Locale } from "@/i18n-config";
import { Gallery } from "./Gallery";
import { GoogleStats } from "@/components/features/GoogleStats";
import { FaLocationDot } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ContactWidget } from "@/components/features";

export default function Header({ lang }: { lang: Locale }) {
  return (
    <header className="relative">
      <Container wrapperClass="grid grid-cols-1 md:grid-cols-2  grid-rows-2 sm:gap-2 h-full md:grid-cols-2 h-auto lg:py-20 p-8">
        <article className="aspect-square flex flex-col justify-center items-center gap-8">
          <GoogleStats ratingsCount={4.9} reviewsCount={100} />
          <div>
            <p className="flex gap-1 items-baseline justify-center  text-sm w-full lg:justify-start">
              <FaLocationDot
                size={13}
                className="animate-bounce text-[var(--error)]"
              />{" "}
              In Salcedo, Republica Dominicana
            </p>
            <h2 className="font-black text-2xl text-center lg:text-left lg:text-5xl my-4">
              UNMACHED COMFORT AND ELEGANCE AWAIT!
            </h2>
            <p className="text-xs lg:text-sm max-w-2xl text-center lg:text-left w-full text-muted-foreground">
              Traveling solo, with family, or on a romantic getaway? Our premium
              rooms have you covered. Visit us today!
            </p>
          </div>
          <div className="flex gap-20 flex-col items-start w-full">
            <div className="flex gap-4 w-full">
              <Button className="flex-1">Explore Rooms</Button>
              <Button className="flex-1" variant="secondary">
                Contact Us
              </Button>
            </div>
            <ContactWidget
              lang={lang}
              btnVariant="outline"
              className="w-full justify-start flex-row [&_ul]:p-0 hidden lg:flex"
            />
          </div>
        </article>
        <Gallery />
      </Container>
      {/* <Particles
        className="absolute inset-0 z-1"
        quantity={300}
        ease={20}
        refresh
        color="bg-background"
      /> */}
    </header>
  );
}
