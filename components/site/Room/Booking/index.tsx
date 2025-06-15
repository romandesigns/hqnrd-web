import { Button } from '@/components/ui/button'
import { DateAndTimePicker } from '@/components/ui/DateTimePicker'
import { InputNumber } from '@/components/ui/InputNumber'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Locale } from '@/i18n-config'
import { addReservatation } from '@/utils/actions/actionAddReservation'
import Form from 'next/form'
import React from 'react'

interface BookingProps {
  lang: Locale
  unitNumber?: number
  category?: string
  pricePerNight?: number
  slug: string
  formReturnedDefaults: {
    adults: number
    children: number
    checkIn?: string
    checkOut?: string
    message: string
  }
}

export default function Booking({
  lang,
  unitNumber,
  category,
  pricePerNight,
  slug,
  formReturnedDefaults,
}: BookingProps) {
  return (
    <Form
      action={addReservatation}
      className='p-6 pb-4 flex flex-col gap-6 [@width<300px]:py-2 [@width>230px]:py-4'
    >
      <div className='flex gap-6'>
        <InputNumber
          name='adults'
          iconName='FaUser'
          iconSize={14}
          inputNumberLabel='Adults'
          defaultValue={Number(formReturnedDefaults.adults)}
        />
        <InputNumber
          name='children'
          iconName='FaChild'
          iconSize={14}
          inputNumberLabel='Children'
          defaultValue={Number(formReturnedDefaults.children)}
        />
      </div>

      <div className='flex gap-6'>
        <DateAndTimePicker
          lang={lang}
          granularity='minute'
          icon='calendar'
          hideIcon={true}
          label='Check In'
          minDate={new Date(new Date().setHours(0, 0, 0, 0))}
          displayFormat={{ hour12: 'MM/dd/yyyy hh:mm a' }}
          inputName='checkIn'
          align='start'
          sideOffset={-180}
          defaultValue={
            formReturnedDefaults.checkIn
              ? new Date(formReturnedDefaults.checkIn)
              : undefined
          }
        />
        <DateAndTimePicker
          lang={lang}
          granularity='day'
          icon='calendar'
          hideIcon={true}
          label='Check Out'
          minDate={new Date(new Date().setHours(0, 0, 0, 0))}
          displayFormat={{ hour12: 'MM/dd/yyyy hh:mm a' }}
          inputName='checkOut'
          align='end'
          sideOffset={-180}
          time={'11:30 AM'}
          defaultValue={
            formReturnedDefaults.checkIn
              ? new Date(formReturnedDefaults.checkIn)
              : undefined
          }
        />
      </div>

      <div>
        <Label htmlFor='message' className='text-muted-foreground'>
          Message (Optional)
        </Label>
        <Textarea
          className='h-36 mt-2'
          name='message'
          defaultValue={formReturnedDefaults.message}
        />
        <input
          name='lang'
          readOnly
          defaultValue={lang}
          className='hidden'
          aria-readonly='true'
        />
        <input
          name='slug'
          readOnly
          defaultValue={slug}
          className='hidden'
          aria-readonly='true'
        />
        <input
          name='unitNumber'
          defaultValue={unitNumber}
          readOnly
          className='hidden'
          aria-readonly='true'
        />
        <input
          name='pricePerNight'
          defaultValue={pricePerNight}
          readOnly
          className='hidden'
          aria-readonly='true'
        />
        <input
          name='category'
          defaultValue={category}
          readOnly
          className='hidden'
          aria-readonly='true'
        />

        <Button size='full' className='mt-8 py-5' type='submit'>
          Add Booking
        </Button>
      </div>
    </Form>
  )
}
