import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['bufferutil', 'utf-8-validate', 'sharp'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
      },
    ],
  },
};

export default nextConfig;