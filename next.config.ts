import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   basePath: "",           // opcional, deixa vazio
  assetPrefix: "",        // opcional, deixa vazio
  trailingSlash: true,    // opcional, mantém
  images: { unoptimized: true },
};

export default nextConfig;
