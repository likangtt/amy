"use client";

import { useEffect, useState } from "react";
import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";
import { ArticleCard } from "@/app/_components/article-card";

// Mock article data (used when there's no data in localStorage)
const MOCK_ARTICLES = [
  {
    id: 5,
    title: "How to Get the Most from Your Massage Chair",
    slug: "getting-the-most-from-your-massage-chair",
    category: "usage-guide",
    excerpt: "Learn how to properly use the various features of your massage chair to achieve optimal relaxation and therapeutic effects, including zero gravity position, heat therapy, and air pressure massage.",
    featuredImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-08",
    status: "已发布"
  },
  {
    id: 6,
    title: "Health Benefits of Massage Chairs",
    slug: "health-benefits-of-massage-chairs",
    category: "usage-guide",
    excerpt: "Explore the many benefits of massage chairs for physical and mental health, from stress relief and improved sleep to alleviating chronic pain and enhancing immune system function.",
    featuredImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-25",
    status: "已发布"
  },
  {
    id: 7,
    title: "Massage Chair Maintenance Guide",
    slug: "massage-chair-maintenance-guide",
    category: "usage-guide",
    excerpt: "Learn how to properly maintain and clean your massage chair to ensure its long-term performance and durability, extending its lifespan.",
    featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-15",
    status: "已发布"
  },
  {
    id: 8,
    title: "Massage Chairs for Specific Health Conditions",
    slug: "massage-chairs-for-specific-health-conditions",
    category: "usage-guide",
    excerpt: "Explore how massage chairs can help manage various health conditions, including back pain, arthritis, stress, and sleep disorders.",
    featuredImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-10",
    status: "已发布"
  }
];

export default function UsageGuide() {
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
      
      // Filter published articles in the "usage-guide" category
      const usageGuideArticles = articlesArray.filter((article: any) => 
        article.category === "usage-guide" && article.status === "已发布"
      );
      
      // Sort by date in descending order (newest articles first)
      usageGuideArticles.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      
      setArticles(usageGuideArticles);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      
      // If there's an error, use mock data
      const usageGuideArticles = MOCK_ARTICLES.filter(article => 
        article.category === "usage-guide" && article.status === "已发布"
      );
      setArticles(usageGuideArticles);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-5xl mt-10 mb-6 text-blue-600">
            Massage Chair Usage Guide
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Browse our curated articles on massage chair usage to help you get the most out of your massage chair and achieve the best health experience.
          </p>
          
          <BannerAd position="top" className="mb-10" />
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
                  <p className="text-xl text-gray-600">No usage guide articles available yet</p>
                </div>
              )}
            </>
          )}
          
          <BannerAd position="bottom" className="mt-10" />
        </div>
      </Container>
    </main>
  );
}