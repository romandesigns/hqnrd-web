import { Button } from '@/components/ui/button'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import Link from 'next/link'
import { CardCategoryDetail } from './Detail'

export function CategoryCard({
  category,
  details,
  lang,
  bgImage = '/assets/images/home/header/HQNRD-first-featured-image.webp',
  slug,
}: {
  category: string
  lang: Locale
  bgImage?: string
  slug: string
  details: { unitsCount: number; maxPerUnit: number }[]
}) {
  return (
    <article className='relative bg-[var(--card)]  flex flex-col gap-4 rounded-lg shadow-md ring-1 ring-[var(--card)] ring-offset-4 ring-offset-background'>
      <div className='flex items-center p-2 pt-4 pb-0  justify-start h-full'>
        {details.map((detail, index) => (
          <CardCategoryDetail
            key={index}
            units={detail.unitsCount}
            maxPerUnit={detail.maxPerUnit}
          />
        ))}
      </div>
      <div className='relative'>
        <div className='relative h-48 overflow-hidden'>
          <div className='absolute inset-0 flex items-center justify-center z-[3] bg-[var(--card)]/60 uppercase font-black text-2xl p-2 backdrop-blur-xs'>
            <h3>{category}</h3>
          </div>
          <Image
            src={bgImage}
            alt='Category Image'
            className='object-cover'
            fill
            sizes='100vw'
          />
        </div>
      </div>
      <div className='p-2 pt-0'>
        <Button size='full' className='uppercase text-xs font-bold' asChild>
          <Link href={`/${lang}/habitaciones/${slug}`}>Ver categorias</Link>
        </Button>
      </div>
    </article>
  )
}
