import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  let slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to blog
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {post.title}
          </h1>
          <time className="text-gray-500 dark:text-gray-400 text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
