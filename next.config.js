/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // required for GitHub Pages
  images: {
    unoptimized: true, // disables Image Optimization
  },
  basePath: '/abdhulla-frontend-dev', // required if deployed under a subfolder
};

module.exports = nextConfig;
