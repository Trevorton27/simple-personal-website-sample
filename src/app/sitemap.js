import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  let posts = getAllPosts();
  let baseUrl = "https://yoursite.com";

  let postEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: baseUrl },
    { url: `${baseUrl}/blog` },
    { url: `${baseUrl}/portfolio` },
    { url: `${baseUrl}/contact` },
    ...postEntries,
  ];
}
