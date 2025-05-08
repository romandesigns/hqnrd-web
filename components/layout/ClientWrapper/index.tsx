"use client";

import React, { ReactNode } from "react";
import Navigation from "../Navigation";
import Main from "../Main";
import Footer from "../Footer";

export default function ClientWrapper({
  children,
  showNavigation,
  showFooter,
  mainClassName,
  navigationClassName,
  footerClassName,
}: {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
  mainClassName?: string;
  navigationClassName?: string;
  footerClassName?: string;
}) {
  return (
    <>
      {showNavigation && <Navigation className={navigationClassName} />}
      <Main className={mainClassName}>{children}</Main>
      {showFooter && <Footer className={footerClassName} />}
    </>
  );
}
