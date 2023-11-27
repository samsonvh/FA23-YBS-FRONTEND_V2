/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    BACKEND_SERVER: process.env.BACKEND_SERVER,
    API_VERSION_1: process.env.API_VERSION_1,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
