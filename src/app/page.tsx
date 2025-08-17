import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Review - Professional Guide & Reviews',
  description: 'Expert massage chair reviews, buying guides, usage tips, and maintenance advice to help you choose the perfect massage chair for your needs.',
  keywords: 'massage chair, massage chair reviews, buying guide, massage chair maintenance, massage chair benefits',
  openGraph: {
    title: 'Massage Chair Review - Professional Guide & Reviews',
    description: 'Expert massage chair reviews, buying guides, usage tips, and maintenance advice to help you choose the perfect massage chair for your needs.',
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
      title: 'Best Massage Chairs for Home Use',
      slug: 'best-massage-chairs-home-use',
      category: 'Buying Guide',
      date: '2023-11-01',
      excerpt: 'A comprehensive guide to selecting the best massage chair for your home',
      featuredImage: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: 'How to Maintain Your Massage Chair',
      slug: 'massage-chair-maintenance',
      category: 'Maintenance',
      date: '2023-11-05',
      excerpt: 'Tips and tricks for keeping your massage chair in top condition',
      featuredImage: 'https://via.placeholder.com/800x400',
    },
    {
      id: 3,
      title: 'Health Benefits of Regular Massage Chair Use',
      slug: 'health-benefits-massage-chairs',
      category: 'Health Benefits',
      date: '2023-11-10',
      excerpt: 'Discover the many health benefits of using a massage chair regularly',
      featuredImage: 'https://via.placeholder.com/800x400',
    }
  ];
}

// Function to fetch categories
async function getCategories() {
  return [
    { name: 'Buying Guide', slug: 'buying-guide', count: 5 },
    { name: 'Usage Guide', slug: 'usage-guide', count: 3 },
    { name: 'Product Recommendations', slug: 'product-recommendations', count: 7 },
    { name: 'Health Benefits', slug: 'health-benefits', count: 4 },
    { name: 'Maintenance', slug: 'maintenance', count: 2 }
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
            <p className="text-xl mb-6">Expert reviews, buying guides, and maintenance tips to help you make the right choice.</p>
            <a href="/articles/best-massage-chairs-home-use" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Read Our Buying Guide
            </a>
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
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <a 
                key={category.slug} 
                href={`/category/${category.slug}`}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium mb-1">{category.name}</h3>
                <span className="text-sm text-gray-500">{category.count} articles</span>
              </a>
            ))}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-gray-100 rounded-xl p-8">
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