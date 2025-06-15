import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com"
      },
      {
        protocol: "https",
        hostname: "swiperjs.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }, {
        protocol: "https",
        hostname: "cdn.pixabay.com"
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com"
      },
      {
        protocol: "https",
        hostname: "youtube.com"
      }
    ]
  }
};

export default nextConfig;
