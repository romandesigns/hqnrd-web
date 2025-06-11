import React from 'react'
import { Header as HeaderComponent, Content } from '@/components/layout'
import { GoBack } from '@/components/ui/backBtn'
import { ContactWidget } from '@/components/features'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import { images } from '@/helpers/localImages'
import { CategorySelect } from '@/components/features/CategorySelect'

export function Header({
  lang,
  defaultCategory,
}: {
  lang: Locale
  defaultCategory?: string
}) {
  return (
    <HeaderComponent className='max-lg:sticky max-lg:-top-2'>
      <Content className='w-full p-2!'>
        <div className='overflow-hidden rounded-lg relative w-full flex flex-col items-stretch justify-center p-4 pb-0 gap-4'>
          <div className='relative z-[2]'>
            <GoBack variant='outline' />
          </div>
          <div className='pb-4 sm:p-10 lg:pb-8 sm:pb-20 relative z-[2] flex-1 flex items-center justify-center text-center flex-col gap-4'>
            <h1 className='uppercase text-lg font-bold hidden sm:block'>
              Start Booking Today!
            </h1>
            <CategorySelect lang={lang} defaultCategory={defaultCategory} />
            <ContactWidget
              className='z-[2] w-full max-w-md'
              lang={lang}
              btnVariant='flat'
            />
            <p className='text-xs text-muted-foreground sm:text-sm sm:pt-8 lg:text-left w-full'>
              <span className='text-background bg-primary px-2 rounded-md mr-2'>
                10
              </span>{' '}
              Rooms Found!
            </p>
          </div>
          <div className='bg-linear-to-b from-background/70 via-background/95 to-background absolute inset-0 z-[1] rounded-lg backdrop-blur-sm' />
          <Image
            src={images[1]}
            alt='Header Image'
            fill
            className='object-cover'
          />
        </div>
      </Content>
    </HeaderComponent>
  )
}
