import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Usage Guide - Tips & Best Practices',
  description: 'Learn how to use your massage chair effectively and safely. Tips for getting the most out of your massage chair experience.',
};

export default function UsageGuidePage() {
  const articles = [
    {
      id: 1,
      title: 'How to Use Your Massage Chair Safely',
      slug: 'massage-chair-safety-tips',
      excerpt: 'Essential safety tips and best practices for using your massage chair',
      date: '2023-11-05',
      featuredImage: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: 'Maximizing Your Massage Chair Benefits',
      slug: 'maximize-massage-chair-benefits',
      excerpt: 'Tips to get the most therapeutic benefits from your massage chair sessions',
      date: '2023-10-30',
      featuredImage: 'https://via.placeholder.com/800x400',
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Usage Guide</h1>
          <p className="text-lg text-gray-600">
            Learn how to use your massage chair effectively and safely to maximize its therapeutic benefits.
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