import { SectionHeading } from '@/components/features/Heading'
import { Content, Container } from '@/components/layout'
import React from 'react'
import { RoomCard } from '@/components/features/RoomCard'
import Swiper from '@/components/features/Swiper'

export function Trending() {
  const items = [1, 2, 3, 4]
  return (
    <Container>
      <Content className='flex justify-center w-full !max-w-7xl'>
        <SectionHeading
          showBorders
          title='Our Scenic Spaces'
          description='Click the images to learn more'
        />
      </Content>
      <Content className=''>
        <div className='overflow-hidden w-full max-w-[340px] min-[630px]:max-w-[650px] pr-1 min-[412px]:max-w-[380px] min-[480px]:max-w-[450px] min-[520px]:max-w-[500px] sm:max-w-[730px] lg:max-w-[930px] xl:max-w-[1120px] mx-auto pl-1'>
          <Swiper axis='x' delay={5000} autoScroll slideWrapperClassName='py-2'>
            <RoomCard
              flexBasis='flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_35%]'
              items={items}
            />
          </Swiper>
        </div>
      </Content>
    </Container>
  )
}
