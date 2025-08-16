"use client";

import { useEffect, useState } from "react";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { BannerAd } from "@/app/_components/banner-ad";
import { ArticleCard } from "@/app/_components/article-card";
import Link from "next/link";

// Mock article data (used when localStorage has no data)
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "2023 Best Massage Chairs",
    slug: "best-massage-chairs-2023",
    category: "buying-guide",
    excerpt: "We've tested the most popular massage chairs on the market to recommend the best options for different needs and budgets.",
    featuredImage: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    date: "2023-08-10",
    status: "published"
  },
  {
    id: 2,
    title: "Massage Chair Price Guide",
    slug: "massage-chair-price-guide",
    category: "buying-guide",
    excerpt: "Learn about the factors that affect massage chair prices and how to find the best value for your budget.",
    featuredImage: "https://images.unsplash.com/photo-1583600427617-5c73c916d1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "2023-08-05",
    status: "published"
  },
  {
    id: 3,
    title: "How to Choose the Perfect Massage Chair",
    slug: "how-to-choose-massage-chair",
    category: "buying-guide",
    excerpt: "Discover the key features to consider when selecting a massage chair that meets your specific needs and preferences.",
    featuredImage: "https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "2023-07-20",
    status: "published"
  },
  {
    id: 5,
    title: "Getting the Most from Your Massage Chair",
    slug: "getting-the-most-from-your-massage-chair",
    category: "usage-guide",
    excerpt: "Learn techniques and tips to maximize the benefits of your massage chair for optimal relaxation and therapeutic results.",
    featuredImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-08",
    status: "published"
  },
  {
    id: 6,
    title: "Health Benefits of Massage Chairs",
    slug: "health-benefits-massage-chairs",
    category: "usage-guide",
    excerpt: "Discover how regular use of massage chairs can improve your physical and mental wellbeing through various therapeutic mechanisms.",
    featuredImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-25",
    status: "published"
  },
  {
    id: 7,
    title: "Massage Chair Maintenance Tips",
    slug: "massage-chair-maintenance",
    category: "usage-guide",
    excerpt: "Essential maintenance guidelines to keep your massage chair in optimal condition and extend its lifespan for years of enjoyment.",
    featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-15",
    status: "published"
  }
];

export default function Index() {
  const [buyingGuideArticles, setBuyingGuideArticles] = useState<any[]>([]);
  const [usageGuideArticles, setUsageGuideArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get articles from localStorage
    try {
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // If no articles in localStorage, use mock data
      if (articlesArray.length === 0) {
        articlesArray = MOCK_ARTICLES;
      }
      
      // Filter buying guide articles
      const buyingGuides = articlesArray
        .filter((article: any) => 
          article.category === 'buying-guide' && 
          (article.status === 'published' || article.status === '已发布')
        )
        .sort((a: any, b: any) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 3);
      
      // Filter usage guide articles
      const usageGuides = articlesArray
        .filter((article: any) => 
          article.category === 'usage-guide' && 
          (article.status === 'published' || article.status === '已发布')
        )
        .sort((a: any, b: any) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 3);
      
      setBuyingGuideArticles(buyingGuides);
      setUsageGuideArticles(usageGuides);
    } catch (error) {
      console.error("Failed to get articles:", error);
      
      // If error, use mock data
      const buyingGuides = MOCK_ARTICLES
        .filter(article => article.category === 'buying-guide' && (article.status === 'published' || article.status === '已发布'))
        .slice(0, 3);
      
      const usageGuides = MOCK_ARTICLES
        .filter(article => article.category === 'usage-guide' && (article.status === 'published' || article.status === '已发布'))
        .slice(0, 3);
      
      setBuyingGuideArticles(buyingGuides);
      setUsageGuideArticles(usageGuides);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      <Container>
        <Intro />
        
        {/* Buying Guide section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">Buying Guide</h2>
            <Link href="/buying-guide" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {buyingGuideArticles.map((article) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title} 
                  description={article.excerpt} 
                  imageSrc={article.featuredImage} 
                  imageAlt={article.title} 
                  href={`/articles/${article.slug}`} 
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Usage Guide section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">Usage Guide</h2>
            <Link href="/usage-guide" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {usageGuideArticles.map((article) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title} 
                  description={article.excerpt} 
                  imageSrc={article.featuredImage} 
                  imageAlt={article.title} 
                  href={`/articles/${article.slug}`} 
                />
              ))}
            </div>
          )}
        </div>
        
        <BannerAd position="bottom" />
      </Container>
    </main>
  );
}