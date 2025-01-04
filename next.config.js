/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },
  images: {
    unoptimized: true, // Avoid image optimization when using 'output: export'
  },
  webpack: (config) => {
    // Disable persistent caching as a temporary fix for cache-related issues
    config.cache = false;
    return config;
  },
  // Uncomment the output option if needed for static exports
  // output: 'export',
};

module.exports = nextConfig;
