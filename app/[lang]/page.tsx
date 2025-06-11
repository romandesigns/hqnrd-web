import { ClientWrapper, Main } from '@/components/layout'
import {
  Discounts,
  Header,
  RoomsFilter,
  Trending,
  ScenicSpaces,
  Reviews,
} from '@/components/site/home'
import { Categories } from '@/components/site/home/Categories'
import { Locale } from '@/i18n-config'
import mocked_data from '@/public/data/rooms.json'

interface LayoutProps {
  params: Promise<{
    lang: Locale
  }>
}

export default async function Home({ params }: LayoutProps) {
  const { lang } = await params
  const trendingRooms = mocked_data.rooms.slice(0, 4)
  console.log(trendingRooms)
  return (
    <ClientWrapper showNavigation lang={lang} showFooter>
      <Header lang={lang} />
      <Main className='py-20'>
        <RoomsFilter lang={lang} />
        <Reviews />
        <Discounts lang={lang} />
        <Categories lang={lang} />
        <ScenicSpaces />
        <Trending
          items={trendingRooms}
          title='Our Trending Rooms'
          description='Check out the most popular rooms'
          showBorders
          lang={lang}
        />
      </Main>
    </ClientWrapper>
  )
}
