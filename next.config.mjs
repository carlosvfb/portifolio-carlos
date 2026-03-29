/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com'],
      },
    experimental: {
      cpus: 1,
    },
};

export default nextConfig;
