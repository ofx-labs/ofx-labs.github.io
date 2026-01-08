import { Button } from "../components/ui/Button";
import { RoadmapCard } from "../components/ui/RoadmapCard";
import { roadmaps } from "@/lib/data";
import { Construction, Milestone, Map } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-[3px] border-black bg-primary py-24 md:py-32">
        
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full border-[3px] border-black bg-white opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rotate-45 border-[3px] border-black bg-alert opacity-20"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 border-[2px] border-black bg-white px-4 py-1 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Map className="h-4 w-4 fill-black" />
              <span>PROJECT TRAJECTORY</span>
            </div>
            
            <h1 className="mb-6 text-6xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl">
              OFX <span className="text-white text-outline-black">ROADMAP</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-xl font-bold leading-relaxed md:text-2xl">
              The path forward. Upcoming features, versions, and experiments currently in the lab.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto bg-white" variant="outline" disabled>
                SUBMIT REQUEST
                <Construction className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Striped Bottom Bar */}
        <div className="absolute bottom-0 h-4 w-full border-t-[3px] border-black bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      </section>

      {/* Roadmap Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between border-b-[3px] border-black pb-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight">Version Planning</h2>
              <p className="mt-2 font-mono text-gray-500">// SELECT * FROM roadmap ORDER BY eta ASC</p>
            </div>
            <div className="hidden font-mono text-xl font-bold md:block">
              <Milestone className="inline-block mr-2 h-6 w-6" />
              MILESTONES
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {roadmaps.map((item) => (
              <RoadmapCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Marquee Section */}
      <div className="overflow-hidden border-y-[3px] border-black bg-alert py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xl font-bold uppercase text-white">
          <span>+++ BUILDING THE FUTURE +++</span>
          <span>+++ ITERATION IN PROGRESS +++</span>
          <span>+++ SHIP IT +++</span>
          <span>+++ BUILDING THE FUTURE +++</span>
          <span>+++ ITERATION IN PROGRESS +++</span>
          <span>+++ SHIP IT +++</span>
          <span>+++ BUILDING THE FUTURE +++</span>
          <span>+++ ITERATION IN PROGRESS +++</span>
          <span>+++ SHIP IT +++</span>
        </div>
      </div>
    </div>
  );
}
