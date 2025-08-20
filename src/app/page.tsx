"use client";

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { addArticleToLocalStorage } from './utils/addArticleToLocalStorage';

// Function to fetch featured articles from localStorage
function getFeaturedArticles() {
  // This function will be called on the client side to get articles from localStorage
  if (typeof window === 'undefined') {
    // Return empty array during server-side rendering
    return [];
  }
  
  try {
    // Try both possible localStorage keys
    let articlesData = localStorage.getItem('articles') || localStorage.getItem('blog_articles');
    if (articlesData) {
      const articles = JSON.parse(articlesData);
      console.log('Found articles in localStorage:', articles);
      // Return only published articles, sorted by date (newest first)
      const publishedArticles = articles
        .filter((article: any) => article.status === 'Published' || article.status === '已发布')
        .sort((a: any, b: any) => new Date(b.date || b.createdAt).getTime() - new Date(a.date || a.createdAt).getTime())
        .slice(0, 6); // Show up to 6 featured articles
      console.log('Published articles:', publishedArticles);
      return publishedArticles;
    }
  } catch (error) {
    console.error('Error loading articles from localStorage:', error);
  }
  
  // Fallback articles if localStorage is empty
  return [
    {
      id: 3,
      title: 'Massage Chair Buying Guide 2025: Best 4D SL-Track Chairs for Home Use',
      slug: 'massage-chair-buying-guide-2025-best-4d-sl-track-chairs-for-home-use',
      category: 'Buying Guide',
      date: '2025-01-01',
      excerpt: 'Discover the best 4D SL-Track massage chairs for home use in 2025. Our comprehensive guide helps you make an informed decision.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 4,
      title: 'The Unlikely Peacemaker in the Corner of the Room',
      slug: 'the-unlikely-peacemaker-in-the-corner-of-the-room',
      category: 'Buying Guide',
      date: '2025-08-16',
      excerpt: 'Discover how a massage chair can become the unexpected mediator in your home, bringing relaxation and harmony to your living space.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 5,
      title: 'Top-Rated Massage Chairs: A Smart Investment in Your Well-being',
      slug: 'top-rated-massage-chairs-a-smart-investment-in-your-well-being',
      category: 'Buying Guide',
      date: '2025-08-16',
      excerpt: 'Explore why investing in a high-quality massage chair is one of the best decisions you can make for your long-term health and wellness.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 6,
      title: 'Why High-End Massage Chairs Are Worth Considering in 2025',
      slug: 'why-high-end-massage-chairs-are-worth-considering-in-2025-lets-face-it-life-in-2025-isnt',
      category: 'Buying Guide',
      date: '2025-08-14',
      excerpt: 'Let\'s face it — life in 2025 isn\'t getting any less stressful. Here\'s why a premium massage chair might be the wellness solution you need.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 1,
      title: 'How to Choose the Right Massage Chair for You',
      slug: 'how-to-choose-massage-chair',
      category: 'Buying Guide',
      date: '2023-11-01',
      excerpt: 'A comprehensive guide to help you understand the key factors to consider when buying a massage chair.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Best Massage Chairs for Home Use in 2023',
      slug: 'best-massage-chairs-2023',
      category: 'Buying Guide',
      date: '2023-10-28',
      excerpt: 'Discover the most worthwhile massage chairs on the market in 2023.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 7,
      title: 'Proper Massage Chair Usage',
      slug: 'proper-massage-chair-usage',
      category: 'Usage Guide',
      date: '2023-11-10',
      excerpt: 'Learn how to properly use your massage chair to maximize its benefits and extend its lifespan.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    },
    {
      id: 8,
      title: 'Massage Chair Health Benefits',
      slug: 'massage-chair-health-benefits',
      category: 'Usage Guide',
      date: '2023-11-15',
      excerpt: 'Discover the many health benefits of regular massage chair use, from stress relief to improved circulation.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      status: 'Published'
    }
  ];
}


export default function Home() {
  const [featuredArticles, setFeaturedArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 添加新文章到localStorage
    addArticleToLocalStorage();
    
    // Load articles from localStorage
    const articles = getFeaturedArticles();
    setFeaturedArticles(articles);
    
    // Calculate category counts based on actual articles
    const buyingGuideCount = articles.filter((article: any) => 
      article.category === 'buying-guide' || 
      article.category === 'Buying Guide' || 
      article.category === 'buying guide' ||
      (article.category && article.category.toLowerCase().includes('buying'))
    ).length;
    const usageGuideCount = articles.filter((article: any) => 
      article.category === 'usage-guide' || 
      article.category === 'Usage Guide' || 
      article.category === 'usage guide' ||
      (article.category && article.category.toLowerCase().includes('usage'))
    ).length;
    
    setCategories([
      { name: 'Buying Guide', slug: 'buying-guide', count: buyingGuideCount || 7 },
      { name: 'Usage Guide', slug: 'usage-guide', count: usageGuideCount || 2 }
    ]);
    
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Massage Chair</h1>
            <p className="text-xl mb-6">Expert reviews, buying guides, and usage tips to help you make the right choice for your wellness journey.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/buying-guide" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center">
                Buying Guide
              </a>
              <a href="/usage-guide" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center">
                Usage Guide
              </a>
            </div>
          </div>
        </section>
        
        {/* Latest Articles Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <a href="/articles" className="text-blue-600 hover:underline">
              View All Articles
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles
              .slice(0, 6)
              .map((article: any) => (
              <a 
                key={article.id} 
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {article.featuredImage && (
                  <div className="overflow-hidden">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-US')}</span>
                    <span className="text-blue-600 group-hover:text-blue-800 font-medium transition-colors duration-200">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
        {/* Buying Guide Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Buying Guide</h2>
            <a href="/buying-guide" className="text-blue-600 hover:underline">
              View All Articles
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles
              .filter((article: any) => 
                article.category === 'buying-guide' || 
                article.category === 'Buying Guide' || 
                article.category === 'buying guide' ||
                (article.category && article.category.toLowerCase().includes('buying'))
              )
              .slice(0, 3)
              .map((article: any) => (
              <a 
                key={article.id} 
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {article.featuredImage && (
                  <div className="overflow-hidden">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">Buying Guide</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-US')}</span>
                    <span className="text-blue-600 group-hover:text-blue-800 font-medium transition-colors duration-200">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
        {/* Usage Guide Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Usage Guide</h2>
            <a href="/usage-guide" className="text-blue-600 hover:underline">
              View All Articles
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles
              .filter((article: any) => 
                article.category === 'usage-guide' || 
                article.category === 'Usage Guide' || 
                article.category === 'usage guide' ||
                (article.category && article.category.toLowerCase().includes('usage'))
              )
              .slice(0, 3)
              .map((article: any) => (
              <a 
                key={article.id} 
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {article.featuredImage && (
                  <div className="overflow-hidden">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-sm text-green-600 font-medium">Usage Guide</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-US')}</span>
                    <span className="text-green-600 group-hover:text-green-800 font-medium transition-colors duration-200">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose the Right Massage Chair?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Stress Relief</h3>
                <p className="text-gray-600">Regular massage helps reduce stress hormones and promotes relaxation.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Home Convenience</h3>
                <p className="text-gray-600">Enjoy professional massage therapy in the comfort of your own home.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost Effective</h3>
                <p className="text-gray-600">Save money on spa visits with a one-time investment in quality.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-blue-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest massage chair reviews and guides.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}