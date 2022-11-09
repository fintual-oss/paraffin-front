/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
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
        source: '/users/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/users/:path*`,
      },
      {
        source: '/users/auth/google_oauth2/callback',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}
        /users/auth/google_oauth2/callback`,
      },
      {
        source: '/users/auth/github/callback',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}
        /users/auth/github/callback`,
      },
      {
        source: '/assets/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_URL}/assets/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
