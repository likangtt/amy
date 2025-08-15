"use client";

import { usePathname } from "next/navigation";

interface SchemaMarkupProps {
  title: string;
  description: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  type?: "WebSite" | "WebPage" | "Article" | "BlogPosting" | "Product" | "FAQPage";
}

export function SchemaMarkup({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  type = "WebPage",
}: SchemaMarkupProps) {
  const pathname = usePathname();
  const baseUrl = "https://www.massagechairreview.shop";
  const url = `${baseUrl}${pathname}`;
  
  // Basic website information
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Massage Chair Buying Guide",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  
  // Page specific information
  let pageSchema: any = {
    "@context": "https://schema.org",
    "@type": type,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "url": url
  };
  
  // If article type, add more information
  if (type === "Article" || type === "BlogPosting") {
    pageSchema = {
      ...pageSchema,
      "image": imageUrl || `${baseUrl}/images/default-og.jpg`,
      "datePublished": datePublished || new Date().toISOString(),
      "dateModified": dateModified || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": authorName || "Editorial Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Massage Chair Buying Guide",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/logo.png`
        }
      }
    };
  }
  
  // If product type, add product specific information
  if (type === "Product") {
    pageSchema = {
      ...pageSchema,
      "image": imageUrl || `${baseUrl}/images/default-product.jpg`,
      "brand": {
        "@type": "Brand",
        "name": "Various Brands"
      }
    };
  }
  
  // Combine schemas
  const schemas = [websiteSchema, pageSchema];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}