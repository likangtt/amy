import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Types Comparison - Find Your Perfect Match',
  description: 'Compare different types of massage chairs including full-body, compact, and luxury models to find the perfect fit for your needs.',
};

export default function MassageChairTypesComparisonPage() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Buying Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Massage Chair Types Comparison Guide
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <time dateTime="2023-11-10">November 10, 2023</time>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
            alt="Different types of massage chairs displayed in showroom" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Understanding the different types of massage chairs available is crucial for making the right purchase decision. 
            This comprehensive comparison will help you identify which type best suits your needs, space, and budget.
          </p>

          <h2>Full-Body Massage Chairs</h2>
          
          <h3>Features & Benefits</h3>
          <ul>
            <li><strong>Complete Coverage:</strong> Massage from neck to feet</li>
            <li><strong>Advanced Technology:</strong> 3D/4D massage mechanisms</li>
            <li><strong>Multiple Programs:</strong> Various massage styles and intensities</li>
            <li><strong>Zero Gravity:</strong> Optimal positioning for maximum relaxation</li>
          </ul>

          <h3>Best For</h3>
          <ul>
            <li>Large living spaces or dedicated massage rooms</li>
            <li>Users seeking comprehensive therapeutic benefits</li>
            <li>Those with chronic pain or muscle tension</li>
            <li>Premium massage experience enthusiasts</li>
          </ul>

          <h3>Price Range</h3>
          <p><strong>$3,000 - $15,000+</strong></p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-2">✅ Pros</h4>
            <ul className="text-green-700 list-disc pl-5">
              <li>Most comprehensive massage experience</li>
              <li>Advanced features and customization</li>
              <li>Therapeutic benefits for whole body</li>
              <li>Premium build quality and durability</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <h4 className="text-lg font-semibold text-red-800 mb-2">❌ Cons</h4>
            <ul className="text-red-700 list-disc pl-5">
              <li>Requires significant space</li>
              <li>Higher price point</li>
              <li>Complex setup and maintenance</li>
              <li>May be overwhelming for casual users</li>
            </ul>
          </div>

          <h2>Compact Massage Chairs</h2>

          <h3>Features & Benefits</h3>
          <ul>
            <li><strong>Space-Efficient:</strong> Designed for smaller rooms</li>
            <li><strong>Essential Functions:</strong> Core massage features without bulk</li>
            <li><strong>Easy Storage:</strong> Some models are portable or foldable</li>
            <li><strong>Quick Setup:</strong> Minimal assembly required</li>
          </ul>

          <h3>Best For</h3>
          <ul>
            <li>Apartments or smaller living spaces</li>
            <li>First-time massage chair buyers</li>
            <li>Budget-conscious consumers</li>
            <li>Occasional use or supplementary relaxation</li>
          </ul>

          <h3>Price Range</h3>
          <p><strong>$800 - $3,000</strong></p>

          <h2>Luxury Massage Chairs</h2>

          <h3>Features & Benefits</h3>
          <ul>
            <li><strong>Premium Materials:</strong> High-quality leather and components</li>
            <li><strong>Advanced AI:</strong> Smart body scanning and customization</li>
            <li><strong>Wellness Integration:</strong> Heat therapy, aromatherapy, chromotherapy</li>
            <li><strong>Smart Connectivity:</strong> App control and voice commands</li>
          </ul>

          <h3>Best For</h3>
          <ul>
            <li>Luxury home environments</li>
            <li>Users with specific therapeutic needs</li>
            <li>Technology enthusiasts</li>
            <li>Those seeking spa-like experiences at home</li>
          </ul>

          <h3>Price Range</h3>
          <p><strong>$8,000 - $25,000+</strong></p>

          <h2>Massage Chair Pads & Cushions</h2>

          <h3>Features & Benefits</h3>
          <ul>
            <li><strong>Portability:</strong> Use on any chair or surface</li>
            <li><strong>Affordability:</strong> Entry-level massage solution</li>
            <li><strong>Versatility:</strong> Multiple placement options</li>
            <li><strong>Storage:</strong> Easy to store when not in use</li>
          </ul>

          <h3>Best For</h3>
          <ul>
            <li>Renters or temporary living situations</li>
            <li>Office use or travel</li>
            <li>Very limited budgets</li>
            <li>Testing massage therapy benefits</li>
          </ul>

          <h3>Price Range</h3>
          <p><strong>$100 - $800</strong></p>

          <h2>Comparison Table</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Feature</th>
                  <th className="px-4 py-2 border-b text-center">Full-Body</th>
                  <th className="px-4 py-2 border-b text-center">Compact</th>
                  <th className="px-4 py-2 border-b text-center">Luxury</th>
                  <th className="px-4 py-2 border-b text-center">Pads/Cushions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b font-medium">Space Required</td>
                  <td className="px-4 py-2 border-b text-center">Large</td>
                  <td className="px-4 py-2 border-b text-center">Medium</td>
                  <td className="px-4 py-2 border-b text-center">Large</td>
                  <td className="px-4 py-2 border-b text-center">Minimal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-b font-medium">Massage Coverage</td>
                  <td className="px-4 py-2 border-b text-center">Full Body</td>
                  <td className="px-4 py-2 border-b text-center">Upper Body</td>
                  <td className="px-4 py-2 border-b text-center">Full Body+</td>
                  <td className="px-4 py-2 border-b text-center">Targeted</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-medium">Customization</td>
                  <td className="px-4 py-2 border-b text-center">High</td>
                  <td className="px-4 py-2 border-b text-center">Medium</td>
                  <td className="px-4 py-2 border-b text-center">Very High</td>
                  <td className="px-4 py-2 border-b text-center">Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-b font-medium">Setup Complexity</td>
                  <td className="px-4 py-2 border-b text-center">High</td>
                  <td className="px-4 py-2 border-b text-center">Low</td>
                  <td className="px-4 py-2 border-b text-center">High</td>
                  <td className="px-4 py-2 border-b text-center">None</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Making Your Decision</h2>

          <h3>Consider Your Priorities</h3>
          <ol>
            <li><strong>Space Availability:</strong> Measure your room and consider clearance needs</li>
            <li><strong>Budget Range:</strong> Set a realistic budget including delivery and setup</li>
            <li><strong>Usage Frequency:</strong> Daily use justifies higher investment</li>
            <li><strong>Health Needs:</strong> Specific conditions may require advanced features</li>
            <li><strong>User Preferences:</strong> Consider all household members who will use it</li>
          </ol>

          <h3>Questions to Ask Yourself</h3>
          <ul>
            <li>How much space do I have available?</li>
            <li>What's my maximum budget?</li>
            <li>Who will be using the chair?</li>
            <li>What are my primary health concerns?</li>
            <li>Do I prefer simple or advanced controls?</li>
            <li>Is portability important to me?</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Recommendation</h3>
            <p className="text-blue-800">
              For most users, a mid-range full-body massage chair ($3,000-$6,000) offers the best balance 
              of features, quality, and value. However, your specific needs, space, and budget should 
              ultimately guide your decision.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}