import { hqnrd } from "@/constants";
import Image from "next/legacy/image";

export const ImageSlideList = ({ images }: { images: string[] }) => (
  <>
    {images.map((image, index) => (
      <div
        key={index}
        className="relative aspect-square w-full flex-[0_0_100%] justify-center overflow-hidden rounded-md"
      >
        <Image
          src={image}
          alt={`${hqnrd.name.long} slide-show-${index + 1}`}
          className="object-cover"
          layout="fill"
        />
      </div>
    ))}
  </>
);
