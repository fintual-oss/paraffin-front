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
        source: '/users/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/:path*`,
      },
      {
        source: '/users/auth/google_oauth2/callback',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/auth/google_oauth2/callback`,
      },
      {
        source: '/assets/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/assets/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
