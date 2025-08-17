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
      title: 'Best Massage Chairs for Home Use',
      slug: 'best-massage-chairs-home-use',
      excerpt: 'A comprehensive guide to selecting the best massage chair for your home',
      date: '2023-11-01',
      featuredImage: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: 'How to Choose the Right Massage Chair',
      slug: 'how-to-choose-massage-chair',
      excerpt: 'Key factors to consider when buying a massage chair',
      date: '2023-10-28',
      featuredImage: 'https://via.placeholder.com/800x400',
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