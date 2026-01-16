// 静态导入所有博客 MDX 文件
import FutureLocalFirst from "@/content/blogs/future-local-first.mdx";
import IntroducingSeekDB from "@/content/blogs/introducing-seekdb.mdx";
import EngineeringPrinciples from "@/content/blogs/engineering-principles.mdx";
import { Blog } from "./data";

// 直接定义 metadata（因为 @next/mdx 可能无法正确导出 metadata）
const blogMetadata: Record<string, Blog> = {
  "future-local-first": {
    id: "future-local-first",
    title: "The Future of Local-First Development",
    description: "Why we believe the next wave of web applications will run entirely on your device, powered by databases like SeekDB.",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Local First", "Architecture"],
    slug: "future-local-first",
  },
  "introducing-seekdb": {
    id: "introducing-seekdb",
    title: "Introducing SeekDB: A New Era",
    description: "A lightweight, embeddable vector database designed specifically for the modern web stack and local AI applications.",
    date: "2024-03-01",
    readTime: "8 min read",
    tags: ["SeekDB", "Database", "Vector"],
    slug: "introducing-seekdb",
  },
  "engineering-principles": {
    id: "engineering-principles",
    title: "Engineering Principles at OFX Labs",
    description: "How we approach building experimental software in a rapidly changing landscape.",
    date: "2024-02-20",
    readTime: "6 min read",
    tags: ["Engineering", "Culture"],
    slug: "engineering-principles",
  },
};

// 获取所有博客
export function getAllBlogs(): Blog[] {
  return Object.values(blogMetadata).sort((a, b) => {
    // 按日期降序排序
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// 根据 slug 获取博客
export function getBlogBySlug(slug: string): Blog | null {
  return blogMetadata[slug] || null;
}
