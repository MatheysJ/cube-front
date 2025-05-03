import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
};

export default nextConfig;
