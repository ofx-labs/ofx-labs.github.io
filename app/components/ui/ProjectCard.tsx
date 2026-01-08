import Link from "next/link";
import { ArrowUpRight, Star, Clock } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { type Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getBadgeVariant = (status: Project["status"]) => {
    switch (status) {
      case "Classified":
        return "alert";
      case "Public Beta":
        return "primary";
      case "Blueprint":
        return "outline";
      case "Open Source":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <Card className="flex h-full flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <Badge variant={getBadgeVariant(project.status)}>
            {project.status.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
             <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{project.updatedAt}</span>
             </div>
             {project.stars > 0 && (
                <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>{project.stars}</span>
                </div>
             )}
          </div>
        </div>
        
        <h3 className="mb-2 text-2xl font-black uppercase leading-tight tracking-tight break-words">
          {project.name}
        </h3>
        
        <p className="mb-6 font-mono text-sm text-gray-600">
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full justify-between group">
            <span>VIEW REPO</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
