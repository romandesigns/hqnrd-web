import Container from "@/components/layout/Container";
import { Locale } from "@/i18n-config";

export default function Header({ lang }: { lang: Locale }) {
  return (
    <header className="">
      <Container wrapperClass="grid grid-cols-1 md:grid-cols-2  grid-rows-2 sm:gap-2 h-full md:grid-cols-2 h-auto py-20">
        <article className="bg-pink-300 aspect-square">
          <h2>Text Content</h2>
        </article>
        <article className="relative flex h-auto w-full items-center justify-center p-2">
          {/* Top left image */}
          <figure className="absolute top-6 left-6 aspect-square h-auto w-[25%] rounded-md border-8 border-muted" />
          {/* Top Right image */}
          <figure className="glass absolute top-6 right-6 z-[2] aspect-square h-auto w-[25%] rounded-md shadow-lg">
            <div className="relative aspect-square h-full w-full overflow-hidden rounded-md bg-red-400" />
          </figure>
          {/* Main image */}
          <figure className="glass relative z-[1] aspect-square w-5/6 overflow-hidden rounded-md">
            <div className="relative aspect-square h-full w-full overflow-hidden rounded-md bg-yellow-500" />
          </figure>
          {/* Bottom left image */}
          <figure className="glass absolute bottom-10 left-2 z-[2] aspect-square h-auto w-[30%] shadow-lg">
            <div className="relative aspect-square h-full w-full overflow-hidden rounded-md bg-green-500" />
          </figure>
          {/* Bottom Right image */}
          <figure className="glass absolute bottom-2 right-2 z-[0] aspect-square h-auto w-[35%] rounded-md">
            <div className="relative aspect-square h-full w-full overflow-hidden rounded-md bg-purple-300" />
          </figure>
        </article>
      </Container>
    </header>
  );
}
