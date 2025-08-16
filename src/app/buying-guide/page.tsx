"use client";

import { useEffect, useState } from "react";
import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";
import { ArticleCard } from "@/app/_components/article-card";

// Mock article data (used when there's no data in localStorage)
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "Best Massage Chairs of 2023",
    slug: "best-massage-chairs-2023",
    category: "buying-guide",
    excerpt: "Discover the most worthwhile massage chairs on the market in 2023, from luxury high-end models to compact space-saving options.",
    featuredImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-10",
    status: "已发布"
  },
  {
    id: 2,
    title: "How to Choose the Right Massage Chair for You",
    slug: "how-to-choose-massage-chair",
    category: "buying-guide",
    excerpt: "This guide will help you understand the key factors to consider when buying a massage chair, including massage techniques, track types, zero gravity features, and more.",
    featuredImage: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-05",
    status: "已发布"
  },
  {
    id: 3,
    title: "Massage Chair Price Guide: Comparing Products at Different Price Points",
    slug: "massage-chair-price-guide",
    category: "buying-guide",
    excerpt: "From entry-level to high-end luxury, learn what features massage chairs offer at different price points and how to get the best value within your budget.",
    featuredImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-20",
    status: "已发布"
  },
  {
    id: 4,
    title: "Massage Chair Size and Space Planning Guide",
    slug: "massage-chair-size-space-planning",
    category: "buying-guide",
    excerpt: "Before buying a massage chair, learn how to measure and plan your space to ensure the massage chair fits perfectly into your home environment.",
    featuredImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-15",
    status: "已发布"
  }
];

export default function BuyingGuide() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Load articles from localStorage when component mounts
  useEffect(() => {
    // Try to get articles from localStorage
    try {
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // If there are no articles in localStorage, use mock data
      if (articlesArray.length === 0) {
        articlesArray = MOCK_ARTICLES;
      }
      
      // Filter published articles in the "buying-guide" category
      const buyingGuideArticles = articlesArray.filter((article: any) => 
        article.category === "buying-guide" && article.status === "已发布"
      );
      
      // Sort by date in descending order (newest articles first)
      buyingGuideArticles.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      
      setArticles(buyingGuideArticles);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      
      // If there's an error, use mock data
      const buyingGuideArticles = MOCK_ARTICLES.filter(article => 
        article.category === "buying-guide" && article.status === "已发布"
      );
      setArticles(buyingGuideArticles);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-5xl mt-10 mb-6 text-blue-600">
            Massage Chair Buying Guide
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Browse our curated articles on massage chair buying guides to help you find the perfect massage chair for your needs.
          </p>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mx-auto">
                  {articles.map((article) => (
                    <ArticleCard 
                      key={article.id}
                      title={article.title}
                      description={article.excerpt}
                      imageSrc={article.featuredImage || "https://via.placeholder.com/800x400?text=无图片"}
                      imageAlt={article.title}
                      href={`/articles/${article.slug}`}
                      date={article.date}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No buying guide articles available yet</p>
                </div>
              )}
            </>
          )}
          
          <BannerAd position="top" className="my-10" />
          <BannerAd position="bottom" className="mt-10" />
        </div>
      </Container>
    </main>
  );
}
