/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '', // Để trống nếu không dùng port cụ thể
        pathname: '/**', // Cho phép tất cả đường dẫn dưới hostname này
      },
    ],
  },
};

export default nextConfig;
