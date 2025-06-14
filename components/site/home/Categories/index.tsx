import { SectionHeading } from '@/components/features/Heading'
import { Container, Content } from '@/components/layout'
import { hqnrd } from '@/constants'
import { Locale } from '@/i18n-config'
import { CategoryCard } from './CategoryCard'

export function Categories({ lang }: { lang: Locale }) {
  return (
    <Container>
      <Content>
        <SectionHeading
          showBorders
          title='Select from our Categories'
          description='Explore our categories and find the perfect room for your stay.'
        />
      </Content>
      <Content className='flex justify-center items-center p-4 !py-2'>
        <div className='max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {hqnrd.categories.map((category, index) => {
            if (category.details.length > 0) {
              return (
                <CategoryCard
                  key={index}
                  category={category.label}
                  slug={category.slug}
                  bgImage={category.bgImage}
                  lang={lang}
                  details={category.details.map(detail => ({
                    unitsCount: detail.units,
                    maxPerUnit: detail.maxPerUnit,
                  }))}
                />
              )
            }
          })}
        </div>
      </Content>
    </Container>
  )
}
