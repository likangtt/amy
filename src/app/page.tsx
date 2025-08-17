import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Review - Professional Guide & Reviews',
  description: 'Expert massage chair reviews, buying guides, usage tips, and health benefits to help you choose the perfect massage chair for your needs.',
  keywords: 'massage chair, massage chair reviews, buying guide, massage chair usage, massage chair benefits',
  openGraph: {
    title: 'Massage Chair Review - Professional Guide & Reviews',
    description: 'Expert massage chair reviews, buying guides, usage tips, and health benefits to help you choose the perfect massage chair for your needs.',
    url: 'https://www.massagechairreview.shop',
    siteName: 'Massage Chair Review',
    images: [
      {
        url: 'https://www.massagechairreview.shop/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Massage Chair Review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Function to fetch featured articles
async function getFeaturedArticles() {
  // In a real application, this should fetch data from a database or API
  // This is just an example
  return [
    {
      id: 1,
      title: 'How to Choose the Right Massage Chair for You',
      slug: 'how-to-choose-massage-chair',
      category: 'Buying Guide',
      date: '2023-11-01',
      excerpt: 'A comprehensive guide to help you understand the key factors to consider when buying a massage chair, including massage technology, track type, zero gravity features, and more.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 2,
      title: 'Best Massage Chairs for Home Use in 2023',
      slug: 'best-massage-chairs-2023',
      category: 'Product Recommendations',
      date: '2023-10-28',
      excerpt: 'Discover the most worthwhile massage chairs on the market in 2023, from luxury high-end models to compact space-saving options.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 3,
      title: 'Massage Chair Types Comparison Guide',
      slug: 'massage-chair-types-comparison',
      category: 'Buying Guide',
      date: '2023-11-10',
      excerpt: 'Compare different types of massage chairs including full-body, compact, and luxury models to find the perfect fit for your needs.',
      featuredImage: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 4,
      title: 'Massage Chair Budget Guide',
      slug: 'massage-chair-budget-guide',
      category: 'Buying Guide',
      date: '2023-11-08',
      excerpt: 'Complete budget guide for massage chairs. Learn what features you get at different price points and how to maximize your investment.',
      featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 5,
      title: 'Proper Massage Chair Usage Guide',
      slug: 'proper-massage-chair-usage',
      category: 'Usage Guide',
      date: '2023-11-12',
      excerpt: 'Learn the correct way to use your massage chair for maximum therapeutic benefits while ensuring safety and comfort.',
      featuredImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 6,
      title: 'Massage Chair Health Benefits',
      slug: 'massage-chair-health-benefits',
      category: 'Usage Guide',
      date: '2023-11-15',
      excerpt: 'Discover the proven health benefits of regular massage chair use, from stress reduction to improved circulation and pain relief.',
      featuredImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    }
  ];
}

// Function to fetch categories
async function getCategories() {
  return [
    { name: 'Buying Guide', slug: 'buying-guide', count: 5 },
    { name: 'Usage Guide', slug: 'usage-guide', count: 3 },
    { name: 'Product Recommendations', slug: 'product-recommendations', count: 7 },
    { name: 'Health Benefits', slug: 'health-benefits', count: 4 }
  ];
}

export default async function Home() {
  const featuredArticles = await getFeaturedArticles();
  const categories = await getCategories();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Massage Chair</h1>
            <p className="text-xl mb-6">Expert reviews, buying guides, and usage tips to help you make the right choice for your wellness journey.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/buying-guide" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center">
                Buying Guide
              </a>
              <a href="/usage-guide" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors text-center">
                Usage Guide
              </a>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <a href="/articles" className="text-blue-600 hover:underline">
              View All Articles
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {article.featuredImage && (
                  <img 
                    src={article.featuredImage} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">
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
        </section>
        
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <a 
                key={category.slug} 
                href={`/${category.slug}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium mb-2">{category.name}</h3>
                <span className="text-sm text-gray-500">{category.count} articles</span>
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