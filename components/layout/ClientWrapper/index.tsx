"use client";

import React, { ReactNode } from "react";
import Navigation from "../Navigation";
import Main from "../Main";
import Footer from "../Footer";

export default function ClientWrapper({
  children,
  showNavigation,
  showFooter,
  navigationClassName,
  footerClassName,
  lang,
}: {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
  navigationClassName?: string;
  footerClassName?: string;
  lang: string;
}) {
  return (
    <>
      {showNavigation && (
        <Navigation className={navigationClassName} lang={lang} />
      )}
      {children}
      {showFooter && <Footer className={footerClassName} />}
    </>
  );
}
