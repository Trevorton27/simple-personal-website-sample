import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let project = portfolioData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  let project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/portfolio"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to portfolio
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="text-sm text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium py-2 px-5 rounded-md transition-colors text-sm"
            >
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-colors text-sm"
            >
              Live Demo
            </a>
          )}
        </section>
      </article>
    </div>
  );
}
