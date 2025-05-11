import { ClientWrapper } from "@/components/layout";
import Header from "@/components/site/home/Header";
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
    </ClientWrapper>
  );
}
