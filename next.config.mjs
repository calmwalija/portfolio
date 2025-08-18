/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd && process.env.BASE_PATH ? process.env.BASE_PATH : undefined
const assetPrefix = basePath ? `${basePath}/` : undefined

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath,
  assetPrefix,
}

export default nextConfig
