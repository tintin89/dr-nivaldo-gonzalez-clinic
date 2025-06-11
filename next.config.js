/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set basePath for GitHub Pages (replace 'your-repo-name' with actual repo name)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
}

module.exports = nextConfig
