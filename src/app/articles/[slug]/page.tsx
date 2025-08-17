import { Metadata } from 'next';

// 获取文章数据的函数
async function getArticleBySlug(slug: string) {
  // 在实际应用中，这应该从数据库或API获取数据
  // 这里只是示例
  try {
    // 临时模拟数据（英文内容）
    const articles = [
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
      }
    ];
    return articles.find((article) => article.slug === slug) || null;
  } catch (error) {
    console.error('Failed to fetch article:', error);
    return null;
  }
}

// 生成元数据函数
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // 从数据库或API获取文章数据
  const resolvedParams = await params;
  const article = await getArticleBySlug(resolvedParams.slug);
  
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
    // 临时模拟数据
    const articles = [
      { slug: 'best-massage-chairs-home-use' },
      { slug: 'massage-chair-maintenance' }
    ];
    
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch article list:', error);
    return [];
  }
}

// 文章页面组件 - 服务器组件
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    // 简单的404处理
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>The requested article does not exist or has been removed</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Homepage</a>
      </div>
    );
  }
  
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      {article.featuredImage && (
        <div className="mb-6">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
      
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      
      <div className="flex items-center text-gray-600 mb-6">
        <span>{new Date(article.date).toLocaleDateString('en-US')}</span>
        <span className="mx-2">•</span>
        <span>{article.category}</span>
        {article.tags && article.tags.length > 0 && (
          <>
            <span className="mx-2">•</span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}