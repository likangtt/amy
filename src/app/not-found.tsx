"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

// In App Router, we can't use next/head or export metadata from client components
// Instead, we'll use document.title and analytics events for SEO improvements

// Create a 404 page component that doesn't use useSearchParams
export default function NotFound() {
  // Add SEO-related effects
  useEffect(() => {
    // Update document title
    document.title = "Page Not Found | Massage Chair Buying Guide";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'The page you are looking for does not exist or has been moved.');
    
    // Add robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');
    
    // Send 404 event to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Page Not Found',
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_to: 'G-XXXXXXXXXX' // Replace with your actual GA measurement ID
      });
    }
  }, []);

  return (
    <Container>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            You might want to check out these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Return Home
            </Link>
            <Link 
              href="/buying-guide"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Buying Guide
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}