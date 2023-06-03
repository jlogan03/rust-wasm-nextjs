/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
};
