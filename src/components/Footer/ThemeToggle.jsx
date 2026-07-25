import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const ThemeToggle = () => {
  // 1. Initial State: Local storage check karega ya system preference dekhega
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) return savedTheme;

      // Agar pehle se koi save nahi hai, toh system preferences check karega
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark"; // Default fallback
  });

  // 2. Effect Hook: Jab bhi theme state badlegi, DOM aur Local Storage update hoga
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [theme]);

  // 3. Toggle Handler Function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative"
    >
      {/* 360-degree Smooth Rotation wrapper wrapper */}
      <div
        className={`transform transition-transform duration-500 ease-out ${
          theme === "dark" ? "rotate-[360deg]" : "rotate-0"
        }`}
      >
        {theme === "dark" ? (
          // Moon Icon - Smooth fade in animation aur dynamic rotation depth
          <FaMoon
            className="text-gray-300 animate-fade-in transition-transform duration-300 group-hover:scale-110"
            size={24}
          />
        ) : (
          // Sun Icon - Gold/Orange tint for day theme
          <FaSun
            className="text-yellow-400 animate-fade-in transition-transform duration-300 group-hover:scale-110"
            size={24}
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
