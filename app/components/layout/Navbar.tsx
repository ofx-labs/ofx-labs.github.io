import Link from "next/link";
import Image from "next/image";
import { Github, Terminal } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-[3px] border-black bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 overflow-hidden items-center justify-center border-2 border-black bg-primary transition-transform group-hover:rotate-12">
            <Image
              src="/logo.png"
              alt="OFX Labs Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter">OFX LABS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/blogs"
            className="font-bold hover:underline decoration-2 underline-offset-4"
          >
            Blogs
          </Link>

          <div className="h-8 w-[2px] bg-black mx-2" />

          <a
            href="https://github.com/ofx-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu (Placeholder) */}
        <button className="md:hidden">
          <Terminal className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
