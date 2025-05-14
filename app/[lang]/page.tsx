import { ClientWrapper, Main } from "@/components/layout";
import { Discounts, Header, RoomsFilter } from "@/components/site/home";
import { Categories } from "@/components/site/home/Categories";
import { Reviews } from "@/components/site/home/Reviews";
import { Locale } from "@/i18n-config";

interface LayoutProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: LayoutProps) {
  const { lang } = await params;

  return (
    <ClientWrapper showNavigation lang={lang}>
      <Header lang={lang} />
      <Main>
        <RoomsFilter lang={lang} />
        <Reviews />
        <Discounts lang={lang} />
        <Categories lang={lang} />
      </Main>
    </ClientWrapper>
  );
}
