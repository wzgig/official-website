import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/official-website",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
