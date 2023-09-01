/** @type {import('next').NextConfig} */
const nextConfig = {
  source: '/:path*',
  destination: '/',
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      nextConfig
    ];
  },
};
