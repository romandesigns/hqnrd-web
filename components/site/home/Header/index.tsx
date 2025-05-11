import Container from "@/components/layout/Container";
import { Locale } from "@/i18n-config";
import { Gallery } from "./Gallery";
import { CopyWritting } from "./CopyWritting";

export default function Header({ lang }: { lang: Locale }) {
  return (
    <header className="relative">
      <Container wrapperClass="grid grid-cols-1 md:grid-cols-2  grid-rows-2 sm:gap-2 h-full md:grid-cols-2 h-auto lg:py-20 p-8">
        <CopyWritting lang={lang} />
        <Gallery />
      </Container>
    </header>
  );
}
