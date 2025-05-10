import { ClientWrapper } from "@/components/layout";
import Header from "@/components/site/home/Header";
import { getDictionary } from "@/get-translation";
import { Locale } from "@/i18n-config";
import Image from "next/image";

interface LayoutProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: LayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <ClientWrapper showNavigation lang={lang}>
      <Header lang={lang} />
    </ClientWrapper>
  );
}
