import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

// 获取支持的语言列表
const supportedLanguages = ["en", "de", "ja", "ar", "hi"];

// 检查目录是否存在
function directoryExists(path: string): boolean {
  try {
    return fs.statSync(path).isDirectory();
  } catch (error) {
    return false;
  }
}

// 获取指定语言的文章目录
function getLanguagePostsDirectory(language: string): string {
  const langDir = join(postsDirectory, language);
  
  // 如果语言特定目录存在，则使用它
  if (supportedLanguages.includes(language) && directoryExists(langDir)) {
    return langDir;
  }
  
  // 否则返回默认目录
  return postsDirectory;
}

// 获取文章的slug列表，可以指定语言
export function getPostSlugs(language?: string): string[] {
  const directory = language ? getLanguagePostsDirectory(language) : postsDirectory;
  
  try {
    const files = fs.readdirSync(directory);
    return files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
    return [];
  }
}

// 根据slug获取文章，可以指定语言
export function getPostBySlug(slug: string, language?: string): Post | null {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    
    // 尝试从指定语言目录获取文章
    if (language) {
      const langDir = getLanguagePostsDirectory(language);
      const langPath = join(langDir, `${realSlug}.md`);
      
      if (fs.existsSync(langPath)) {
        const fileContents = fs.readFileSync(langPath, "utf8");
        const { data, content } = matter(fileContents);
        return { 
          ...data, 
          slug: realSlug, 
          content,
          language 
        } as Post;
      }
    }
    
    // 如果没有指定语言或找不到语言特定的文章，尝试从默认目录获取
    const defaultPath = join(postsDirectory, `${realSlug}.md`);
    if (fs.existsSync(defaultPath)) {
      const fileContents = fs.readFileSync(defaultPath, "utf8");
      const { data, content } = matter(fileContents);
      return { 
        ...data, 
        slug: realSlug, 
        content,
        language: "en" // 默认语言
      } as Post;
    }
    
    return null;
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

// 获取所有文章，可以指定语言
export function getAllPosts(language?: string): Post[] {
  // 如果指定了语言，只获取该语言的文章
  if (language) {
    const slugs = getPostSlugs(language);
    const posts = slugs
      .map((slug) => getPostBySlug(slug, language))
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  }
  
  // 如果没有指定语言，获取所有语言的文章
  let allPosts: Post[] = [];
  
  // 首先获取根目录的文章
  const rootSlugs = getPostSlugs();
  const rootPosts = rootSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null);
  allPosts = [...allPosts, ...rootPosts];
  
  // 然后获取每种语言的文章
  for (const lang of supportedLanguages) {
    const langSlugs = getPostSlugs(lang);
    const langPosts = langSlugs
      .map((slug) => getPostBySlug(slug, lang))
      .filter((post): post is Post => post !== null);
    allPosts = [...allPosts, ...langPosts];
  }
  
  // 按日期排序
  return allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
