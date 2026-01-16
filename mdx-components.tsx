import type { MDXComponents } from "mdx/types";
import { Card } from "@/app/components/ui/Card";

// 自定义 MDX 组件的样式
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义标题样式
    h1: ({ children }) => (
      <h1 className="mb-6 mt-8 text-4xl font-black uppercase tracking-tighter md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-3xl font-black uppercase tracking-tight md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-6 text-2xl font-bold uppercase tracking-tight md:text-3xl">
        {children}
      </h3>
    ),
    // 自定义段落样式
    p: ({ children }) => (
      <p className="mb-4 text-lg leading-relaxed">{children}</p>
    ),
    // 自定义列表样式
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    // 自定义代码块样式
    code: ({ children }) => (
      <code className="rounded border-[2px] border-black bg-gray-100 px-2 py-1 font-mono text-sm font-bold">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg border-[2px] border-black bg-gray-900 p-4 font-mono text-sm text-white">
        {children}
      </pre>
    ),
    // 自定义引用样式
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-black bg-gray-100 p-4 pl-6 italic">
        {children}
      </blockquote>
    ),
    // 自定义链接样式
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-bold text-primary underline decoration-2 underline-offset-2 hover:text-alert"
      >
        {children}
      </a>
    ),
    // 自定义图片样式
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="my-6 rounded-lg border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      />
    ),
    // 自定义水平分割线
    hr: () => (
      <hr className="my-8 border-t-[3px] border-black" />
    ),
    // 传递其他组件
    ...components,
  };
}
