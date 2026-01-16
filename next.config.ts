import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Configure webpack to ensure MDX files are processed
  webpack: (config) => {
    // Check if MDX loader is already configured
    const mdxRule = config.module.rules.find(
      (rule: { test?: RegExp }) =>
        rule.test && rule.test.toString().includes("mdx")
    );

    // If MDX loader is not found, add it
    if (!mdxRule) {
      config.module.rules.push({
        test: /\.mdx$/,
        use: [
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
            },
          },
        ],
      });
    }

    return config;
  },
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
