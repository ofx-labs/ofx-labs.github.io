export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: "Classified" | "Public Beta" | "Blueprint" | "Open Source";
  url: string;
  stars: number;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "promptman",
    description: "Management for prompt based on electron-nextjs-seekdb-template.",
    tags: ["TypeScript", "Electron", "SeekDB"],
    status: "Classified",
    url: "https://github.com/ofx-labs/promptman",
    stars: 0,
    updatedAt: "44 minutes ago",
  },
  {
    id: "2",
    name: "seekdb-client",
    description: "Official TypeScript client for SeekDB integration.",
    tags: ["TypeScript", "Database", "Client"],
    status: "Public Beta",
    url: "https://github.com/ofx-labs/seekdb-client",
    stars: 2,
    updatedAt: "3 days ago",
  },
  {
    id: "3",
    name: "langchain-vector-store",
    description: "Experimental vector store implementation for LangChain ecosystem.",
    tags: ["AI", "Vector Store", "LangChain"],
    status: "Classified",
    url: "https://github.com/ofx-labs/langchain-vector-store",
    stars: 0,
    updatedAt: "last week",
  },
  {
    id: "4",
    name: "mine-kb",
    description: "A local personal knowledge base built directly on SeekDB.",
    tags: ["Rust", "Knowledge Base", "Local First"],
    status: "Open Source",
    url: "https://github.com/ofx-labs/mine-kb",
    stars: 0,
    updatedAt: "2 weeks ago",
  },
  {
    id: "5",
    name: "electron-nextjs-seekdb-template",
    description: "Local prompt management tools starter template.",
    tags: ["TypeScript", "Electron", "Template"],
    status: "Blueprint",
    url: "https://github.com/ofx-labs/electron-nextjs-seekdb-template",
    stars: 0,
    updatedAt: "2 weeks ago",
  },
  {
    id: "6",
    name: "nextjs-seekdb-template",
    description: "Next.js starter template pre-configured with SeekDB.",
    tags: ["TypeScript", "Next.js", "Template"],
    status: "Blueprint",
    url: "https://github.com/ofx-labs/nextjs-seekdb-template",
    stars: 0,
    updatedAt: "3 weeks ago",
  },
  {
    id: "7",
    name: "awesome-seekdb",
    description: "A curated list of the best SeekDB resources and projects.",
    tags: ["HTML", "Resources", "List"],
    status: "Open Source",
    url: "https://github.com/ofx-labs/awesome-seekdb",
    stars: 0,
    updatedAt: "last month",
  },
];

export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Future of Local-First Development",
    description: "Why we believe the next wave of web applications will run entirely on your device, powered by databases like SeekDB.",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Local First", "Architecture"],
    slug: "future-local-first",
  },
  {
    id: "2",
    title: "Introducing SeekDB: A New Era",
    description: "A lightweight, embeddable vector database designed specifically for the modern web stack and local AI applications.",
    date: "2024-03-01",
    readTime: "8 min read",
    tags: ["SeekDB", "Database", "Vector"],
    slug: "introducing-seekdb",
  },
   {
    id: "3",
    title: "Engineering Principles at OFX Labs",
    description: "How we approach building experimental software in a rapidly changing landscape.",
    date: "2024-02-20",
    readTime: "6 min read",
    tags: ["Engineering", "Culture"],
    slug: "engineering-principles",
  },
];

export interface RoadmapItem {
  id: string;
  projectId: string; // Links to a project
  projectName: string;
  version: string;
  title: string;
  description: string;
  features: string[];
  status: "Planned" | "In Progress" | "Review";
  eta: string;
}

export const roadmaps: RoadmapItem[] = [
  {
    id: "1",
    projectId: "1",
    projectName: "promptman",
    version: "v1.1.0",
    title: "Advanced Template Support",
    description: "Introducing dynamic variables and nested templates for complex prompt engineering workflows.",
    features: [
      "Dynamic variable interpolation",
      "Nested template support",
      "Export to JSON/YAML",
      "Dark mode improvements"
    ],
    status: "In Progress",
    eta: "Q2 2024"
  },
  {
    id: "2",
    projectId: "2",
    projectName: "seekdb-client",
    version: "v0.5.0",
    title: "Performance Optimization",
    description: "Major performance improvements for vector search and indexing.",
    features: [
        "WASM core rewrite",
        "Parallel indexing",
        "Memory usage reduction (approx. 40%)",
        "Browser compatibility fixes"
    ],
    status: "Planned",
    eta: "Q3 2024"
  },
  {
    id: "3",
    projectId: "4",
    projectName: "mine-kb",
    version: "v2.0.0",
    title: "Mobile Sync & Cloud Backup",
    description: "Seamless synchronization between desktop and mobile devices with optional encrypted cloud backup.",
    features: [
        "iOS & Android companion apps",
        "End-to-end encrypted sync",
        "WebDAV support",
        "Conflict resolution UI"
    ],
    status: "Review",
    eta: "Q2 2024"
  }
];
