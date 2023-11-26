/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exclude: ["**/media/**", "**/docs/**", "**/dev/**"],
  fastRefresh: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: false, 
  concurrentFeatures: true,
}

module.exports = nextConfig
