import { Main } from '@/components/layout'
import { Header } from '@/components/site/rooms/Header'
import { Locale } from '@/i18n-config'

interface LayoutProps {
  params: Promise<{
    lang: Locale
    category: string
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang, category } = await params

  return (
    <>
      <Header lang={lang} defaultCategory={category} />
      <Main>Category Found: {category}</Main>
    </>
  )
}
