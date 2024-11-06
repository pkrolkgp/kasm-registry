/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://github.com/pkrolkgp/kasm-registry/1.0/icon.png',
    listUrl: 'https://github.com/pkrolkgp/kasm-registry',
    contactUrl: 'https://github.com/pkrolkgp/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
