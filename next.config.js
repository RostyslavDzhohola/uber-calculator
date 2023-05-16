/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ]
  },
  middleware: (handler) => (req, res) => {
    const middleware = require('./middleware').middleware
    middleware(req)
    return handler(req, res)
  }
}

module.exports = nextConfig
