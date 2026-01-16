declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const metadata: {
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
  };
  export default MDXComponent;
}
