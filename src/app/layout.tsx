// 移除 Footer 导入
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { LanguageSwitcher } from "./_components/language-switcher";
import { Navigation } from "./_components/navigation";
import { Analytics } from "./_components/analytics";
import { BackToTop } from "./_components/back-to-top";
import { MobileBackButton } from "./_components/mobile-back-button";
import { SchemaMarkupServer } from "./_components/schema-markup-server";
import { ResourceHints } from "./_components/resource-hints";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Massage Chair Review | Professional Reviews & Usage Tips`,
  description: `Comprehensive massage chair buying guides, professional reviews, and usage tips to help you find the perfect massage chair and improve your health and quality of life.`,
  keywords: "massage chair, massage chair reviews, massage chair buying guide, massage chair usage tips, health living",
  openGraph: {
    title: "Massage Chair Review | Professional Reviews & Usage Tips",
    description: "Comprehensive massage chair buying guides, professional reviews, and usage tips to help you find the perfect massage chair.",
    images: [HOME_OG_IMAGE_URL],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Chair Review | Professional Reviews & Usage Tips",
    description: "Comprehensive massage chair buying guides, professional reviews, and usage tips to help you find the perfect massage chair.",
    images: [HOME_OG_IMAGE_URL],
  },
  alternates: {
    canonical: "https://www.massagechairreview.shop",
    languages: {
      'en': 'https://www.massagechairreview.shop/en',
      'de': 'https://www.massagechairreview.shop/de',
      'ja': 'https://www.massagechairreview.shop/ja',
      'ar': 'https://www.massagechairreview.shop/ar',
      'hi': 'https://www.massagechairreview.shop/hi',
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ResourceHints />
        <SchemaMarkupServer 
          title="Massage Chair Review | Professional Reviews & Usage Tips"
          description="Comprehensive massage chair buying guides, professional reviews, and usage tips to help you find the perfect massage chair."
          type="WebSite"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          inter.className,
          "text-gray-900 bg-gradient-to-b from-gray-50 to-white min-h-screen"
        )}
        suppressHydrationWarning
      >
        {/* Top title and navigation bar removed */}
        
        <div className="fixed top-4 right-4 flex space-x-4 z-10">
          <LanguageSwitcher />
        </div>
        
        <MobileBackButton />
        
        <div className="min-h-screen">{children}</div>
        <Analytics />
        <BackToTop />
      </body>
    </html>
  );
}
