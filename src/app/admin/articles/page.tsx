"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 模拟文章数据
const MOCK_ARTICLES = [
  { 
    id: 1, 
    title: "最佳按摩椅2023年榜单", 
    category: "产品评测", 
    date: "2023-08-10", 
    status: "已发布",
    views: 1245
  },
  { 
    id: 2, 
    title: "如何选择适合您的按摩椅", 
    category: "选购指南", 
    date: "2023-08-05", 
    status: "已发布",
    views: 876
  },
  { 
    id: 3, 
    title: "按摩椅的健康益处", 
    category: "健康知识", 
    date: "2023-07-28", 
    status: "草稿",
    views: 0
  },
  { 
    id: 4, 
    title: "按摩椅维护指南", 
    category: "使用指南", 
    date: "2023-07-20", 
    status: "已发布",
    views: 543
  },
  { 
    id: 5, 
    title: "按摩椅行业最新趋势", 
    category: "行业资讯", 
    date: "2023-07-15", 
    status: "已发布",
    views: 321
  },
  { 
    id: 6, 
    title: "按摩椅与传统按摩的区别", 
    category: "健康知识", 
    date: "2023-07-10", 
    status: "已发布",
    views: 654
  },
  { 
    id: 7, 
    title: "高端按摩椅功能详解", 
    category: "产品评测", 
    date: "2023-07-05", 
    status: "草稿",
    views: 0
  },
  { 
    id: 8, 
    title: "按摩椅使用常见问题解答", 
    category: "使用指南", 
    date: "2023-06-28", 
    status: "已发布",
    views: 432
  },
];

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);
  
  // 在组件加载时从localStorage获取文章
  useEffect(() => {
    // 尝试从localStorage获取文章
    try {
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // 如果localStorage中没有文章，使用模拟数据
      if (articlesArray.length === 0) {
        articlesArray = MOCK_ARTICLES;
      }
      
      setArticles(articlesArray);
    } catch (error) {
      console.error("获取文章失败:", error);
      setArticles(MOCK_ARTICLES);
    }
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  
  // 处理搜索和筛选
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "" || article.category === categoryFilter;
    const matchesStatus = statusFilter === "" || article.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // 处理批量删除
  const handleBulkDelete = () => {
    if (selectedArticles.length === 0) return;
    
    if (confirm(`确定要删除选中的 ${selectedArticles.length} 篇文章吗？`)) {
      const updatedArticles = articles.filter(article => !selectedArticles.includes(article.id));
      setArticles(updatedArticles);
      setSelectedArticles([]);
      
      // 更新localStorage
      try {
        localStorage.setItem('blog_articles', JSON.stringify(updatedArticles));
      } catch (error) {
        console.error("保存文章失败:", error);
      }
    }
  };
  
  // 处理单篇文章删除
  const handleDelete = (id: number) => {
    if (confirm("确定要删除这篇文章吗？")) {
      const updatedArticles = articles.filter(article => article.id !== id);
      setArticles(updatedArticles);
      
      // 更新localStorage
      try {
        localStorage.setItem('blog_articles', JSON.stringify(updatedArticles));
      } catch (error) {
        console.error("保存文章失败:", error);
      }
    }
  };
  
  // 处理全选/取消全选
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedArticles(filteredArticles.map(article => article.id));
    } else {
      setSelectedArticles([]);
    }
  };
  
  // 处理单选
  const handleSelect = (id: number) => {
    if (selectedArticles.includes(id)) {
      setSelectedArticles(selectedArticles.filter(articleId => articleId !== id));
    } else {
      setSelectedArticles([...selectedArticles, id]);
    }
  };
  
  // 获取唯一的分类列表
  const categories = Array.from(new Set(articles.map(article => article.category)));
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">文章管理</h1>
        <Link href="/admin/articles/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          新建文章
        </Link>
      </div>
      
      {/* 搜索和筛选 */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              搜索
            </label>
            <input
              type="text"
              id="search"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="搜索文章标题..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              分类
            </label>
            <select
              id="category"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">全部分类</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              状态
            </label>
            <select
              id="status"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">全部状态</option>
              <option value="已发布">已发布</option>
              <option value="草稿">草稿</option>
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
              重置筛选
            </button>
          </div>
        </div>
      </div>
      
      {/* 批量操作 */}
      {selectedArticles.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg shadow mb-6 flex justify-between items-center">
          <p className="text-blue-700">
            已选择 {selectedArticles.length} 篇文章
          </p>
          <div className="flex space-x-2">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleBulkDelete}
            >
              批量删除
            </button>
          </div>
        </div>
      )}
      
      {/* 文章列表 */}
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
                  标题
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  分类
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  浏览量
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
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
                        article.status === "已发布" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {article.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={`/admin/articles/edit/${article.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                        编辑
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(article.id)}
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    没有找到符合条件的文章
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