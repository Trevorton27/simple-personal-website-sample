import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostSlugs() {
  let files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug) {
  let fullPath = path.join(postsDirectory, slug + ".md");
  let fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    published: data.published !== false,
    content,
  };
}

export function getAllPosts() {
  let slugs = getAllPostSlugs();
  let posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}
