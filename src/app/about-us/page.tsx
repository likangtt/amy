import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'About Us - Massage Chair Review',
  description: 'Learn about our mission to help you find the perfect massage chair for your needs.',
};

export default function AboutUsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Massage Chair Review, your trusted source for comprehensive massage chair reviews, 
              buying guides, and expert advice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We are dedicated to helping you make informed decisions when purchasing a massage chair. 
              Our team of experts thoroughly tests and reviews massage chairs to provide you with honest, 
              detailed insights that matter most to consumers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Comprehensive massage chair reviews and comparisons</li>
              <li>Expert buying guides to help you choose the right chair</li>
              <li>Usage tips and maintenance advice</li>
              <li>Latest industry news and trends</li>
              <li>Customer support and recommendations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 mb-6">
              With years of experience in the wellness and massage therapy industry, our team brings 
              deep knowledge of massage techniques, ergonomics, and product quality. We understand 
              what makes a great massage chair and how to match the right features to your specific needs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have questions or need personalized recommendations? We'd love to hear from you!
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                <strong>Email:</strong> info@massagechairreview.shop<br />
                <strong>Website:</strong> www.massagechairreview.shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}