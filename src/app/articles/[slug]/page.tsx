"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";
import { SidebarAd } from "@/app/_components/sidebar-ad";
import { SocialShare } from "@/app/_components/social-share";
import Link from "next/link";

// Mock article data (used when no data in localStorage)
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "Best Massage Chairs of 2023",
    slug: "best-massage-chairs-2023",
    category: "buying-guide",
    tags: ["massage chairs", "rankings", "2023", "recommendations"],
    content: "# Best Massage Chairs of 2023\n\nIn this article, we'll introduce you to the most popular massage chair models on the market in 2023. Our review team has spent hundreds of hours testing and researching, comprehensively evaluating various massage chairs in terms of comfort, functionality, durability, and price.\n\n## Evaluation Criteria\n\nOur evaluation criteria include:\n\n- Massage effectiveness and comfort\n- Functionality diversity\n- Material quality and durability\n- Noise level\n- Price and value for money\n- Warranty policy\n\n## Ranking Details\n\n### 1. Panasonic EP-MA73\n\nThe Panasonic EP-MA73 ranks first with its excellent massage effect and advanced ergonomic design. It is equipped with a 3D massage core and multiple massage modes that can precisely target various parts of the body.\n\n**Pros:**\n- Excellent neck and lower back massage effect\n- Advanced body sensing technology\n- Quiet operation\n\n**Cons:**\n- Higher price point\n- Large size\n\n### 2. Ogawa OG-7588\n\nThe Ogawa OG-7588 offers excellent value for money, with multiple massage functions at a relatively affordable price.\n\n**Pros:**\n- Great value for money\n- Zero gravity design\n- Full-body massage coverage\n\n**Cons:**\n- Massage intensity may be too strong for some users\n- Average sound quality for Bluetooth music function\n\n## Conclusion\n\nChoosing the right massage chair requires considering personal needs, budget, and space limitations. We hope our ranking helps you find the most suitable product.",
    excerpt: "We've evaluated the most popular massage chairs on the market in 2023, conducting a comprehensive analysis of comfort, functionality, durability, and price to recommend the best options for you.",
    featuredImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    status: "published",
    date: "2023-08-10"
  },
  {
    id: 2,
    title: "How to Choose the Right Massage Chair",
    slug: "how-to-choose-massage-chair",
    category: "buying-guide",
    tags: ["massage chairs", "buying", "guide", "tips"],
    content: "# How to Choose the Right Massage Chair\n\nChoosing a suitable massage chair can be confusing with so many models and features available on the market. This guide will help you understand the key factors to consider when purchasing a massage chair.\n\n## Understanding Your Needs\n\nBefore you start shopping, consider these questions:\n\n- Which areas of pain or tension do you primarily want to relieve?\n- What type of massage do you prefer (shiatsu, kneading, tapping, etc.)?\n- What is your budget?\n- How much space do you have for a massage chair?\n\n## Key Features of Massage Chairs\n\n### Massage Tracks\n\nMassage chairs have two main types of tracks:\n\n- **S-Track**: Follows the natural curve of the spine\n- **L-Track**: Extends to the buttocks and thighs\n\n### Massage Techniques\n\nDifferent massage chairs offer various massage techniques:\n\n- Shiatsu massage\n- Kneading\n- Tapping\n- Rolling\n- Swedish\n\n### Zero Gravity Function\n\nThe zero gravity position can reduce spinal pressure and enhance massage effects. This is an important feature worth considering.\n\n### Other Considerations\n\n- **Size and Weight**: Ensure the massage chair fits your space\n- **Materials and Durability**: Choose chairs made of high-quality materials\n- **Noise Level**: Consider the noise during operation\n- **Warranty**: Check warranty terms and duration\n\n## Budget Considerations\n\nMassage chair prices range from a few thousand to tens of thousands of dollars. While high-end models offer more features and better massage experiences, mid-range chairs can usually meet most people's needs.\n\n## Conclusion\n\nChoosing the right massage chair requires considering personal needs, available space, and budget. By understanding different features and technologies, you can make an informed decision and select a chair that provides maximum health benefits.",
    excerpt: "This guide will help you understand the key factors to consider when buying a massage chair, including massage techniques, track types, zero gravity function, and more, allowing you to make an informed choice based on your personal needs and budget.",
    featuredImage: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    status: "published",
    date: "2023-08-05"
  },
  {
    id: 5,
    title: "Getting the Most from Your Massage Chair",
    slug: "getting-the-most-from-your-massage-chair",
    category: "usage-guide",
    excerpt: "Learn how to properly use the various functions of your massage chair to achieve optimal relaxation and therapeutic effects, including zero gravity position, heat therapy, and air compression massage.",
    content: "# Getting the Most from Your Massage Chair\n\nA massage chair is an important health investment, but understanding how to use it correctly is crucial to obtaining maximum benefits. This guide will help you make the most of your massage chair's various functions.\n\n## Basic Usage Tips\n\n### Proper Sitting Posture\n\n- Ensure your back is fully against the backrest\n- Your head should rest on the headrest\n- Place your arms on the armrests\n- Extend your legs into the leg rests\n\n### Massage Duration\n\n- First-time use: 5-10 minutes recommended\n- Regular use: 15-30 minutes\n- Avoid extended use, which may cause muscle soreness\n\n## Advanced Feature Guide\n\n### Zero Gravity Mode\n\nThe zero gravity position simulates the posture of astronauts during launch and can:\n\n- Reduce spinal pressure\n- Improve blood circulation\n- Enhance massage effects\n\nTry entering the zero gravity position before starting the massage program.\n\n### Heat Therapy Function\n\nHeat therapy can:\n\n- Relax tense muscles\n- Enhance massage effects\n- Improve blood circulation\n\nRecommended during cold weather or when muscles feel particularly tense.\n\n### Air Compression Massage\n\nAir compression massage is particularly suitable for:\n\n- Leg and foot massage\n- Improving lower limb circulation\n- Reducing leg fatigue and swelling\n\n## Personalizing Your Massage Experience\n\n### Creating Custom Programs\n\nMany high-end massage chairs allow you to save custom settings:\n\n- Try different preset programs\n- Adjust intensity, speed, and areas\n- Save your favorite combinations\n\n### Combining with Other Relaxation Techniques\n\n- Drink a glass of warm water before massage\n- Play soothing music\n- Use an essential oil diffuser to create ambiance\n- Dim the lights\n\n## Maintenance\n\nRegular maintenance can extend the life of your massage chair:\n\n- Wipe the leather surface after each use\n- Regularly check power cords and plugs\n- Follow the manufacturer's maintenance recommendations\n\n## Conclusion\n\nBy properly using and maintaining your massage chair, you can maximize health benefits and extend its lifespan. Remember to listen to your body and adjust massage settings according to your personal needs.",
    featuredImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-08",
    status: "published"
  },
  {
    id: 6,
    title: "Health Benefits of Massage Chairs",
    slug: "health-benefits-of-massage-chairs",
    category: "usage-guide",
    excerpt: "Explore the many benefits of massage chairs for physical and mental health, from stress relief and improved sleep to chronic pain reduction and enhanced immune system function.",
    content: "# Health Benefits of Massage Chairs\n\nWith the fast pace and high stress of modern life, massage chairs have become important tools for stress relief and health improvement in many homes. This article explores the various health benefits provided by massage chairs.\n\n## Physical Health Benefits\n\n### Relieving Muscle Pain and Tension\n\nMassage chairs can:\n\n- Relax tense muscles\n- Reduce back, neck, and shoulder pain\n- Help recover muscles after exercise\n- Improve muscle flexibility\n\n### Improving Blood Circulation\n\nRegular use of massage chairs can:\n\n- Promote blood circulation\n- Increase oxygen and nutrient delivery to tissues\n- Help clear metabolic waste\n- Lower blood pressure\n\n### Relieving Joint Pain\n\nFor arthritis and other joint issues, massage chairs can:\n\n- Reduce pressure around joints\n- Increase range of motion\n- Reduce inflammation\n\n## Mental Health Benefits\n\n### Reducing Stress and Anxiety\n\nMassage can:\n\n- Lower levels of the stress hormone cortisol\n- Increase release of endorphins and serotonin\n- Create time for relaxation and meditation\n\n### Improving Sleep Quality\n\nUsing a massage chair in the evening can:\n\n- Help the body relax in preparation for sleep\n- Reduce insomnia symptoms\n- Increase deep sleep time\n\n### Enhancing Mood\n\nRegular massage can:\n\n- Reduce symptoms of depression\n- Increase dopamine and serotonin levels\n- Provide emotional support\n\n## Benefits for Specific Health Conditions\n\n### Back Pain Management\n\nMassage chairs are particularly beneficial for chronic back pain sufferers:\n\n- Relieve muscle tension\n- Improve spinal alignment\n- Reduce nerve compression\n\n### Headache Relief\n\nFor tension headaches and migraines:\n\n- Relax neck and shoulder muscles\n- Reduce headache frequency and intensity\n- Provide non-medication pain management options\n\n### Immune System Support\n\nResearch suggests massage can:\n\n- Increase white blood cell activity\n- Enhance immune system function\n- Help the body resist illness\n\n## Long-term Health Benefits\n\n### Posture Improvement\n\nRegular use of massage chairs can:\n\n- Relax muscles tensed by poor posture\n- Encourage better spinal alignment\n- Reduce pain caused by poor posture\n\n### Stress Management\n\nIncorporating massage chairs into daily life can:\n\n- Create healthy stress management habits\n- Provide regular relaxation time\n- Improve overall quality of life\n\n## Conclusion\n\nMassage chairs are not just luxury items; they are health tools that provide numerous health benefits. From relieving physical pain to improving mental health, regular use of massage chairs can be an important part of a comprehensive health plan.",
    featuredImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-25",
    status: "published"
  }
];

// Simple function to convert Markdown to HTML
function markdownToHtml(markdown: string) {
  // This is a very simple implementation; in a real application, use a professional Markdown parsing library
  let html = markdown
    // Handle headings
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    // Handle bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Handle lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n)+/g, '<ul class="list-disc pl-5 mb-4">$&</ul>')
    // Handle paragraphs
    .replace(/^(?!<[uh]|<li|\n)(.+)$/gm, '<p class="mb-4">$1</p>');
  
  return html;
}

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  
  useEffect(() => {
    // Try to get articles from localStorage
    try {
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // If no articles in localStorage, use mock data
      if (articlesArray.length === 0) {
        articlesArray = MOCK_ARTICLES;
      }
      
      // Find current article
      const currentArticle = articlesArray.find((a: any) => a.slug === slug);
      
      if (currentArticle) {
        setArticle(currentArticle);
        
        // Find related articles (other articles in the same category)
        const related = articlesArray
          .filter((a: any) => 
            a.category === currentArticle.category && 
            a.slug !== currentArticle.slug &&
            a.status === "published"
          )
          .slice(0, 3);
        
        setRelatedArticles(related);
      } else {
        // If article not found, redirect to home page
        router.push('/');
      }
    } catch (error) {
      console.error("Failed to get articles:", error);
      
      // If error, use mock data
      const currentArticle = MOCK_ARTICLES.find(a => a.slug === slug);
      
      if (currentArticle) {
        setArticle(currentArticle);
        
        // Find related articles (other articles in the same category)
        const related = MOCK_ARTICLES
          .filter(a => 
            a.category === currentArticle.category && 
            a.slug !== currentArticle.slug &&
            a.status === "published"
          )
          .slice(0, 3);
        
        setRelatedArticles(related);
      } else {
        // If article not found, redirect to home page
        router.push('/');
      }
    } finally {
      setLoading(false);
    }
  }, [slug, router]);
  
  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Container>
    );
  }
  
  if (!article) {
    return null; // Handling redirect
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Get category name
  const getCategoryName = (categorySlug: string) => {
    const categoryMap: {[key: string]: string} = {
      'buying-guide': 'Buying Guide',
      'usage-guide': 'Usage Guide',
      'product-recommendations': 'Product Recommendations',
      'health-benefits': 'Health Benefits',
      'maintenance': 'Maintenance'
    };
    
    return categoryMap[categorySlug] || categorySlug;
  };
  
  // Get category link
  const getCategoryLink = (categorySlug: string) => {
    return `/${categorySlug}`;
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Article header */}
          <div className="mb-8">
            <Link 
              href={getCategoryLink(article.category)}
              className="text-blue-600 hover:underline font-semibold"
            >
              {getCategoryName(article.category)}
            </Link>
            <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{formatDate(article.date)}</span>
              <span className="mx-2">•</span>
              <span>Reading time: {Math.ceil(article.content.length / 500)} minutes</span>
            </div>
          </div>
          
          {/* Featured image */}
          {article.featuredImage && (
            <div className="mb-8">
              <img 
                src={article.featuredImage} 
                alt={article.title} 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
          
          <BannerAd position="top" />
          
          {/* Article content */}
          <div 
            className="prose max-w-none my-8"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
          />
          
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 my-8">
              {article.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Social share */}
          <div className="my-8">
            <h3 className="text-lg font-semibold mb-4">Share This Article</h3>
            <SocialShare 
              title={article.title} 
              url={`/articles/${article.slug}`}
            />
          </div>
          
          <BannerAd position="bottom" />
          
          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id} 
                    href={`/articles/${relatedArticle.slug}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {relatedArticle.featuredImage && (
                        <img 
                          src={relatedArticle.featuredImage} 
                          alt={relatedArticle.title} 
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            {/* Table of contents */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-3">Table of Contents</h3>
              <div 
                className="text-sm"
                dangerouslySetInnerHTML={{ 
                  __html: article.content
                    .split('\n')
                    .filter((line: string) => line.startsWith('##'))
                    .map((line: string) => {
                      const title = line.replace(/^## /, '');
                      const anchor = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                      return `<a href="#${anchor}" class="block py-1 text-blue-600 hover:underline">${title}</a>`;
                    })
                    .join('')
                }}
              />
            </div>
            
            {/* Ad */}
            <SidebarAd />
            
            {/* Categories */}
            <div className="bg-gray-100 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/buying-guide" className="text-blue-600 hover:underline">
                    Buying Guide
                  </Link>
                </li>
                <li>
                  <Link href="/usage-guide" className="text-blue-600 hover:underline">
                    Usage Guide
                  </Link>
                </li>
                <li>
                  <Link href="/product-recommendations" className="text-blue-600 hover:underline">
                    Product Recommendations
                  </Link>
                </li>
                <li>
                  <Link href="/health-benefits" className="text-blue-600 hover:underline">
                    Health Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="text-blue-600 hover:underline">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}