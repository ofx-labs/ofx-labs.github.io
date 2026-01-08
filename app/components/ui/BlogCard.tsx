import Link from "next/link";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import { type Blog } from "@/lib/data";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div>
        <div className="mb-4 flex items-center gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        
        <h3 className="mb-2 text-2xl font-black uppercase leading-tight tracking-tight break-words">
          {blog.title}
        </h3>
        
        <p className="mb-6 font-mono text-sm text-gray-600">
          {blog.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span 
              key={tag} 
              className="border border-black bg-gray-100 px-2 py-0.5 text-xs font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <Link href={`/blogs/${blog.slug}`}>
          <Button variant="outline" className="w-full justify-between group">
            <span>READ ARTICLE</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
