import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/official-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
