import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  serverExternalPackages: [
    "@emotion/cache",
    "@emotion/react",
    "@emotion/utils",
    "@emotion/use-insertion-effect-with-fallbacks",
  ],
};

export default nextConfig;

initOpenNextCloudflareForDev();
