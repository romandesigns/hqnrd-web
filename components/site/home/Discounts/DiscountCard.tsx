import React from 'react'
import Image from 'next/image'
import { hqnrd } from '@/constants'

export default function DiscountCard({
  discountPercent,
  ctaText,
  src,
  blurDataURL,
}: {
  discountPercent?: number
  ctaText?: string
  src: string
  blurDataURL?: string
}) {
  return (
    <div className='relative border bg-[var(--card)] rounded-md inline-flex flex-col justify-center items-center p-4'>
      <h3 className='uppercase font-black rounded-t-md bg-secondary text-primary p-4 py-2'>
        Discount Available
      </h3>
      <div className='relative p-1 bg-secondary rounded-md flex-1'>
        <div className='absolute rounded-md inset-4 flex items-center justify-center bg-background/40 z-[2] backdrop-blur-xl'>
          <p className='text-8xl font-bold'>{discountPercent ?? 0}%</p>
        </div>
        <Image
          src={src}
          width={500}
          height={500}
          alt={`${hqnrd.name.long}-Discount`}
          className='rounded-md z-1 relative'
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
        />
        <div className='absolute rounded-md inset-0 bg-linear-to-t from-[var(--card)] via-secondary/20 overflow-hidden to-secondary' />
      </div>
      <p className='pt-4 text-xs md:text-sm'>{ctaText}</p>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-linear-to-l from-blue-500/0 via-${
          discountPercent === 5 ? 'blue' : 'yellow'
        }-300 to-blue-500/0 h-0.25`}
      />
    </div>
  )
}
