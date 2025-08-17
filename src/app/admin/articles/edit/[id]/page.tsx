"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EnhancedRichTextEditor from "@/components/EnhancedRichTextEditor";

// Mock article data (used when localStorage has no data)
const MOCK_ARTICLES = {
  "1": {
    id: 1,
    title: "Best Massage Chairs 2023 Rankings",
    slug: "best-massage-chairs-2023",
    category: "Product Reviews",
    tags: ["massage chairs", "2023", "reviews", "recommendations"],
    content: `# Best Massage Chairs Recommendations for 2023

## Introduction

In today's fast-paced lifestyle, massage chairs have become essential equipment for many households to relieve stress and relax. This article will introduce you to the most worthwhile massage chair models on the market in 2023, helping you make an informed choice.

## Premium Choice: Osaki OS-Pro Maestro

The Osaki OS-Pro Maestro is one of the most advanced massage chairs currently on the market, equipped with 3D massage technology and a full-body scanning system that provides a personalized massage experience based on your body structure.

### Key Features:
- Advanced 3D massage technology with adjustable intensity
- Full-body scanning system that customizes massage based on body structure
- Zero gravity position design with 3 preset positions
- Back and calf heating function
- Bluetooth speakers for an immersive relaxation experience
- Space-saving technology requiring only 3 inches of wall clearance

Although the Osaki OS-Pro Maestro is relatively expensive (around $8,999), its durability and comprehensive features make it an ideal choice for those seeking the ultimate home massage experience.`,
    excerpt: "Discover the most worthwhile massage chairs on the market in 2023, from luxury high-end models to compact space-saving options.",
    featuredImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    status: "Published",
    date: "2023-08-10",
    views: 1245
  },
  "2": {
    id: 2,
    title: "How to Choose the Right Massage Chair for You",
    slug: "how-to-choose-massage-chair",
    category: "Buying Guide",
    tags: ["massage chairs", "buying", "guide", "advice"],
    content: "# How to Choose the Right Massage Chair for You\n\nChoosing a massage chair that suits your needs can be confusing with the variety of models and features available on the market. This guide will help you understand the key factors to consider when purchasing a massage chair.",
    excerpt: "This guide will help you understand the key factors to consider when buying a massage chair, including massage technology, track type, zero gravity features, and more.",
    featuredImage: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30",
    status: "Published",
    date: "2023-08-05",
    views: 876
  }
};

// 生成静态路径
export async function generateStaticParams() {
  // 为管理页面生成一些预定义的ID
  // 在实际应用中，这里应该从数据库获取所有文章ID
  try {
    // 临时模拟数据
    const articleIds = ['1', '2'];
    
    return articleIds.map((id) => ({
      id: id,
    }));
  } catch (error) {
    console.error('Failed to fetch article IDs:', error);
    return [];
  }
}

// Modify type definition to comply with Next.js 15 requirements
export default function EditArticle({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  
  const [article, setArticle] = useState({
    title: "",
    slug: "",
    category: "",
    tags: [] as string[],
    content: "",
    excerpt: "",
    featuredImage: "",
    status: "Draft",
    date: "",
    views: 0
  });

  const [tagInput, setTagInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [notFound, setNotFound] = useState(false);

  // Parse params and set id
  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  // Load article data
  useEffect(() => {
    if (!id) return; // Wait for id to be set
    
    try {
      // Try to get article from localStorage
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // Find article with specified ID
      const foundArticle = articlesArray.find((article: any) => article.id.toString() === id);
      
      if (foundArticle) {
        // If article found in localStorage
        setArticle({
          title: foundArticle.title || "",
          slug: foundArticle.slug || "",
          category: foundArticle.category || "",
          tags: foundArticle.tags || [],
          content: foundArticle.content || "",
          excerpt: foundArticle.excerpt || "",
          featuredImage: foundArticle.featuredImage || "",
          status: foundArticle.status || "Draft",
          date: foundArticle.date || "",
          views: foundArticle.views || 0
        });
      } else {
        // If not found in localStorage, try using mock data
        const mockArticle = MOCK_ARTICLES[id as keyof typeof MOCK_ARTICLES];
        
        if (mockArticle) {
          setArticle({
            title: mockArticle.title,
            slug: mockArticle.slug,
            category: mockArticle.category,
            tags: mockArticle.tags,
            content: mockArticle.content,
            excerpt: mockArticle.excerpt,
            featuredImage: mockArticle.featuredImage,
            status: mockArticle.status,
            date: mockArticle.date,
            views: mockArticle.views
          });
        } else {
          // If not found in mock data either, show article doesn't exist
          setNotFound(true);
        }
      }
    } catch (error) {
      console.error("Failed to retrieve article:", error);
      setNotFound(true);
    }
  }, [id]);

  // Generate slug automatically from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Remove leading/trailing spaces
  };

  // Handle title change and auto-update slug
  const handleTitleChange = (title: string) => {
    setArticle({
      ...article,
      title,
      slug: generateSlug(title)
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Get existing articles
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // Find article index
      const articleIndex = articlesArray.findIndex((a: any) => a.id.toString() === id);
      
      // Update article object
      const updatedArticle = {
        ...article,
        id: parseInt(id)
      };
      
      if (articleIndex !== -1) {
        // Update existing article
        articlesArray[articleIndex] = updatedArticle;
      } else {
        // If article doesn't exist, add to beginning of array
        articlesArray.unshift(updatedArticle);
      }
      
      // Save back to localStorage
      localStorage.setItem('blog_articles', JSON.stringify(articlesArray));
      
      setIsSaving(false);
      setSaveMessage("Article updated successfully!");
      
      // Redirect to article list after 2 seconds
      setTimeout(() => {
        router.push('/admin/articles');
      }, 2000);
    } catch (error) {
      console.error("Failed to save article:", error);
      setIsSaving(false);
      setSaveMessage("Save failed, please try again");
    }
  };

  // Add tag
  const addTag = () => {
    if (tagInput.trim() && !article.tags.includes(tagInput.trim())) {
      setArticle({
        ...article,
        tags: [...article.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  // Remove tag
  const removeTag = (tagToRemove: string) => {
    setArticle({
      ...article,
      tags: article.tags.filter(tag => tag !== tagToRemove)
    });
  };

  // If article doesn't exist
  if (notFound) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h1>
        <p className="mb-6">Could not find article with ID {id}</p>
        <Link href="/admin/articles" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Return to Article List
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Article</h1>
        <div className="flex items-center gap-4">
          {saveMessage && (
            <span className="text-green-600">{saveMessage}</span>
          )}
          <Link href="/admin/articles" className="text-gray-600 hover:text-gray-900">
            Back to List
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="slug"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.slug}
                onChange={(e) => setArticle({ ...article, slug: e.target.value })}
                required
              />
              <p className="text-xs text-gray-500 mt-1">URL slug will be used for the article's permanent link</p>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.category}
                onChange={(e) => setArticle({ ...article, category: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                <option value="buying-guide">Buying Guide</option>
                <option value="usage-guide">Usage Guide</option>
                <option value="product-recommendations">Product Recommendations</option>
                <option value="health-benefits">Health Benefits</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.status}
                onChange={(e) => setArticle({ ...article, status: e.target.value })}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            {/* Featured Image */}
            <div className="md:col-span-2">
              <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                Featured Image URL
              </label>
              <input
                type="text"
                id="featuredImage"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.featuredImage}
                onChange={(e) => setArticle({ ...article, featuredImage: e.target.value })}
                placeholder="Enter image URL or select from media library"
              />
              {article.featuredImage && (
                <div className="mt-2">
                  <img 
                    src={article.featuredImage} 
                    alt="Featured image preview" 
                    className="h-40 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Image+failed+to+load';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div className="md:col-span-2">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                Article Excerpt
              </label>
              <textarea
                id="excerpt"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                rows={3}
                value={article.excerpt}
                onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                placeholder="Brief description of the article content, will be displayed in article lists"
              />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="tags"
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  placeholder="Enter tag and press Enter to add"
                />
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                  onClick={addTag}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-1 text-blue-600 hover:text-blue-800"
                      onClick={() => removeTag(tag)}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Article Content <span className="text-red-500">*</span>
          </label>
          <EnhancedRichTextEditor
            value={article.content}
            onChange={(value) => setArticle({ ...article, content: value })}
          />
          <div className="text-sm text-gray-500 mt-2">
            Supports Markdown format. Use # for headings, ** for bold, * for italic, etc.
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 mr-4"
            onClick={() => router.push('/admin/articles')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center ${
              isSaving ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : 'Save Article'}
          </button>
        </div>
      </form>
    </div>
  );
}