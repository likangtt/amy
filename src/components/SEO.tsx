import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

// 这个组件现在只是一个占位符，实际的SEO通过Metadata API处理
export default function SEO(props: SEOProps) {
  // 在App Router中，SEO通过页面的metadata导出处理
  // 这个组件保持为空，避免在客户端组件中使用Head
  return null;
}

// 导出一个辅助函数来生成metadata
export function generateSEOMetadata({
  title,
  description,
  keywords = '',
  image = '',
  url = '',
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://您的网站域名';
  const fullUrl = url ? url : siteUrl;
  const fullImage = image ? image : `${siteUrl}/default-og-image.jpg`;
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'website',
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: url,
    },
  };
}