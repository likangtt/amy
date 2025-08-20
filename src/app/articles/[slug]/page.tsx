import ArticleClient from './client';

// 文章页面组件
export default function ArticlePage({ params }: { params: { slug: string } }) {
  // 将slug传递给客户端组件
  return <ArticleClient slug={params.slug} />;
}

// 生成静态路径
export async function generateStaticParams() {
  // 在实际应用中，这里应该从数据库或API获取所有文章的slug
  try {
    // 临时模拟数据 - 添加了新文章的slug
    const articles = [
      { slug: 'best-massage-chairs-home-use' },
      { slug: 'massage-chair-maintenance' },
      { slug: 'massage-chair-buying-guide-2025-best-4d-sl-track-chairs-for-home-use' },
      { slug: 'how-to-choose-massage-chair' },
      { slug: 'best-massage-chairs-2023' },
      { slug: 'massage-chair-types-comparison' },
      { slug: 'massage-chair-budget-guide' },
      { slug: 'proper-massage-chair-usage' },
      { slug: 'massage-chair-health-benefits' }
    ];
    
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch article list:', error);
    return [];
  }
}
