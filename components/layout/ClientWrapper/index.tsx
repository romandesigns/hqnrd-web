'use client'

import { ReactNode } from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'

export default function ClientWrapper({
  children,
  showNavigation,
  showFooter,
  navigationClassName,
  footerClassName,
  lang,
}: {
  children: ReactNode
  showNavigation?: boolean
  showFooter?: boolean
  navigationClassName?: string
  footerClassName?: string
  lang: string
}) {
  return (
    <>
      {showNavigation && (
        <Navigation className={navigationClassName} lang={lang} />
      )}
      {children}
      {showFooter && <Footer className={footerClassName} lang={lang} />}
    </>
  )
}
