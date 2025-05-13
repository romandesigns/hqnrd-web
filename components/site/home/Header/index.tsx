import Container from "@/components/layout/Container";
import { Locale } from "@/i18n-config";
import { Gallery } from "./Gallery";
import { CopyWritting } from "./CopyWritting";
import { Content } from "@/components/layout";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="relative">
      <Container containerClass="p-2">
        <Content wrapperClass="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 sm:gap-2 lg:py-10 p-2 lg:px-20  bg-linear-to-b from-secondary/30 rounded-lg  via-secondary/10 to-background to-secondary/0">
          <CopyWritting lang={lang} />
          <Gallery />
        </Content>
      </Container>
    </header>
  );
}
