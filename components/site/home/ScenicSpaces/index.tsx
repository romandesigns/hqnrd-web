import { SectionHeading } from '@/components/features/Heading'
import { Container, Content } from '@/components/layout'
import { images } from '@/helpers/localImages'
import Image from 'next/image'

/**
 * The `ScenicSpaces` component renders a section showcasing various scenic spaces.
 * It includes a heading section and a grid layout of images with descriptive overlays.
 *
 * @returns {JSX.Element} The JSX code for the ScenicSpaces component.
 *
 * @component
 * @example
 * return (
 *   <ScenicSpaces />
 * )
 */
export function ScenicSpaces() {
  return (
    <Container>
      <Content className='flex justify-center w-full !max-w-7xl'>
        <SectionHeading
          showBorders
          title='Our Scenic Spaces'
          description='Click the images to learn more'
        />
      </Content>
      <Content className='grid grid-cols-6 grid-rows-6 gap-2 p-2 lg:grid-cols-5 lg:grid-rows-3 lg:p-4 !max-w-7xl'>
        {/* Rooms Section */}
        <figure className='relative col-span-3 row-span-6 h-full overflow-hidden rounded-md bg-pink-500 lg:col-span-3 lg:row-span-3'>
          <div className='absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4'>
            <div className='text-md overflow-hidden rounded-br-md rounded-tl-md bg-accent p-1 px-5 text-primary-foreground backdrop-blur-md'>
              <h3 className='-mb-1 text-lg text-foreground font-black uppercase lg:text-3xl'>
                Rooms
              </h3>
              <p className='lg:text-md text-sm font-normal text-muted-foreground'>
                Interior
              </p>
            </div>
          </div>
          <Image
            src={images[0]}
            alt='Rooms Interior'
            fill
            className='object-cover'
          />
        </figure>

        {/* Rooftop Section */}
        <figure className='relative col-span-3 row-span-3 aspect-square overflow-hidden rounded-md bg-green-500 lg:col-span-2 lg:row-span-2'>
          <div className='absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4'>
            <div className='text-md overflow-hidden rounded-br-md rounded-tl-md bg-accent p-1 px-5 text-primary-foreground backdrop-blur-md'>
              <h3 className='-mb-1 text-foreground text-lg font-black uppercase lg:text-3xl'>
                Rooftop
              </h3>
              <p className='lg:text-md text-sm font-normal text-muted-foreground'>
                Interior
              </p>
            </div>
          </div>
          <Image
            src={images[3]}
            alt='Rooftop Interior'
            fill
            className='object-cover'
          />
        </figure>

        {/* Hallways Section */}
        <figure className='relative col-span-1 row-span-3 aspect-square h-full overflow-hidden rounded-md bg-yellow-500 lg:row-span-1'>
          <div className='absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4'>
            <div className='text-md overflow-hidden rounded-br-md rounded-tl-md bg-accent p-1 px-5 text-primary-foreground backdrop-blur-md'>
              <h3 className='-mb-1 text-lg font-black uppercase lg:text-3xl text-foreground'>
                Hallways
              </h3>
              <p className='lg:text-md text-sm font-normal text-muted-foreground'>
                Interior
              </p>
            </div>
          </div>
          <Image
            src={images[2]}
            alt='Hallways Interior'
            fill
            className='object-cover'
          />
        </figure>

        {/* Exterior Section */}
        <figure className='relative col-span-1 row-span-3 aspect-square h-full overflow-hidden rounded-md bg-yellow-500 lg:row-span-1'>
          <div className='absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4'>
            <div className='text-md overflow-hidden rounded-br-md rounded-tl-md bg-accent p-1 px-5 text-primary-foreground backdrop-blur-md'>
              <h3 className='-mb-1 text-lg font-black uppercase lg:text-3xl text-foreground'>
                Building
              </h3>
              <p className='lg:text-md text-sm font-normal text-muted-foreground'>
                Exterior
              </p>
            </div>
          </div>
          <Image
            src={images[1]}
            alt='Building Exterior'
            fill
            className='object-cover'
          />
        </figure>
      </Content>
    </Container>
  )
}
