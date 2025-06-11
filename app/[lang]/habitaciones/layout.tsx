import { ClientWrapper } from '@/components/layout'
import { Locale } from '@/i18n-config'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}

// ✅ This works perfectly
export default function RoomsLayout({ params, children }: LayoutProps) {
  const { lang } = params

  return (
    <ClientWrapper showNavigation showFooter lang={lang}>
      {children}
    </ClientWrapper>
  )
}
