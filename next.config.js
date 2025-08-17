/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，这对SEO更友好
  output: 'export',
  
  // 禁用图像优化，因为静态导出不支持
  images: {
    unoptimized: true,
  },
  
  // 添加重定向规则
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/articles',
        permanent: true,
      },
    ];
  },
  
  // 添加标头，包括允许搜索引擎索引的标头
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/admin/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;