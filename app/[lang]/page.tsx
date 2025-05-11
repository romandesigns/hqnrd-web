import { ClientWrapper, Main } from "@/components/layout";
import { Header, RoomsFilter } from "@/components/site/home";
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
      </Main>
    </ClientWrapper>
  );
}
