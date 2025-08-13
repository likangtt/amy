/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 移除i18n配置，因为在App Router中使用不同的方式处理国际化
  images: {
    domains: ['assets.vercel.com', 'images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 添加实验性配置以解决水合不匹配问题
  experimental: {
    // 这将忽略某些水合不匹配警告
    // 注意：这只是临时解决方案，最好是修复实际的不匹配问题
    appDir: true,
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;
