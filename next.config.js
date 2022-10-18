/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fintualist.com', 'images.unsplash.com', 'img.freepik.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_BACK_URL}/api/:path*`,
      },
      {
        source: '/users/sign_in',
        destination: `http://${process.env.NEXT_PUBLIC_BACK_URL}/users/sign_in`,
      },
      {
        source: '/users/sign_out',
        destination: `http://${process.env.NEXT_PUBLIC_BACK_URL}/users/sign_out`,
      },
      {
        source: '/api-docs/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_BACK_URL}/api-docs/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
