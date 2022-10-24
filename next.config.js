/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'fintualist.com',
      'images.unsplash.com',
      'img.freepik.com',
      'picsum.photos',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/api/:path*`,
      },
      {
        source: '/users/sign_in',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/sign_in`,
      },
      {
        source: '/users/sign_up',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/sign_up`,
      },
      {
        source: '/users/sign_out',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/sign_out`,
      },
      {
        source: '/api-docs/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/api-docs/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
