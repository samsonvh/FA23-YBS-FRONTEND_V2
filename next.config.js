/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER: process.env.BACKEND_HOST + process.env.API_VERSION,
    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
}

module.exports = nextConfig
