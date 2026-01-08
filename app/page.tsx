import { Button } from "./components/ui/Button";
import { ProjectCard } from "./components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { ArrowRight, FlaskConical, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-[3px] border-black bg-primary py-24 md:py-32">
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full border-[3px] border-black bg-white opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rotate-45 border-[3px] border-black bg-alert opacity-20"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-1 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="h-4 w-4 fill-black" />
              <span>WARNING: EXPERIMENTAL ZONE</span>
            </div>

            <h1 className="mb-6 text-6xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl">
              OFX <span className="text-white text-outline-black">LABS</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl font-bold leading-relaxed md:text-2xl">
              We break things so you don&apos;t have to. A collection of
              experimental tools, libraries, and protocols pushing the web
              forward.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/ofx-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full">
                  EXPLORE PROJECTS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/roadmap" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white">
                  ROADMAP
                  <FlaskConical className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Striped Bottom Bar */}
        <div className="absolute bottom-0 h-4 w-full border-t-[3px] border-black bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between border-b-[3px] border-black pb-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight">
                Active Experiments
              </h2>
              <p className="mt-2 font-mono text-gray-500">
                {"// SELECT * FROM projects WHERE status != 'boring'"}
              </p>
            </div>
            <div className="hidden font-mono text-xl font-bold md:block">
              COUNT: {projects.length}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden border-y-[3px] border-black bg-alert py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xl font-bold uppercase text-white">
          <span>+++ SYSTEM STATUS: OPERATIONAL +++</span>
          <span>+++ DEPLOYING TO EDGE... +++</span>
          <span>+++ NEXT.JS 15 READY +++</span>
          <span>+++ CACHE INVALIDATED +++</span>
          <span>+++ SYSTEM STATUS: OPERATIONAL +++</span>
          <span>+++ DEPLOYING TO EDGE... +++</span>
          <span>+++ NEXT.JS 15 READY +++</span>
          <span>+++ CACHE INVALIDATED +++</span>
          <span>+++ SYSTEM STATUS: OPERATIONAL +++</span>
          <span>+++ DEPLOYING TO EDGE... +++</span>
          <span>+++ NEXT.JS 15 READY +++</span>
          <span>+++ CACHE INVALIDATED +++</span>
        </div>
      </div>
    </div>
  );
}
