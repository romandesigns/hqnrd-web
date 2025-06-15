import { Content, Main } from '@/components/layout'
import { Header } from '@/components/site/rooms/Header'
import { Locale } from '@/i18n-config'
import { RoomCard } from '@/components/features/RoomCard'
import mocked_data from '@/public/data/rooms.json'
import { stFormatter } from '@/lib/utils'
import { redirect } from 'next/navigation'
interface LayoutProps {
  params: Promise<{
    lang: Locale
    category: string
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang, category } = await params
  const filteredRooms = mocked_data.rooms.filter(
    room => room.slug === stFormatter.removePluralSuffix(category),
  )

  if (filteredRooms.length === 0) {
    redirect(`/${lang}/habitaciones`)
  }

  return (
    <>
      <Header
        lang={lang}
        defaultCategory={category}
        roomsCount={filteredRooms.length}
      />
      <Main>
        <Content>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 gap-y-8'>
            {filteredRooms.map((item, index) => (
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
