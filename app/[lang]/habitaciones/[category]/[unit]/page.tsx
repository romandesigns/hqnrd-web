import { ContactWidget } from '@/components/features'
import { FaShareNodes } from '@/components/icons'
import { Container, Content, Main } from '@/components/layout'
import { Trending } from '@/components/site/home'
import { Amenities, Description, Features, Media } from '@/components/site/Room'
import Booking from '@/components/site/Room/Booking'
import { GoBack } from '@/components/ui/backBtn'
import { Button } from '@/components/ui/button'
import { Locale } from '@/i18n-config'
import { stFormatter } from '@/lib/utils'
import mocked_data from '@/public/data/rooms.json'
import { redirect } from 'next/navigation'

type Params = Promise<{ lang: string; category: string; unit: string }>
type SearchParams = Promise<Record<string, string | string[] | undefined>>

const filteredRoom = async (category: string, unit: string, lang: Locale) => {
  const zanitizedCategory = stFormatter.removePluralSuffix(category)
  const room = mocked_data.rooms.find(
    room => room.slug === zanitizedCategory && room.unitNumber === Number(unit),
  )
  if (!room) redirect(`/${lang}/habitaciones`)
  return { room, slug: zanitizedCategory }
}

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams

  const { lang, category, unit } = params
  const { room, slug } = await filteredRoom(category, unit, lang)
  const trendingRooms = mocked_data.rooms.slice(0, 4)

  function parseDateString(
    param: string | string[] | undefined,
  ): string | undefined {
    if (!param) return undefined
    const value = Array.isArray(param) ? param[0] : param
    const date = new Date(value)
    return isNaN(date.getTime()) ? undefined : date.toISOString()
  }
  const formReturnedDefaults = {
    adults: Number(searchParams['default_adults'] ?? 0),
    children: Number(searchParams['default_children'] ?? 0),
    checkIn: parseDateString(searchParams['default_checkIn']),
    checkOut: parseDateString(searchParams['default_checkOut']),
    message: Array.isArray(searchParams['default_message'])
      ? (searchParams['default_message'][0] ?? '')
      : (searchParams['default_message'] ?? ''),
  }

  return (
    <>
      <header className='hqnrd-frosty-bg sticky top-10 lg:-top-8 bg-background/90 pb-6 backdrop-blur-md z-[2]'>
        <Content className='p-2!'>
          <div className='lg:py-3'>
            <GoBack variant='outline' />
          </div>
          <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
            <div className='mb-4 flex flex-col items-center justify-center gap-2 lg:mt-8 lg:flex-1 lg:items-start lg:justify-start lg:mb-0'>
              <p className='font-bold text-sm text-muted-foreground lg:text-lg'>
                Unit {room.unitNumber}
              </p>
              <h2 className='text-3xl font-black uppercase leading-6 lg:text-5xl lg:font-black'>
                {stFormatter.removePluralSuffix(room.category)}
              </h2>
            </div>
            <div className='lg:max-w-auto px-3 flex w-full max-w-6xl items-center justify-center lg:w-auto lg:flex-col lg:justify-between'>
              <Button className='w-full max-w-md lg:hidden'>
                Make Reservation
              </Button>
              <ContactWidget
                lang={lang}
                className='hidden lg:block'
                btnVariant='flat'
              />
            </div>
          </div>
        </Content>
      </header>
      <Main>
        <Container>
          <Content className='py-0!'>
            <div className='grid grid-cols-4 grid-rows-2 gap-1 p-2'>
              <figure className='col-span-2 row-span-2 aspect-square rounded-sm bg-pink-500'></figure>
              <figure className='col-start-3 col-end-5 rounded-sm bg-purple-500'></figure>
              <figure className='col-start-3 col-end-4 row-start-2 row-end-3 rounded-sm bg-orange-500'></figure>
              <figure className='col-start-4 col-end-5 rounded-sm bg-yellow-500'></figure>
            </div>
          </Content>
        </Container>
        <Container>
          <Content className='grid grid-cols-1 gap-10 p-2 lg:grid-cols-[2fr_1fr]'>
            <article className='flex flex-col items-center justify-center gap-10 lg:gap-20'>
              <div className='flex w-full items-center justify-start pt-3'>
                <Button size='icon' variant='outline'>
                  <FaShareNodes />
                </Button>
              </div>
              <Features />
              <Description />
              <Amenities />
              <Media />
            </article>
            <aside className='hidden pt-4 lg:block'>
              <div className='top-52 py-8 lg:sticky'>
                <h4 className='inline-block translate-x-4 translate-y-4 rounded-md border-4 border-background bg-secondary p-2 px-6 pl-4 text-2xl font-bold'>
                  2,500 / Night
                </h4>
                <div className='rounded-md bg-secondary/50 px-2 py-6'>
                  <Booking
                    lang={lang}
                    unitNumber={Number(room.unitNumber)}
                    category={room.category}
                    pricePerNight={room.pricePerNight}
                    slug={slug}
                    formReturnedDefaults={formReturnedDefaults}
                  />
                </div>
              </div>
            </aside>
          </Content>
        </Container>
        <div className='overflow-hidden w-[100vw] max-w-[var(--max-w-container)] mx-auto'>
          <Trending
            items={trendingRooms}
            lang={lang}
            title='Trending now'
            description='See these other options and reserve today'
          />
        </div>
      </Main>
    </>
  )
}
