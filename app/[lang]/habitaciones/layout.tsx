import { ClientWrapper } from '@/components/layout'
import { Locale } from '@/i18n-config'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}

export default async function RoomsLayout({ params, children }: LayoutProps) {
  const { lang } = await params

  return (
    <ClientWrapper showNavigation showFooter lang={lang}>
      {children}
    </ClientWrapper>
  )
}
