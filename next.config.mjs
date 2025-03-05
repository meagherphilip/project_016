/** @type {import('next').NextConfig} */
const nextConfig = {
  // Improve client-side JavaScript loading
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improve hydration
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
