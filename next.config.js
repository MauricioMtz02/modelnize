/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NODE_ENV !== 'production' ? '127.0.0.1' : 'mulata-blog.nesari.ga', 'ui-avatars.com'],
  },
  env: {
    URL_AVATAR: 'https://ui-avatars.com/api/?background=e3effc&color=007BFF',
    BACKEND_IMAGES: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/img' : 'https://mulata-blog.nesari.ga/img',
    URL_BACKEND: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/api' : 'https://mulata-blog.nesari.ga/api'
  },
  swcMinify: true,
}

module.exports = nextConfig
