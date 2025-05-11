import Swiper from "@/components/features/Swiper";
import Container from "@/components/layout/Container";
import Particles from "@/components/ui/particles";
import { ImageSlideList } from "@/helpers/ImageSlideList";
import { images } from "@/helpers/localImages";
import { Locale } from "@/i18n-config";
import { Gallery } from "./Gallery";

export default function Header({ lang }: { lang: Locale }) {
  return (
    <header className="">
      <Container wrapperClass="grid grid-cols-1 md:grid-cols-2  grid-rows-2 sm:gap-2 h-full md:grid-cols-2 h-auto py-20 p-8">
        <article className="bg-pink-300 aspect-square">
          <h2>Text Content</h2>
        </article>
        <Gallery />
      </Container>
      <Particles
        className="absolute inset-0 z-1"
        quantity={300}
        ease={20}
        refresh
        color="rgba(255, 255, 255, 0.5)"
      />
    </header>
  );
}
