/** @type {import('next').NextConfig} */
const nextConfig = {
  // react-markdown v10+ is ESM-only; transpile it so Next.js can bundle it
  transpilePackages: ["react-markdown", "remark-gfm", "vfile", "vfile-message", "unist-util-stringify-position"],
};

export default nextConfig;
