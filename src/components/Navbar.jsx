import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const unreadJobAlerts = 3;

  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      } bg-indigo-600 dark:bg-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white dark:text-gray-100">
            JobHub
          </div>

          <ul className="flex space-x-6 items-center">
            <li className="relative">
              <Link
                to="/jobcards"
                className="text-white hover:text-cyan-300 font-medium transition dark:text-gray-100"
              >
                Jobs
              </Link>
              {unreadJobAlerts > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {unreadJobAlerts}
                </span>
              )}
            </li>
            <li>
              <Link
                to="/companyprofile"
                className="text-white hover:text-cyan-300 font-medium transition dark:text-gray-100"
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition dark:bg-gray-100 dark:text-gray-900"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition dark:bg-gray-100 dark:text-gray-900"
              >
                Register
              </Link>
            </li>
            <li>
              <button
                onClick={cycleTheme}
                className="bg-white text-indigo-700 font-semibold text-base px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition dark:bg-gray-100 dark:text-gray-900"
              >
                {theme === "light" && "Light"}
                {theme === "dark" && "Dark"}
                {theme === "system" && "System"}
              </button>
            </li>
            <li>
              <Link to="/profilecard">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition transform"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
