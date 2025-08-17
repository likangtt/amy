import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Buying Guide - Expert Tips & Reviews',
  description: 'Comprehensive buying guide for massage chairs. Learn about features, prices, and find the perfect massage chair for your needs.',
};

export default function BuyingGuidePage() {
  const articles = [
    {
      id: 1,
      title: 'The Unlikely Peacemaker in the Corner of the Room',
      slug: 'the-unlikely-peacemaker-in-the-corner-of-the-room',
      excerpt: 'Discover how a massage chair can transform your living space into a sanctuary of peace and relaxation, becoming the unexpected centerpiece of wellness in your home.',
      date: '2025-08-16',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 2,
      title: 'Top-Rated Massage Chairs: A Smart Investment in Your Well-being',
      slug: 'top-rated-massage-chairs-a-smart-investment-in-your-well-being',
      excerpt: 'Explore the best massage chairs available today and learn why investing in quality massage therapy equipment is one of the smartest decisions for your health and wellness.',
      date: '2025-08-16',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 3,
      title: 'Why High-End Massage Chairs Are Worth Considering in 2025',
      slug: 'why-high-end-massage-chairs-are-worth-considering-in-2025-lets-face-it-life-in-2025-isnt',
      excerpt: 'Life in 2025 brings unique challenges and stresses. Discover why investing in a high-end massage chair might be the wellness solution you need for modern living.',
      date: '2025-08-14',
      featuredImage: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 4,
      title: 'How to Choose the Right Massage Chair for You',
      slug: 'how-to-choose-massage-chair',
      excerpt: 'A comprehensive guide to help you understand the key factors to consider when buying a massage chair, including massage technology, track type, zero gravity features, and more.',
      date: '2023-11-01',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 5,
      title: 'Best Massage Chairs for Home Use in 2023',
      slug: 'best-massage-chairs-2023',
      excerpt: 'Discover the most worthwhile massage chairs on the market in 2023, from luxury high-end models to compact space-saving options.',
      date: '2023-10-28',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 6,
      title: 'Massage Chair Types Comparison Guide',
      slug: 'massage-chair-types-comparison',
      excerpt: 'Compare different types of massage chairs including full-body, compact, and luxury models to find the perfect fit for your needs.',
      date: '2023-11-10',
      featuredImage: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 7,
      title: 'Massage Chair Budget Guide: How Much Should You Spend?',
      slug: 'massage-chair-budget-guide',
      excerpt: 'Complete budget guide for massage chairs. Learn what features you get at different price points and how to maximize your investment.',
      date: '2023-11-08',
      featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Buying Guide</h1>
          <p className="text-lg text-gray-600">
            Expert advice and comprehensive guides to help you choose the perfect massage chair for your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.featuredImage} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <a href={`/articles/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-US')}</span>
                  <a href={`/articles/${article.slug}`} className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}