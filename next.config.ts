import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [new URL('https://www.youtube.com/watch?v=jfKfPfyJRdk')],
  }
};

export default nextConfig;
