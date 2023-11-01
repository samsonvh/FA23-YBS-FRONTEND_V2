/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    SERVER: process.env.BACKEND_HOST + process.env.API_VERSION,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
