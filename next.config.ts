/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      { // ADD THIS NEW ENTRY FOR PLUS.UNSPLASH.COM
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;