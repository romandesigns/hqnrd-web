import React from "react";

export default function Footer({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  return (
    <footer className={className}>
      {/* Footer */}
      <p>Footer</p>
    </footer>
  );
}
