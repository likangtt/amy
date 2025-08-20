"use client";

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

// 获取文章数据的函数
function getArticleFromLocalStorage(slug: string) {
  try {
    // 尝试从localStorage获取文章
    let articlesData = localStorage.getItem('articles') || localStorage.getItem('blog_articles');
    if (articlesData) {
      const articles = JSON.parse(articlesData);
      return articles.find((a: any) => a.slug === slug);
    }
  } catch (error) {
    console.error('Error loading article from localStorage:', error);
  }
  return null;
}

// 获取预定义文章数据
function getFallbackArticle(slug: string) {
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
  return fallbackArticles.find((article) => article.slug === slug);
}

// 客户端组件 - 处理文章显示和从localStorage获取数据
export default function ArticleClient({ slug }: { slug: string }) {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 首先尝试从预定义文章中获取
    const fallbackArticle = getFallbackArticle(slug);
    if (fallbackArticle) {
      setArticle(fallbackArticle);
      setLoading(false);
      return;
    }
    
    // 然后尝试从localStorage获取
    const localArticle = getArticleFromLocalStorage(slug);
    if (localArticle) {
      setArticle(localArticle);
      setLoading(false);
      return;
    }
    
    // 如果都没有找到，设置loading为false
    setLoading(false);
  }, [slug]);
  
  // 设置文档标题
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Massage Chair Review`;
    } else if (!loading) {
      document.title = 'Article Not Found | Massage Chair Review';
    }
  }, [article, loading]);
  
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