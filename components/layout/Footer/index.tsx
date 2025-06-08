import clsx from 'clsx'
import { Content } from '..'
import { Fqa, Logo } from '@/components/features'
import { Locale } from '@/i18n-config'
import { Details } from './Details'
import { Social } from './Social'
import { Others } from './Others'
import { Map } from './Map'
export default function Footer({
  className,
  lang,
}: {
  className?: string
  lang: Locale
}) {
  return (
    <footer className={clsx('px-2 py-6', className)}>
      <Content className='bg-secondary rounded-lg p-2 lg:p-10'>
        <div className='flex justify-start items-center pb-6 mb-12'>
          <Logo lang={lang} />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <Details />
          <div>
            <Social />
            <Others className='mt-4' />
          </div>
          <Map />
        </div>
        <Fqa />
      </Content>
    </footer>
  )
}
