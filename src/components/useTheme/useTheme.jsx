import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}
// src/hooks/useTheme.js
// import { useEffect, useState } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     // اول از localStorage بخونه، در غیر اینصورت از تنظیمات سیستم استفاده کنه
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) return savedTheme;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });

//   useEffect(() => {
//     const html = document.documentElement;

//     if (theme === "dark") {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return { theme, toggleTheme };
// }
