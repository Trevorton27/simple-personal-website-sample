import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Articles about JavaScript, React, Next.js, and learning to build for the web.",
};

export default function BlogPage() {
  let posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Writing about what I learn as I go.
      </p>

      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
