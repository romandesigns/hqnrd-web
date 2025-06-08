import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { images } from '@/helpers/localImages'
import {
  FaShareNodes,
  FaWheelchair,
  MdOutlineCoffeeMaker,
  MdOutlineWifi,
  TbAirConditioning,
  TbBrandIntercom,
  TbToolsKitchen,
} from '@/components/icons'
import clsx from 'clsx'

export function RoomCard({
  flexBasis,
  items,
}: {
  flexBasis: string
  items: number[]
}) {
  return items?.map(item => (
    <article
      key={item}
      className={clsx(
        `relative bg-[var(--card)] flex flex-col gap-4 rounded-lg shadow-md ring-1 ring-[var(--card)] ring-offset-4 ring-offset-background mr-6 `,
        flexBasis,
      )}
    >
      <div className='relative'>
        <div className=' absolute top-0 flex items-center justify-between w-full px-4'>
          <h3 className='font-bold rounded-b-lg bg-background uppercase p-2 px-4'>
            Basica
          </h3>
          <Button size='icon' variant='ghost'>
            <FaShareNodes />
          </Button>
        </div>
        <div className='relative h-48 overflow-hidden mt-14'>
          <div className='absolute bottom-0 right-0 px-4 py-2 bg-accent font-bold z-[2] rounded-tl-xl text-lg uppercase'>
            1,350 / Night
          </div>
          <Image
            src={images[0]}
            alt='Category Image'
            className='object-cover'
            fill
            sizes='100vw'
          />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-start gap-2 p-2 pt-0 px-4'>
          <h5 className='font-bold uppercase text-xs text-muted-foreground'>
            Features
          </h5>
          <ul className='flex items-center gap-2'>
            <li className='py-1 px-2 bg-[var(--accent)] rounded-2xl text-primary text-[0.65rem]'>
              258 sqft
            </li>
            <li className='py-1 px-2 bg-[var(--accent)] rounded-2xl text-primary text-[0.65rem]'>
              Intercom
            </li>
            <li className='py-1 px-2 bg-[var(--accent)] rounded-2xl text-primary text-[0.65rem]'>
              Balcony
            </li>
            <li className='py-1 pl-1 text-primary text-xs'>.. 4+</li>
          </ul>
        </div>
        <div className='flex items-center justify-start gap-2 p-2 pt-0 px-4'>
          <h5 className='font-bold uppercase text-xs text-muted-foreground'>
            Amenities
          </h5>
          <ul className='flex items-center gap-2'>
            <li className='px-1 text-xs'>
              <FaWheelchair />
            </li>
            <li className='px-1 text-xs'>
              <TbAirConditioning />
            </li>
            <li className='px-1 text-xs'>
              <MdOutlineCoffeeMaker />
            </li>
            <li className='px-1 text-xs'>
              <TbToolsKitchen />
            </li>
            <li className='px-1 text-xs'>
              <TbBrandIntercom />
            </li>
            <li className='px-1 text-xs'>
              <MdOutlineWifi />
            </li>

            <li className='px-1 text-xs'>.. 8+</li>
          </ul>
        </div>
      </div>
      <div className='p-2 pt-0 px-4'>
        <Button size='full' className='uppercase text-xs font-bold'>
          Ver Detalles
        </Button>
      </div>
    </article>
  ))
}
