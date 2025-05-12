import Container from "@/components/layout/Container";
import { Locale } from "@/i18n-config";
import { Gallery } from "./Gallery";
import { CopyWritting } from "./CopyWritting";
import { Content } from "@/components/layout";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="relative">
      <Container containerClass="pt-0">
        <Content wrapperClass="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 sm:gap-2 lg:py-20 p-2">
          <CopyWritting lang={lang} />
          <Gallery />
        </Content>
      </Container>
    </header>
  );
}
