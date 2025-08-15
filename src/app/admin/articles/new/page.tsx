"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 富文本编辑器组件
const RichTextEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  // 文本区域引用
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // 插入文本到光标位置
  const insertTextAtCursor = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // 设置光标位置
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length
      );
    }, 0);
  };
  
  // 处理粗体按钮点击
  const handleBoldClick = () => {
    insertTextAtCursor('**', '**');
  };
  
  // 处理斜体按钮点击
  const handleItalicClick = () => {
    insertTextAtCursor('*', '*');
  };
  
  // 处理链接按钮点击
  const handleLinkClick = () => {
    const url = prompt('请输入链接URL:', 'https://');
    if (url) {
      insertTextAtCursor('[', `](${url})`);
    }
  };
  
  // 处理引用按钮点击
  const handleQuoteClick = () => {
    insertTextAtCursor('> ');
  };
  
  // 处理图片按钮点击
  const handleImageClick = () => {
    const url = prompt('请输入图片URL:', 'https://');
    if (url) {
      const alt = prompt('请输入图片描述:', '图片描述');
      insertTextAtCursor(`![${alt || '图片'}](${url})`);
    }
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-gray-100 border-b border-gray-300 p-2 flex gap-2">
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="粗体"
          onClick={handleBoldClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="斜体"
          onClick={handleItalicClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="链接"
          onClick={handleLinkClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="引用"
          onClick={handleQuoteClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="图片"
          onClick={handleImageClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
          </svg>
        </button>
      </div>
      <textarea
        ref={textareaRef}
        className="w-full p-4 min-h-[400px] focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在这里输入文章内容..."
      />
    </div>
  );
};

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
          <RichTextEditor
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