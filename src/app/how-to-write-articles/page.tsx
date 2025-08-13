import Container from "@/app/_components/container";

export default function HowToWriteArticles() {
  return (
    <main>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-6xl mt-10 mb-6">
            如何修改和编写新文章
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>文章存储位置</h2>
            <p>
              在这个博客模板中，文章是以Markdown格式存储在<code>_posts</code>目录下的。对于多语言支持，我们为每种语言创建了单独的子目录：
            </p>
            <ul>
              <li><code>_posts/en/</code> - 英文文章</li>
              <li><code>_posts/de/</code> - 德文文章</li>
              <li><code>_posts/ja/</code> - 日文文章</li>
              <li><code>_posts/ar/</code> - 阿拉伯文文章</li>
              <li><code>_posts/hi/</code> - 印地文文章</li>
            </ul>
            
            <h2>创建新文章</h2>
            <p>按照以下步骤创建新文章：</p>
            
            <h3>1. 创建新的Markdown文件</h3>
            <p>
              在相应语言的目录下创建一个新的<code>.md</code>文件，文件名格式建议为<code>文章标题-使用连字符.md</code>，例如<code>my-new-article.md</code>。
            </p>
            
            <h3>2. 添加文章前置信息</h3>
            <p>
              每篇文章的开头需要包含YAML格式的前置信息，包括标题、摘要、封面图片、日期、作者信息等。例如：
            </p>
            <pre><code>{`---
title: '这是我的新文章标题'
excerpt: '这是文章摘要，会显示在首页的文章列表中。'
coverImage: '/assets/blog/my-new-article/cover.jpg'
date: '2023-08-13T12:00:00.000Z'
author:
  name: '作者名称'
  picture: '/assets/blog/authors/author-avatar.jpg'
ogImage:
  url: '/assets/blog/my-new-article/cover.jpg'
---

这里开始是文章的正文内容...`}</code></pre>
            
            <h3>3. 编写文章内容</h3>
            <p>
              在前置信息之后，使用Markdown语法编写文章内容。支持标题、段落、列表、链接、图片等Markdown格式。
            </p>
            <p>Markdown基本语法：</p>
            <ul>
              <li><code># 一级标题</code></li>
              <li><code>## 二级标题</code></li>
              <li><code>**粗体文本**</code></li>
              <li><code>*斜体文本*</code></li>
              <li><code>[链接文本](https://example.com)</code></li>
              <li><code>![图片描述](/path/to/image.jpg)</code></li>
              <li><code>- 无序列表项</code></li>
              <li><code>1. 有序列表项</code></li>
            </ul>
            
            <h3>4. 添加图片</h3>
            <p>
              为文章创建对应的图片目录，例如<code>public/assets/blog/my-new-article/</code>，并将封面图片和文章中使用的图片放入该目录。在文章中使用相对路径引用图片。
            </p>
            
            <h2>修改现有文章</h2>
            <p>按照以下步骤修改现有文章：</p>
            
            <h3>1. 找到要修改的文章</h3>
            <p>
              在<code>_posts</code>目录下找到对应语言子目录中的<code>.md</code>文件。
            </p>
            
            <h3>2. 编辑文件内容</h3>
            <p>
              修改前置信息（如标题、摘要等）或更新文章正文内容，然后保存文件。
            </p>
            
            <h2>多语言文章的处理</h2>
            <p>
              为了提供完整的多语言体验，建议为每种支持的语言创建相同内容的文章。确保翻译质量高，并适应各种语言的文化背景。
            </p>
            <p>
              文章的URL将基于语言代码和文章的slug（从文件名派生）。例如，英文文章的URL可能是<code>/en/posts/my-article</code>，而德文版本则是<code>/de/posts/my-article</code>。
            </p>
            
            <h2>最佳实践</h2>
            <ul>
              <li>使用清晰、描述性的文件名</li>
              <li>提供高质量的原创内容</li>
              <li>为每篇文章添加适当的元数据（标题、摘要等）</li>
              <li>使用优化的图片（合适的尺寸和格式）</li>
              <li>保持一致的发布节奏</li>
              <li>在文章中适当位置添加内部链接，提高SEO</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}