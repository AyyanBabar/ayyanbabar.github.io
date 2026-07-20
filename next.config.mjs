/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.16.4.207'],
};

export default nextConfig;
