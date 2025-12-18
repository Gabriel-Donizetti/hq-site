import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",
  basePath: "/hq-site",
  assetPrefix: "/hq-site/",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/hq-site",
  },
};

export default nextConfig;
