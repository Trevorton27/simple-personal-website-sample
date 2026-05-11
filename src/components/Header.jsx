"use client";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

export default function Header() {
  let { isDark, toggle } = useTheme();
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        >
          Your Name
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/blog"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col gap-4 bg-white dark:bg-gray-900">
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
