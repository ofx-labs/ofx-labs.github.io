// MDX 文件映射 - 用于静态导入
// 这个文件需要在添加新博客时手动更新，或者可以使用脚本自动生成

import type { ComponentType } from "react";
import FutureLocalFirst from "@/content/blogs/future-local-first.mdx";
import IntroducingSeekDB from "@/content/blogs/introducing-seekdb.mdx";
import EngineeringPrinciples from "@/content/blogs/engineering-principles.mdx";

// MDX 组件映射
const mdxComponents: Record<string, ComponentType<any>> = {
  "future-local-first": FutureLocalFirst,
  "introducing-seekdb": IntroducingSeekDB,
  "engineering-principles": EngineeringPrinciples,
};

// 获取 MDX 组件
export function getMDXComponent(slug: string): ComponentType<any> | null {
  return mdxComponents[slug] || null;
}

// 获取所有可用的 slug
export function getAllMDXSlugs(): string[] {
  return Object.keys(mdxComponents);
}
