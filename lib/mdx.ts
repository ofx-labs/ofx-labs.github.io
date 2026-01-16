import fs from "fs";
import path from "path";
import { Blog } from "./data";

const contentDirectory = path.join(process.cwd(), "content/blogs");

// 动态导入所有 MDX 文件并获取 metadata
export async function getAllBlogs(): Promise<Blog[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const mdxFiles = fileNames.filter((name) => name.endsWith(".mdx"));

  // 动态导入所有 MDX 文件并提取 metadata
  const blogsPromises = mdxFiles.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    try {
      // 动态导入 MDX 文件
      const module = await import(`@/content/blogs/${slug}.mdx`);
      const metadata = module.metadata || {};

      return {
        id: metadata.slug || slug,
        title: metadata.title || "",
        description: metadata.description || "",
        date: metadata.date || "",
        readTime: metadata.readTime || "",
        tags: metadata.tags || [],
        slug: metadata.slug || slug,
      } as Blog;
    } catch (error) {
      console.error(`Failed to load MDX file: ${fileName}`, error);
      return null;
    }
  });

  const blogs = await Promise.all(blogsPromises);
  const validBlogs = blogs.filter((blog): blog is Blog => blog !== null && blog.title !== "");

  // 按日期降序排序
  return validBlogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// 根据 slug 获取博客的 metadata
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}

// 获取博客的完整路径（用于动态导入）
export function getBlogPath(slug: string): string {
  return `@/content/blogs/${slug}.mdx`;
}

// 检查博客是否存在
export function blogExists(slug: string): boolean {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}
