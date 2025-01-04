/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
      {
        source: '/auth/:path*',
        destination: 'http://localhost:5000/auth/:path*',
      }
    ];
  },
  // Enable static file serving for development
  webpack: (config, { dev, isServer }) => {
    // Add your webpack config here if needed
    return config;
  },
};

module.exports = nextConfig;
