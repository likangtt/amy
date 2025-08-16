"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EnhancedRichTextEditor from "@/components/EnhancedRichTextEditor";

// 模拟文章数据（当localStorage中没有数据时使用）
const MOCK_ARTICLES = {
  "1": {
    id: 1,
    title: "最佳按摩椅2023年榜单",
    slug: "best-massage-chairs-2023",
    category: "产品评测",
    tags: ["按摩椅", "2023", "评测", "推荐"],
    content: `# 2023年最佳按摩椅推荐

## 引言

在现代快节奏的生活中，按摩椅已经成为许多家庭缓解压力和放松身心的必备设备。本文将为您介绍2023年市场上最值得购买的按摩椅型号，帮助您做出明智的选择。

## 高端选择：Osaki OS-Pro Maestro

Osaki OS-Pro Maestro是当前市场上最先进的按摩椅之一，配备了3D按摩技术和全身扫描系统，可以根据您的身体结构提供个性化的按摩体验。

### 主要特点：
- 先进的3D按摩技术，可调节强度
- 全身扫描系统，根据身体结构定制按摩
- 零重力位置设计，有3个预设位置
- 背部和小腿加热功能
- 蓝牙音箱，提供沉浸式放松体验
- 节省空间技术，只需3英寸的墙壁间隙

虽然Osaki OS-Pro Maestro价格较高（约8,999美元），但其耐用性和全面的功能使其成为追求极致家庭按摩体验的理想选择。`,
    excerpt: "发现2023年市场上最值得购买的按摩椅，从豪华高端型号到紧凑型节省空间选项。",
    featuredImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    status: "已发布",
    date: "2023-08-10",
    views: 1245
  },
  "2": {
    id: 2,
    title: "如何选择适合您的按摩椅",
    slug: "how-to-choose-massage-chair",
    category: "选购指南",
    tags: ["按摩椅", "选购", "指南", "建议"],
    content: "# 如何选择适合您的按摩椅\n\n选择一款适合自己的按摩椅可能会让人感到困惑，因为市场上有各种各样的型号和功能。本指南将帮助您了解选购按摩椅时需要考虑的关键因素。",
    excerpt: "本指南将帮助您了解选购按摩椅时需要考虑的关键因素，包括按摩技术、轨道类型、零重力功能等。",
    featuredImage: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30",
    status: "已发布",
    date: "2023-08-05",
    views: 876
  }
};

// 修改类型定义以符合Next.js 15的要求
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
    status: "草稿",
    date: "",
    views: 0
  });

  const [tagInput, setTagInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [notFound, setNotFound] = useState(false);

  // 解析params并设置id
  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  // 加载文章数据
  useEffect(() => {
    if (!id) return; // 等待id被设置
    
    try {
      // 尝试从localStorage获取文章
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // 查找指定ID的文章
      const foundArticle = articlesArray.find((article: any) => article.id.toString() === id);
      
      if (foundArticle) {
        // 如果在localStorage中找到了文章
        setArticle({
          title: foundArticle.title || "",
          slug: foundArticle.slug || "",
          category: foundArticle.category || "",
          tags: foundArticle.tags || [],
          content: foundArticle.content || "",
          excerpt: foundArticle.excerpt || "",
          featuredImage: foundArticle.featuredImage || "",
          status: foundArticle.status || "草稿",
          date: foundArticle.date || "",
          views: foundArticle.views || 0
        });
      } else {
        // 如果在localStorage中没有找到，尝试使用模拟数据
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
          // 如果模拟数据中也没有找到，则显示文章不存在
          setNotFound(true);
        }
      }
    } catch (error) {
      console.error("获取文章失败:", error);
      setNotFound(true);
    }
  }, [id]);

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
    
    try {
      // 获取现有文章
      const savedArticles = localStorage.getItem('blog_articles');
      let articlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      
      // 查找文章索引
      const articleIndex = articlesArray.findIndex((a: any) => a.id.toString() === id);
      
      // 更新文章对象
      const updatedArticle = {
        ...article,
        id: parseInt(id)
      };
      
      if (articleIndex !== -1) {
        // 更新现有文章
        articlesArray[articleIndex] = updatedArticle;
      } else {
        // 如果文章不存在，添加到数组开头
        articlesArray.unshift(updatedArticle);
      }
      
      // 保存回localStorage
      localStorage.setItem('blog_articles', JSON.stringify(articlesArray));
      
      setIsSaving(false);
      setSaveMessage("文章已成功更新！");
      
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

  // 如果文章不存在
  if (notFound) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">文章不存在</h1>
        <p className="mb-6">无法找到ID为 {id} 的文章</p>
        <Link href="/admin/articles" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">编辑文章</h1>
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
            ) : '保存文章'}
          </button>
        </div>
      </form>
    </div>
  );
}