/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.google.com', pathname: '/s2/favicons/**' },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
