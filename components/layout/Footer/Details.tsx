import React from 'react'
import {
  FaEnvelope,
  FaInternetExplorer,
  HiLocationMarker,
  TbBrandWhatsappFilled,
} from '@/components/icons'

export function Details() {
  return (
    <div>
      <h3 className='uppercase text-xs font-bold'>Contact</h3>
      <ul className='space-y-6 py-4 text-xs md:py-10 md:text-[0.90rem] text-muted-foreground [&>li]:hover:text-foreground cursor-pointer'>
        <li className='flex items-center justify-start gap-2'>
          <span>
            <TbBrandWhatsappFilled />
          </span>
          <span>+1809-753-7500</span>
        </li>
        <li className='flex items-center justify-start gap-2'>
          <span>
            <FaEnvelope />
          </span>
          <span>hotelquintonivelrd@gmail.com</span>
        </li>
        <li className='flex items-center justify-start gap-2'>
          <span>
            <HiLocationMarker />
          </span>
          <span>Calle de la Mujer #2, Urb, Salcedo 34000, RD</span>
        </li>
        <li className='flex items-center justify-start gap-2'>
          <span>
            <FaInternetExplorer />
          </span>
          <span>https://hotelquintonivelrd.com</span>
        </li>
      </ul>
    </div>
  )
}
