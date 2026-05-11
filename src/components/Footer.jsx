export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {year} Your Name. Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
