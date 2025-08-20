"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mock article data
const MOCK_ARTICLES = [
  { 
    id: 1, 
    title: "Best Massage Chairs 2023 Rankings", 
    category: "Product Reviews", 
    date: "2023-08-10", 
    status: "Published",
    views: 1245
  },
  { 
    id: 2, 
    title: "How to Choose the Right Massage Chair", 
    category: "Buying Guide", 
    date: "2023-08-05", 
    status: "Published",
    views: 876
  },
  { 
    id: 3, 
    title: "Health Benefits of Massage Chairs", 
    category: "Health Knowledge", 
    date: "2023-07-28", 
    status: "Draft",
    views: 0
  },
  { 
    id: 4, 
    title: "Massage Chair Maintenance Guide", 
    category: "Usage Guide", 
    date: "2023-07-20", 
    status: "Published",
    views: 543
  },
  { 
    id: 5, 
    title: "Latest Trends in Massage Chair Industry", 
    category: "Industry News", 
    date: "2023-07-15", 
    status: "Published",
    views: 321
  },
  { 
    id: 6, 
    title: "Differences Between Massage Chairs and Traditional Massage", 
    category: "Health Knowledge", 
    date: "2023-07-10", 
    status: "Published",
    views: 654
  },
  { 
    id: 7, 
    title: "High-End Massage Chair Features Explained", 
    category: "Product Reviews", 
    date: "2023-07-05", 
    status: "Draft",
    views: 0
  },
  { 
    id: 8, 
    title: "Common Questions About Massage Chair Usage", 
    category: "Usage Guide", 
    date: "2023-06-28", 
    status: "Published",
    views: 432
  },
];

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);
  
  // Load articles from localStorage when component mounts
  useEffect(() => {
    // Try to get articles from localStorage
    try {
      // First try to get from blog_articles
      let savedArticles = localStorage.getItem('blog_articles');
      
      // If not found in blog_articles, try articles
      if (!savedArticles) {
        savedArticles = localStorage.getItem('articles');
        // If found in articles, also update blog_articles
        if (savedArticles) {
          localStorage.setItem('blog_articles', savedArticles);
        }
      }
      
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // If no articles in localStorage, use mock data
      if (articlesArray.length === 0) {
        articlesArray = MOCK_ARTICLES;
      }
      
      setArticles(articlesArray);
    } catch (error) {
      console.error("Failed to retrieve articles:", error);
      setArticles(MOCK_ARTICLES);
    }
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  
  // Handle search and filtering
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "" || article.category === categoryFilter;
    const matchesStatus = statusFilter === "" || article.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Handle bulk delete
  const handleBulkDelete = () => {
    if (selectedArticles.length === 0) return;
    
    if (confirm(`Are you sure you want to delete ${selectedArticles.length} selected articles?`)) {
      const updatedArticles = articles.filter(article => !selectedArticles.includes(article.id));
      setArticles(updatedArticles);
      setSelectedArticles([]);
      
      // Update localStorage
      try {
        localStorage.setItem('blog_articles', JSON.stringify(updatedArticles));
        localStorage.setItem('articles', JSON.stringify(updatedArticles));
      } catch (error) {
        console.error("Failed to save articles:", error);
      }
    }
  };
  
  // Handle single article delete
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this article?")) {
      const updatedArticles = articles.filter(article => article.id !== id);
      setArticles(updatedArticles);
      
      // Update localStorage
      try {
        localStorage.setItem('blog_articles', JSON.stringify(updatedArticles));
        localStorage.setItem('articles', JSON.stringify(updatedArticles));
      } catch (error) {
        console.error("Failed to save articles:", error);
      }
    }
  };
  
  // Handle select all / deselect all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedArticles(filteredArticles.map(article => article.id));
    } else {
      setSelectedArticles([]);
    }
  };
  
  // Handle single select
  const handleSelect = (id: number) => {
    if (selectedArticles.includes(id)) {
      setSelectedArticles(selectedArticles.filter(articleId => articleId !== id));
    } else {
      setSelectedArticles([...selectedArticles, id]);
    }
  };
  
  // Get unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)));
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Article Management</h1>
        <Link href="/admin/articles/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          New Article
        </Link>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Search article titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("");
                setStatusFilter("");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Bulk Actions */}
      {selectedArticles.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg shadow mb-6 flex justify-between items-center">
          <p className="text-blue-700">
            {selectedArticles.length} articles selected
          </p>
          <div className="flex space-x-2">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleBulkDelete}
            >
              Bulk Delete
            </button>
          </div>
        </div>
      )}
      
      {/* Article List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    checked={selectedArticles.length === filteredArticles.length && filteredArticles.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        checked={selectedArticles.includes(article.id)}
                        onChange={() => handleSelect(article.id)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{article.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{article.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        article.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {article.views ? article.views.toLocaleString() : '0'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={`/admin/articles/edit/${article.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                        Edit
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(article.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    No articles found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}