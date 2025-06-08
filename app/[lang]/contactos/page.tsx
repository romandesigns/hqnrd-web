import { ClientWrapper, Content, Container } from '@/components/layout'
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

interface PageProps {
  params: Promise<{
    lang: Locale
  }>
}

const teams = ['1', '2', '3', '4', '5', '6', '7', '8']
const defaultBreakPoints = {
  sm: { slidesPerView: 3, spaceBetween: 20 },
  md: { slidesPerView: 3, spaceBetween: 20 },
  lg: { slidesPerView: 4, spaceBetween: 20 },
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  return (
    <ClientWrapper lang={lang}>
      <header>
        <Content className='space-y-2 py-20 sm:py-40'>
          <h3 className='text-center text-2xl font-bold sm:text-4xl'>
            Contact our team
          </h3>
          <p className='mx-auto max-w-3xl px-8 text-center text-xs text-muted-foreground sm:text-sm'>
            Our team is here to help! Expect a response within 15 minutes.
          </p>
        </Content>
      </header>
      <main>
        <Container>
          <Content className='mb-8 px-6'>
            <SectionHeading
              showBorders
              title='Meet Our Team'
              description='Putting your joy and satisfaction above all else'
            />
            <p>Team Pleace Holder</p>
            {/* {teams?.length > 0 ? (
              <FeaturedItems
                itemsArray={teams as any[]}
                teams
                speed={6000}
                delay={1000}
                lang={lang}
                breakPoints={defaultBreakPoints}
              />
            ) : (
              <p className='text-center text-gray-500'>
                Our team is coming soon!
              </p>
            )} */}
          </Content>
        </Container>
        <Content className='gap-4 px-10 py-20 max-md:px-4'>
          <h4 className='py-4 text-2xl font-bold'>Contact Form</h4>
          <Container className='grid grid-cols-[1fr_.7fr] gap-10 max-md:grid-cols-1'>
            <Form action='#' className=''>
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
            <aside className='rounded-md bg-secondary/20 p-2'>
              <div className='p-6'>
                <h3 className='font-bold'>Chat with us</h3>
                <p className='text-xs text-muted-foreground'>
                  Speak directly with our friendly team via whatsapp
                </p>
              </div>
              <div className='p-6'>
                <h3 className='font-bold'>Call us</h3>
                <p className='text-xs text-muted-foreground'>
                  Call our team Mon-Fri from 8:00am to 5:00pm
                </p>
              </div>
              <div className='p-6'>
                <h3 className='font-bold'>Visit us</h3>
                <p className='text-xs text-muted-foreground'>
                  Chat to us in person at our reception
                </p>
              </div>
            </aside>
          </Container>
        </Content>
      </main>
    </ClientWrapper>
  )
}
