const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.optimization.providedExports = true

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    }

    return config
  },
  eslint: {
    dirs: ['utils', 'hooks', 'context', 'app', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

module.exports = nextConfig
