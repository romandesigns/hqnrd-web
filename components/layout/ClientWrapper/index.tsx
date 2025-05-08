"use client";

import React from "react";
import Navigation from "../Navigation";
import Main from "../Main";
import Footer from "../Footer";

export default function ClientWrapper({
  children,
  showNavigation = true,
  showFooter = true,
  mainClassName,
  navigationClassName,
  footerClassName,
}: {
  children: React.ReactNode;
  showNavigation: boolean;
  showFooter: boolean;
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
