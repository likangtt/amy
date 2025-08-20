"use client";

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

// 客户端组件 - 处理文章显示和从localStorage获取数据
export default function ArticleClient({ 
  initialArticlePromise, 
  slug 
}: { 
  initialArticlePromise: Promise<any>; 
  slug: string 
}) {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 解析初始文章数据Promise
    initialArticlePromise.then(serverArticle => {
      if (serverArticle) {
        setArticle(serverArticle);
        setLoading(false);
        return;
      }
      
      // 尝试从localStorage获取文章数据
      try {
        // 尝试从localStorage获取文章
        let articlesData = localStorage.getItem('articles') || localStorage.getItem('blog_articles');
        if (articlesData) {
          const articles = JSON.parse(articlesData);
          const localArticle = articles.find((a: any) => a.slug === slug);
          
          if (localArticle) {
            setArticle(localArticle);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error('Error loading article from localStorage:', error);
      }
      
      // 如果都没有找到，设置loading为false
      setLoading(false);
    });
  }, [initialArticlePromise, slug]);
  
  if (loading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-8 px-4 text-center">
          <p>Loading article...</p>
        </div>
      </Layout>
    );
  }
  
  if (!article) {
    // 简单的404处理
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-8 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p>The requested article does not exist or has been removed</p>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Homepage</a>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
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
    </Layout>
  );
}