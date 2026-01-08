import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6">
                <Image
                  src="/logo.png"
                  alt="OFX Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">OFX LABS</span>
            </div>
            <p className="max-w-md font-mono text-sm text-gray-400"></p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-primary uppercase tracking-wider">
              Ecosystem
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://en.oceanbase.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  OceanBase Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.oceanbase.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  SeekDB (AI-Native)
                </a>
              </li>
              <li>
                <a
                  href="https://en.oceanbase.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Engineering Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-primary uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://twitter.com/OceanBase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/oceanbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/oceanbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-8 md:flex-row md:justify-between md:items-center">
          <p className="font-mono text-xs text-gray-500">
            © {new Date().getFullYear()} OFX LABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <span className="bg-primary text-black px-2 py-0.5 text-xs font-bold">
              SYS: ONLINE
            </span>
            <span className="bg-gray-800 text-white px-2 py-0.5 text-xs font-mono">
              v0.1.0-beta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
