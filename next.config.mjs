/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['jmmlabs.xyz'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
