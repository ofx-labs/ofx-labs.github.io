import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-[3px] border-black bg-alert py-24 md:py-32">
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full border-[3px] border-black bg-white opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rotate-45 border-[3px] border-black bg-white opacity-20"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 border-[2px] border-black bg-white px-4 py-1 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="h-4 w-4 stroke-[3px]" />
              <span>ERROR 404</span>
            </div>

            <h1 className="mb-6 text-6xl font-black uppercase tracking-tighter text-white md:text-8xl lg:text-9xl">
              ARTICLE <span className="text-alert text-outline-white">NOT FOUND</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl font-bold leading-relaxed text-white md:text-2xl">
              The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/blogs" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  BACK TO BLOGS
                </Button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-900">
                  GO HOME
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Striped Bottom Bar */}
        <div className="absolute bottom-0 h-4 w-full border-t-[3px] border-black bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden border-y-[3px] border-black bg-black py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xl font-bold uppercase text-white">
          <span>+++ ERROR: FILE NOT FOUND +++</span>
          <span>+++ 404: ARTICLE MISSING +++</span>
          <span>+++ RETURN TO INDEX +++</span>
          <span>+++ ERROR: FILE NOT FOUND +++</span>
          <span>+++ 404: ARTICLE MISSING +++</span>
          <span>+++ RETURN TO INDEX +++</span>
        </div>
      </div>
    </div>
  );
}
