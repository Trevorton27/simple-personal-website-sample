import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export const metadata = {
  title: "Portfolio",
  description: "Projects I have built while learning web development.",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Things I have built while learning. Each one taught me something different.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {portfolioData.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded shrink-0">
                {project.category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-4">
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
    </div>
  );
}
