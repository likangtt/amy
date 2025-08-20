import ArticleClient from './client';

// 文章页面组件 - 不使用类型注解
export default function ArticlePage(props) {
  // 将slug传递给客户端组件
  return <ArticleClient slug={props.params.slug} />;
}

// 生成静态路径
export function generateStaticParams() {
  // 静态文章列表
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
  
  return articles;
}
