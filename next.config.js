/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onedrive.live.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
