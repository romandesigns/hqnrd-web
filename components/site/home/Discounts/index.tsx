import { Container, Content } from '@/components/layout'
import { Locale } from '@/i18n-config'
import DiscountCard from './DiscountCard'
import { SectionHeading } from '@/components/features/Heading'
import { images } from '@/helpers/localImages'

export function Discounts({ lang }: { lang: Locale }) {
  const discounts = {
    shortStay: 5,
    longStay: 8,
  }

  return (
    <Container>
      <Content>
        <SectionHeading
          title='Discounts AVAILABLE TODAY'
          description='Check out our latest discounts and offers.'
        />
      </Content>
      <Content className='flex justify-center items-stretch flex-col gap-8 md:flex-row p-4 !py-2 h-full'>
        <DiscountCard
          discountPercent={discounts.shortStay}
          ctaText={`Available when booking ${discounts.shortStay} days or more`}
          src={images[0]}
        />
        <DiscountCard
          discountPercent={discounts.longStay}
          ctaText={`Available when booking ${discounts.longStay} days or more`}
          src={images[1]}
          blurDataURL={images[images.length - 1]} // Using the last image as a placeholder
        />
      </Content>
    </Container>
  )
}
