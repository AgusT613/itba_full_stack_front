const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.optimization.providedExports = true

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    }

    return config
  },
}

module.exports = nextConfig
