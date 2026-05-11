import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import portfolioData from "@/data/portfolio.json";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  let recentPosts = getAllPosts().slice(0, 3);
  let featuredProjects = portfolioData.filter((p) => p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-24">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I&apos;m Your Name.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          I&apos;m a web developer learning to build things on the internet. I write about
          JavaScript, React, and everything I pick up along the way.
        </p>
        <div className="flex gap-4">
          <Link
            href="/portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See my work
          </Link>
          <Link
            href="/blog"
            className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I started learning web development six weeks ago with no prior experience. I
          now have a working website, a blog, and a few projects I can point to and
          explain end to end. I am looking for opportunities to keep building and
          learning on a team.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          When I am not coding I am [your interests here]. I am based in [your city].
        </p>
      </section>

      {/* Featured Projects */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <Link
            href="/portfolio"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded shrink-0">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View all →
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {post.title}
                </h3>
                <time className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Send me a message.
        </p>
        <div className="max-w-lg">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
