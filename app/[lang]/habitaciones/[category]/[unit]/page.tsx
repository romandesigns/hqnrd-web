import { ContactWidget } from '@/components/features'
import { FaShareNodes } from '@/components/icons'
import { Container, Content, Main } from '@/components/layout'
import { Trending } from '@/components/site/home'
import { Amenities, Description, Features, Media } from '@/components/site/Room'
import { GoBack } from '@/components/ui/backBtn'
import { Button } from '@/components/ui/button'
import { Locale } from '@/i18n-config'
import { removePluralSuffix } from '@/lib/utils'
import mocked_data from '@/public/data/rooms.json'

interface LayoutProps {
  params: Promise<{
    lang: Locale
    category: string
    unit: string
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang, category, unit } = await params
  console.log(lang, category, unit)
  const trendingRooms = mocked_data.rooms.slice(0, 4)

  return (
    <>
      <header className='hqnrd-frosty-bg'>
        <Content className='p-2'>
          <div className='py-3'>
            <GoBack variant='outline' />
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
            <div className='mb-4 flex flex-col items-center justify-center gap-4 lg:mt-8 md:flex-1 md:items-start md:justify-start lg:mb-0'>
              <p className='font-bold'>UNIT {unit}</p>
              <h2 className='text-3xl font-black uppercase leading-6 md:text-5xl md:font-black'>
                {removePluralSuffix(category)}
              </h2>
            </div>
            <div className='md:max-w-auto flex w-full max-w-6xl items-center justify-center md:w-auto md:flex-col md:justify-between'>
              <Button className='w-full max-w-md md:hidden' variant='outline'>
                Make Reservation
              </Button>
              <ContactWidget
                lang={lang}
                className='hidden md:block'
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
              <figure className='col-span-2 row-span-2 aspect-square rounded-lg bg-pink-500'></figure>
              <figure className='col-start-3 col-end-5 rounded-lg bg-purple-500'></figure>
              <figure className='col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg bg-orange-500'></figure>
              <figure className='col-start-4 col-end-5 rounded-lg bg-yellow-500'></figure>
            </div>
          </Content>
        </Container>
        <Container>
          <Content className='grid grid-cols-1 gap-10 p-2 md:grid-cols-[2fr_1fr]'>
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
            <aside className='hidden pt-4 md:block'>
              <div className='top-52 py-8 md:sticky'>
                <h4 className='inline-block translate-x-4 translate-y-4 rounded-md border-4 border-background bg-secondary p-2 px-6 pl-4 text-2xl font-bold'>
                  {/* {convertToLocaleString(room.pricePerNight, lang)} / Night */}
                </h4>
                <div className='rounded-md bg-secondary/50 px-2 py-6'>
                  {/* <Booking
                  lang={lang}
                  unitNumber={Number(roomUnitNumber)}
                  unitCategory={roomCategory}
                  pricePerNight={room.pricePerNight}
                /> */}
                </div>
              </div>
            </aside>
          </Content>
        </Container>
        <Container className='py-5 lg:py-20'>
          <Trending
            items={trendingRooms}
            lang={lang}
            title='Trending now'
            description='See these other options and reserve today'
          />
        </Container>
      </Main>
    </>
  )
}
