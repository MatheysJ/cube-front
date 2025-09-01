import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    target: "ESNext",
    module: "ESNext",
    moduleResolution: "Bundler",
    skipLibCheck: true,
    paths: {
      "@components": ["./src/components"],
    },
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  serverExternalPackages: ["@emotion/cache", "@emotion/react", "@emotion/utils", "@emotion/use-insertion-effect-with-fallbacks"],
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
