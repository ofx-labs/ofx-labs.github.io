# 博客内容管理

本目录包含所有博客文章的 MDX 文件。

## 文件格式

每个博客文章都是一个 `.mdx` 文件，包含：

1. **Frontmatter**（元数据）：使用 YAML 格式，包含以下字段：
   - `title`: 文章标题
   - `description`: 文章描述
   - `date`: 发布日期（格式：YYYY-MM-DD）
   - `readTime`: 预计阅读时间（如："5 min read"）
   - `tags`: 标签数组
   - `slug`: URL slug（必须与文件名匹配，不含 .mdx 扩展名）

2. **内容**：使用 Markdown 语法编写，支持：
   - 标准 Markdown 语法
   - React 组件（JSX）
   - 代码块
   - 图片、链接等

## 示例

```mdx
---
title: "My Blog Post"
description: "This is a sample blog post"
date: "2024-01-01"
readTime: "5 min read"
tags: ["React", "Next.js"]
slug: "my-blog-post"
---

## Introduction

This is the content of my blog post.

You can use **bold**, *italic*, and `code` formatting.

## Code Example

```typescript
const example = "Hello, World!";
```

## Conclusion

That's it!
```

## 添加新博客

1. 在 `content/blogs/` 目录下创建新的 `.mdx` 文件
2. 文件名应该与 `slug` 字段匹配（例如：`my-blog-post.mdx`）
3. 填写 frontmatter 元数据
4. 编写内容
5. 保存文件后，博客会自动出现在博客列表中

## 注意事项

- `slug` 必须与文件名（不含扩展名）匹配
- 日期格式必须为 `YYYY-MM-DD`
- 标签应该是字符串数组
- 文件会自动按日期降序排序
