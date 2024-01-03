/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Next.js 14: https://github.com/vercel/next.js/issues/56041#issuecomment-1798141049
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
