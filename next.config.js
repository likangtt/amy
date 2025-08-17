/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用图像优化以提高兼容性
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