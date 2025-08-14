/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_SETMORE_CALENDAR_URL: 'https://caddycruise.setmore.com/chad',
  },
  // headers() not supported with `output: 'export'`
};

module.exports = nextConfig;
