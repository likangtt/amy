"use client";

import { useState, useEffect } from "react";
import { Metadata } from 'next';

// 模拟文章数据
const ARTICLES = [
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

// 修改为客户端组件，使用与edit/[id]/page.tsx相似的方法处理params
export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>("");
  const [article, setArticle] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  // 解析params并设置slug
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  // 加载文章数据
  useEffect(() => {
    if (!slug) return; // 等待slug被设置
    
    try {
      // 查找指定slug的文章
      const foundArticle = ARTICLES.find((article) => article.slug === slug);
      
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Failed to fetch article:', error);
      setNotFound(true);
    }
  }, [slug]);

  // 如果文章不存在
  if (notFound) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>The requested article does not exist or has been removed</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Homepage</a>
      </div>
    );
  }

  // 如果文章数据还在加载中
  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <p>Loading article...</p>
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

// 为了SEO，添加元数据（这在客户端组件中不会被使用，但保留以便将来转换回服务器组件）
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = ARTICLES.find((article) => article.slug === params.slug);
  
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
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}