"use client";
import { useState, useEffect, createContext, useContext } from "react";

let ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let saved = localStorage.getItem("theme");
    let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved === "dark" || (!saved && prefersDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
