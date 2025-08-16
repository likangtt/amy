"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EnhancedRichTextEditor from "@/components/EnhancedRichTextEditor";

export default function NewArticle() {
  const router = useRouter();
  
  const [article, setArticle] = useState({
    title: "",
    slug: "",
    category: "",
    tags: [] as string[],
    content: "",
    excerpt: "",
    featuredImage: "",
    status: "草稿",
  });

  const [tagInput, setTagInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // 根据标题自动生成slug
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // 移除特殊字符
      .replace(/\s+/g, '-') // 将空格替换为连字符
      .replace(/--+/g, '-') // 将多个连字符替换为单个连字符
      .trim(); // 移除首尾空格
  };

  // 处理标题变化时自动更新slug
  const handleTitleChange = (title: string) => {
    setArticle({
      ...article,
      title,
      slug: generateSlug(title)
    });
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // 获取当前日期
    const currentDate = new Date().toISOString().split('T')[0];
    
    // 创建新文章对象
    const newArticle = {
      id: Date.now(), // 使用时间戳作为唯一ID
      title: article.title,
      slug: article.slug,
      category: article.category,
      date: currentDate,
      status: article.status,
      views: 0,
      content: article.content,
      excerpt: article.excerpt,
      featuredImage: article.featuredImage,
      tags: article.tags
    };
    
    // 将新文章保存到localStorage
    try {
      // 获取现有文章
      const existingArticles = localStorage.getItem('blog_articles');
      let articlesArray = existingArticles ? JSON.parse(existingArticles) : [];
      
      // 添加新文章
      articlesArray.unshift(newArticle);
      
      // 保存回localStorage
      localStorage.setItem('blog_articles', JSON.stringify(articlesArray));
      
      setIsSaving(false);
      setSaveMessage("文章已成功创建！");
      
      // 2秒后跳转到文章列表
      setTimeout(() => {
        router.push('/admin/articles');
      }, 2000);
    } catch (error) {
      console.error("保存文章失败:", error);
      setIsSaving(false);
      setSaveMessage("保存失败，请重试");
    }
  };

  // 添加标签
  const addTag = () => {
    if (tagInput.trim() && !article.tags.includes(tagInput.trim())) {
      setArticle({
        ...article,
        tags: [...article.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  // 删除标签
  const removeTag = (tagToRemove: string) => {
    setArticle({
      ...article,
      tags: article.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">创建新文章</h1>
        <div className="flex items-center gap-4">
          {saveMessage && (
            <span className="text-green-600">{saveMessage}</span>
          )}
          <Link href="/admin/articles" className="text-gray-600 hover:text-gray-900">
            返回列表
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 标题 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                文章标题 <span className="text-red-500">*</span>
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

            {/* 别名 */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                URL别名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="slug"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.slug}
                onChange={(e) => setArticle({ ...article, slug: e.target.value })}
                required
              />
              <p className="text-xs text-gray-500 mt-1">URL别名将用于文章的永久链接</p>
            </div>

            {/* 分类 */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                分类 <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.category}
                onChange={(e) => setArticle({ ...article, category: e.target.value })}
                required
              >
                <option value="">选择分类</option>
                <option value="buying-guide">选购指南 (Buying Guide)</option>
                <option value="usage-guide">使用方法 (Usage Guide)</option>
                <option value="product-recommendations">产品推荐 (Product Recommendations)</option>
                <option value="health-benefits">健康益处 (Health Benefits)</option>
                <option value="maintenance">维护保养 (Maintenance)</option>
              </select>
            </div>

            {/* 状态 */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                状态
              </label>
              <select
                id="status"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.status}
                onChange={(e) => setArticle({ ...article, status: e.target.value })}
              >
                <option value="草稿">草稿</option>
                <option value="已发布">已发布</option>
              </select>
            </div>

            {/* 特色图片 */}
            <div className="md:col-span-2">
              <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                特色图片URL
              </label>
              <input
                type="text"
                id="featuredImage"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={article.featuredImage}
                onChange={(e) => setArticle({ ...article, featuredImage: e.target.value })}
                placeholder="输入图片URL或从媒体库选择"
              />
              {article.featuredImage && (
                <div className="mt-2">
                  <img 
                    src={article.featuredImage} 
                    alt="特色图片预览" 
                    className="h-40 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=图片加载失败';
                    }}
                  />
                </div>
              )}
            </div>

            {/* 摘要 */}
            <div className="md:col-span-2">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                文章摘要
              </label>
              <textarea
                id="excerpt"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                rows={3}
                value={article.excerpt}
                onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                placeholder="简短描述文章内容，将显示在文章列表中"
              />
            </div>

            {/* 标签 */}
            <div className="md:col-span-2">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                标签
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="tags"
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  placeholder="输入标签后按回车添加"
                />
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                  onClick={addTag}
                >
                  添加
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

        {/* 文章内容 */}
        <div className="bg-white rounded-lg shadow p-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            文章内容 <span className="text-red-500">*</span>
          </label>
          <EnhancedRichTextEditor
            value={article.content}
            onChange={(value) => setArticle({ ...article, content: value })}
          />
          <div className="text-sm text-gray-500 mt-2">
            支持Markdown格式。使用 # 表示标题，** 表示粗体，* 表示斜体，等等。
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 mr-4"
            onClick={() => router.push('/admin/articles')}
          >
            取消
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
                保存中...
              </>
            ) : '创建文章'}
          </button>
        </div>
      </form>
    </div>
  );
}