import { Metadata } from 'next';
import ArticleClient from './client';

// 获取文章数据的函数
async function getArticleBySlug(slug: string) {
  // 在服务器端，我们不能直接访问localStorage
  // 这里我们需要使用一个API路由或者在客户端组件中处理
  
  // 临时模拟数据（作为后备）
  const fallbackArticles = [
    {
      id: 1,
      title: 'Best Massage Chairs for Home Use',
      slug: 'best-massage-chairs-home-use',
      category: 'Buying Guide',
      date: '2023-11-01',
      content: '<p>Finding the perfect massage chair for your home can be challenging. This guide will help you understand the key features to look for...</p>',
      excerpt: 'A comprehensive guide to selecting the best massage chair for your home',
      featuredImage: 'https://via.placeholder.com/800x400',
      tags: ['massage chairs', 'buying guide', 'home use']
    },
    {
      id: 2,
      title: 'How to Maintain Your Massage Chair',
      slug: 'massage-chair-maintenance',
      category: 'Maintenance',
      date: '2023-11-05',
      content: '<p>Regular maintenance of your massage chair can extend its lifespan and ensure optimal performance...</p>',
      excerpt: 'Tips and tricks for keeping your massage chair in top condition',
      featuredImage: 'https://via.placeholder.com/800x400',
      tags: ['maintenance', 'cleaning', 'longevity']
    },
    {
      id: 3,
      title: 'Massage Chair Buying Guide 2025: Best 4D SL-Track Chairs for Home Use',
      slug: 'massage-chair-buying-guide-2025-best-4d-sl-track-chairs-for-home-use',
      category: 'Buying Guide',
      date: '2025-01-01',
      content: '<p>Discover the best 4D SL-Track massage chairs for home use in 2025. Our comprehensive guide helps you make an informed decision.</p>',
      excerpt: 'Find the perfect 4D SL-Track massage chair for your home in 2025',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tags: ['4D massage chairs', 'SL-Track', '2025 guide', 'home use']
    }
  ];
  
  // 首先检查是否有匹配的预定义文章
  const fallbackArticle = fallbackArticles.find((article) => article.slug === slug);
  if (fallbackArticle) {
    return fallbackArticle;
  }
  
  // 如果没有匹配的预定义文章，返回null
  // 在客户端组件中，我们会尝试从localStorage获取
  return null;
}

// 生成元数据函数
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // 从数据库或API获取文章数据
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Massage Chair Review',
      description: 'The requested article does not exist or has been removed'
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt || `Read more about ${article.title}`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Read more about ${article.title}`,
      images: article.featuredImage ? [{ url: article.featuredImage }] : []
    }
  };
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

// 服务器组件 - 主页面
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // 从服务器获取文章数据
  const serverArticle = await getArticleBySlug(params.slug);
  
  // 将文章数据传递给客户端组件
  return <ArticleClient initialArticle={serverArticle} slug={params.slug} />;
}
