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
      title: 'The Unlikely Peacemaker in the Corner of the Room',
      slug: 'the-unlikely-peacemaker-in-the-corner-of-the-room',
      category: 'Buying Guide',
      date: '2025-08-16',
      excerpt: 'Discover how a massage chair can transform your living space into a sanctuary of peace and relaxation, becoming the unexpected centerpiece of wellness in your home.',
      featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 2,
      title: 'Top-Rated Massage Chairs: A Smart Investment in Your Well-being',
      slug: 'top-rated-massage-chairs-a-smart-investment-in-your-well-being',
      category: 'Buying Guide',
      date: '2025-08-16',
      excerpt: 'Explore the best massage chairs available today and learn why investing in quality massage therapy equipment is one of the smartest decisions for your health and wellness.',
      featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 3,
      title: 'Why High-End Massage Chairs Are Worth Considering in 2025',
      slug: 'why-high-end-massage-chairs-are-worth-considering-in-2025-lets-face-it-life-in-2025-isnt',
      category: 'Buying Guide',
      date: '2025-08-14',
      excerpt: 'Life in 2025 brings unique challenges and stresses. Discover why investing in a high-end massage chair might be the wellness solution you need for modern living.',
      featuredImage: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    }
  ];
}

// Function to fetch categories
async function getCategories() {
  return [
    { name: 'Buying Guide', slug: 'buying-guide', count: 7 },
    { name: 'Usage Guide', slug: 'usage-guide', count: 2 }
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
              <a href="/buying-guide" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center">
                Buying Guide
              </a>
              <a href="/usage-guide" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center">
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
        
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {categories.map((category) => (
              <a 
                key={category.slug} 
                href={`/${category.slug}`}
                className="group bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <h3 className="font-medium mb-2 text-lg group-hover:text-blue-600 transition-colors duration-200">{category.name}</h3>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">{category.count} articles</span>
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