import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    // Skip ESLint checks during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
