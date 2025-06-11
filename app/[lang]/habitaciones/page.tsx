import { Content, Main } from '@/components/layout'
import { Header } from '@/components/site/rooms/Header'
import { Locale } from '@/i18n-config'
import mocked_data from '@/public/data/rooms.json'
import { RoomCard } from '@/components/features/RoomCard'

interface LayoutProps {
  params: Promise<{
    lang: Locale
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang } = await params

  return (
    <>
      <Header lang={lang} roomsCount={mocked_data.rooms.length} />
      <Main>
        <Content>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 gap-y-8'>
            {mocked_data.rooms.map((item, index) => (
              <RoomCard
                lang={lang}
                key={index}
                className='flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_35%] mr-0!'
                {...item}
              />
            ))}
          </ul>
        </Content>
      </Main>
    </>
  )
}
