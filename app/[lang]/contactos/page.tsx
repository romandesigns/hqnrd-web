import {
  ClientWrapper,
  Content,
  Container,
  Header,
  Main,
} from '@/components/layout'
import { Locale } from '@/i18n-config'

import { FeaturedItems } from '@/components/features/site/swiper/FeaturedSlider'
import Form from 'next/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormLabel, PhoneInput } from '@/components/features/Form'
import { SectionHeading } from '@/components/features/Heading'
import Swiper from '@/components/features/Swiper'
import { TeamCard } from '@/components/features'

interface PageProps {
  params: Promise<{
    lang: Locale
  }>
}

const teams = ['1', '2', '3', '4', '5', '6', '7', '8']

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  return (
    <ClientWrapper showNavigation lang={lang}>
      <Header className='relative'>
        <Content className='py-44 relative z-[3] pointer-events-none'>
          <h3 className='text-center text-2xl font-bold sm:text-4xl'>
            Contact our team
          </h3>
          <p className='mx-auto max-w-3xl px-8 text-center text-xs sm:text-sm'>
            Our team is here to help! Expect a response within 15 minutes.
          </p>
        </Content>

        <div className='absolute inset-0 z-[1] bg-background/70 pointer-events-none' />
        <div className='absolute inset-0  flex items-center justify-center'>
          <div className='w-full max-w-[95vw] min-[650px]:max-w-[92vw] md:max-w-[1000px] rounded-2xl mx-auto overflow-hidden h-auto'>
            <Swiper
              axis='x'
              delay={5000}
              autoScroll
              slideWrapperClassName='p-2 gap-4'
            >
              {teams.map((item, index) => (
                <TeamCard
                  key={index}
                  className='flex-[0_0_50%] min-[450px]:[flex:0_0_35%] min-[650px]:[flex:0_0_35%] md:[flex:0_0_25%]'
                />
              ))}
            </Swiper>
          </div>
        </div>
      </Header>
      <Main className='w-full px-2 max-w-5xl mx-auto pt-8 pb-4'>
        <Form action='#' className='w-full  mx-auto'>
          <div className='mb-4 grid grid-cols-2 grid-rows-1 gap-4'>
            <Label
              className='mb-2 flex-1 flex flex-col items-start justify-center'
              htmlFor='name'
            >
              <FormLabel className='mb-0!' label='Name' />
              <Input type='text' id='name' />
            </Label>
            <Label
              className='mb-2 flex-1 flex flex-col items-start justify-center'
              htmlFor='lastName'
            >
              <FormLabel className='mb-0!' label='Last Name' />
              <Input type='text' id='lastName' />
            </Label>
          </div>
          <Label
            className='mb-2 flex-1 flex flex-col items-start justify-center'
            htmlFor='email'
          >
            <FormLabel className='mb-0!' label='Email' />
            <Input type='email' id='email' />
          </Label>
          <Label className='mt-4 inline-block flex-1' htmlFor='phone'>
            <FormLabel className='mb-0!' label='Phone Number' />
            <PhoneInput className='flex items-stretch' />
          </Label>
          <Label className='mt-4 block flex-1' htmlFor='message'>
            <FormLabel className='mb-0!' label='Message' />
            <Textarea className='h-40' id='message' />
          </Label>
          <div>
            <h3 className='py-8 font-bold'>Guests Services and Request</h3>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label
                  htmlFor='transportation'
                  className='gap-3 flex items-center'
                >
                  <Checkbox id='transportation' />
                  <FormLabel className='mb-0!' label='Transportation' />
                </Label>
              </li>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label
                  htmlFor='special-event'
                  className='gap-3 flex items-center'
                >
                  <Checkbox id='special-event' />
                  <FormLabel className='mb-0!' label='Special Event' />
                </Label>
              </li>

              <li className='min-w-[10rem] flex-1 my-1'>
                <Label htmlFor='reservations' className='flex items-center'>
                  <Checkbox id='reservations' />
                  <FormLabel className='mb-0!' label='Room Reservations' />
                </Label>
              </li>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label htmlFor='payments' className='flex items-center'>
                  <Checkbox id='payments' />
                  <FormLabel className='mb-0!' label='Payments' />
                </Label>
              </li>

              <li className='min-w-[10rem] flex-1 my-1'>
                <Label
                  htmlFor='discountProgram'
                  className='gap-3 flex items-center'
                >
                  <Checkbox id='discountProgram' />
                  <FormLabel className='mb-0!' label='Discount Program' />
                </Label>
              </li>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label htmlFor='parking' className='flex items-center'>
                  <Checkbox id='parking' />
                  <FormLabel className='mb-0!' label='Parking' />
                </Label>
              </li>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label htmlFor='account' className='flex items-center'>
                  <Checkbox id='account' />
                  <FormLabel className='mb-0!' label='Account' />
                </Label>
              </li>
              <li className='min-w-[10rem] flex-1 my-1'>
                <Label htmlFor='pet-friendly' className='flex items-center'>
                  <Checkbox id='pet-friendly' />
                  <FormLabel className='mb-0!' label='Pet Friendly' />
                </Label>
              </li>
            </ul>
          </div>
          <Button type='submit' size='full' className='mt-10 py-5'>
            Submit
          </Button>
        </Form>
      </Main>
    </ClientWrapper>
  )
}
