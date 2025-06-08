import { Locale } from '@/i18n-config'
import { ClientWrapper, Content, Header, Main } from '@/components/layout'
import React from 'react'

interface LayoutProps {
  params: Promise<{
    lang: Locale
  }>
}

export default async function Page({ params }: LayoutProps) {
  const { lang } = await params

  return (
    <ClientWrapper showNavigation showFooter lang={lang}>
      <Header>
        <Content>Header Component</Content>
      </Header>
      <Main>
        <Content>Main Component</Content>
      </Main>
    </ClientWrapper>
  )
}
