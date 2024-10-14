/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-s3-bucket.s3.amazonaws.com'],
  },
  // Remove the experimental configuration
  // experimental: {
  //   esmExternals: false,
  // },
}

module.exports = nextConfig
