import { Badge } from "./Badge";
import { Card } from "./Card";
import { CheckSquare, Calendar, Activity, Rocket } from "lucide-react";
import { type RoadmapItem } from "@/lib/data";

interface RoadmapCardProps {
  item: RoadmapItem;
}

export function RoadmapCard({ item }: RoadmapCardProps) {
  const getStatusColor = (status: RoadmapItem["status"]) => {
    switch (status) {
      case "Planned":
        return "text-gray-500 bg-gray-100 border-gray-500";
      case "In Progress":
        return "text-blue-600 bg-blue-50 border-blue-600";
      case "Review":
        return "text-purple-600 bg-purple-50 border-purple-600";
      default:
        return "text-black bg-white border-black";
    }
  };

  return (
    <Card className="relative flex flex-col h-full border-black border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
      <div className="absolute top-0 right-0 p-4">
        <span className={`px-2 py-1 font-mono text-xs font-bold border-[2px] ${getStatusColor(item.status)} uppercase`}>
            {item.status}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
           <Badge variant="outline" className="text-xs bg-white">
             {item.projectName}
           </Badge>
           <span className="font-mono text-sm font-bold text-gray-500">
             {item.version}
           </span>
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
          {item.title}
        </h3>
        <p className="font-mono text-sm text-gray-600">
          {item.description}
        </p>
      </div>

      <div className="flex-grow">
        <div className="border-t-[2px] border-black my-4 border-dashed" />
        <h4 className="font-bold uppercase text-sm mb-3 flex items-center gap-2">
            <CheckSquare className="h-4 w-4" />
            Requirements
        </h4>
        <ul className="space-y-2">
            {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 font-mono text-sm">
                    <div className="h-1.5 w-1.5 bg-black mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t-[3px] border-black bg-gray-50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <Calendar className="h-4 w-4" />
            <span>ETA: {item.eta}</span>
         </div>
         <Rocket className="h-5 w-5" />
      </div>
    </Card>
  );
}
