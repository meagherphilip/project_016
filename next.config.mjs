/** @type {import('next').NextConfig} */
const nextConfig = {
  // Improve client-side JavaScript loading
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Removed optimizeCss experimental feature that was causing build errors
};

export default nextConfig;
