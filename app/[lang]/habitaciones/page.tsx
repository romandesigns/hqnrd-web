import { Locale } from '@/i18n-config'
import { ClientWrapper, Content, Header, Main } from '@/components/layout'
import React from 'react'
import Image from 'next/image'
import { images } from '@/helpers/localImages'

interface LayoutProps {
  params: Promise<{
    lang: Locale
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang } = await params

  return (
    <ClientWrapper showNavigation showFooter lang={lang}>
      <Header>
        <Content>
          <div className='overflow-hidden rounded-lg relative h-96 w-full flex items-center justify-center'>
            <div className='relative z-[2]'>
              <h1>Hello world</h1>
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
      </Header>
      <Main>
        <Content>Main Component</Content>
      </Main>
    </ClientWrapper>
  )
}
