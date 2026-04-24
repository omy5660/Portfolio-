/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Vercel handles image optimization automatically, but keeping unoptimized: true if you have large local assets */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
