import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Locale } from '@/i18n-config'

export function Logo({
  height = 25,
  width = 25,
  showTypography = true,
  className = '',
  lang,
}: {
  height?: number
  width?: number
  showTypography?: boolean
  className?: string
  lang: Locale
}) {
  return (
    <Link
      href={`/${lang}`}
      className={`flex gap-2 justify-center items-start ${className}`}
    >
      <Image
        src='/images/brand/HQNRD-logo.svg'
        height={height}
        width={width}
        alt='HQNRD Logo'
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      {showTypography && (
        <div className='flex flex-col justify-center items-start'>
          <h2 className='text-xs font-black uppercase'>
            Hotel Quinto Nivel RD
          </h2>
          <p className='text-xs text-muted-foreground'>Como estar en casa!</p>
        </div>
      )}
    </Link>
  )
}
