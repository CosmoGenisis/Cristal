/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {},
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
