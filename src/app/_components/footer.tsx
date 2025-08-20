import Container from "@/app/_components/container";
import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-neutral-200 dark:border-gray-700 bg-transparent">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h4 className="text-xl font-bold mb-4">Massage Chair Review</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your trusted resource for professional massage chair reviews, buying guides, and usage tips to help you find the perfect massage chair.
              </p>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</Link></li>
                <li><Link href="/buying-guide" className="text-blue-600 dark:text-blue-400 hover:underline">Buying Guide</Link></li>
                <li><Link href="/usage-guide" className="text-blue-600 dark:text-blue-400 hover:underline">Usage Guide</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</Link></li>
                <li><Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Email: info@massagechairreview.shop</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} {CMS_NAME}. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
