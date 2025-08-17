export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Massage Chair Review</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for comprehensive massage chair reviews, buying guides, and expert advice. 
              We help you find the perfect massage chair for your home and lifestyle.
            </p>
            <p className="text-gray-400 text-sm">
              © 2023 Massage Chair Review. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/buying-guide" className="text-gray-300 hover:text-white transition-colors">
                  Buying Guide
                </a>
              </li>
              <li>
                <a href="/usage-guide" className="text-gray-300 hover:text-white transition-colors">
                  Usage Guide
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-md font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/category/buying-guide" className="text-gray-300 hover:text-white transition-colors">
                  Buying Guide
                </a>
              </li>
              <li>
                <a href="/category/usage-guide" className="text-gray-300 hover:text-white transition-colors">
                  Usage Guide
                </a>
              </li>
              <li>
                <a href="/category/product-recommendations" className="text-gray-300 hover:text-white transition-colors">
                  Product Recommendations
                </a>
              </li>
              <li>
                <a href="/category/health-benefits" className="text-gray-300 hover:text-white transition-colors">
                  Health Benefits
                </a>
              </li>
              <li>
                <a href="/category/maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Disclaimer: We may earn a commission from purchases made through our affiliate links.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}