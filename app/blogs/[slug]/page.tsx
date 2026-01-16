import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen, Calendar } from "lucide-react";
import { blogs } from "@/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// 生成静态参数（可选，用于静态生成）
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | OFX BLOG`,
    description: blog.description,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // 示例博客内容（实际应用中应该从CMS或数据库获取）
  const content = `
    <h2>Introduction</h2>
    <p>This is where the blog content would go. In a real application, this would be fetched from a CMS or database.</p>
    
    <h2>Main Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <h2>Conclusion</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  `;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-[3px] border-black bg-primary py-16 md:py-24">
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full border-[3px] border-black bg-white opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rotate-45 border-[3px] border-black bg-alert opacity-20"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Link href="/blogs">
              <Button variant="outline" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                BACK TO BLOGS
              </Button>
            </Link>

            {/* Blog Meta Info */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-mono text-gray-700">
              <div className="flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Calendar className="h-3 w-3" />
                <span className="font-bold">{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="h-3 w-3" />
                <span className="font-bold">{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <BookOpen className="h-3 w-3" />
                <span className="font-bold">ARTICLE</span>
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>

            {/* Blog Description */}
            <p className="mb-8 text-xl font-bold leading-relaxed md:text-2xl">
              {blog.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-[2px] border-black bg-white px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Striped Bottom Bar */}
        <div className="absolute bottom-0 h-4 w-full border-t-[3px] border-black bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      </section>

      {/* Blog Content Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card>
              <article
                className="blog-content space-y-6 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Related Actions */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center gap-4 border-t-[3px] border-black pt-8 sm:flex-row">
              <Link href="/blogs" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  BACK TO ALL POSTS
                </Button>
              </Link>
              <Button variant="primary" className="w-full sm:w-auto">
                SHARE ARTICLE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden border-y-[3px] border-black bg-alert py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xl font-bold uppercase text-white">
          <span>+++ ARTICLE LOADED +++</span>
          <span>+++ KNOWLEDGE TRANSFER COMPLETE +++</span>
          <span>+++ READING MODE ACTIVATED +++</span>
          <span>+++ ARTICLE LOADED +++</span>
          <span>+++ KNOWLEDGE TRANSFER COMPLETE +++</span>
          <span>+++ READING MODE ACTIVATED +++</span>
          <span>+++ ARTICLE LOADED +++</span>
          <span>+++ KNOWLEDGE TRANSFER COMPLETE +++</span>
          <span>+++ READING MODE ACTIVATED +++</span>
        </div>
      </div>
    </div>
  );
}
