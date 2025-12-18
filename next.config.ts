import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/hq-site",
  assetPrefix: "/hq-site/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: "/hq-site",
  },
};

export default nextConfig;
