/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set basePath for GitHub Pages
  basePath: '/dr-nivaldo-gonzalez-clinic',
  assetPrefix: '/dr-nivaldo-gonzalez-clinic',
}

module.exports = nextConfig
