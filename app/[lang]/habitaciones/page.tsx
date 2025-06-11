import { Main } from '@/components/layout'
import { Header } from '@/components/site/rooms/Header'
import { Locale } from '@/i18n-config'

interface LayoutProps {
  params: Promise<{
    lang: Locale
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang } = await params

  return (
    <>
      <Header lang={lang} />
      <Main>Main Component</Main>
    </>
  )
}
