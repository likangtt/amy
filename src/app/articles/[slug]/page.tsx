import { Metadata } from 'next';
import ArticleClient from './client';

// 动态生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug} | Massage Chair Review`,
    description: 'Detailed review of massage chairs',
  };
}

// 页面组件
export default function ArticlePage({ params }) {
  return <ArticleClient slug={params.slug} />;
}