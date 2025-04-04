import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export const Navbar = ({ dosearch, setdosearch, lang, setLang, darkMode, toggleDarkMode }) => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setdosearch(search);
    navigate("/search");
    setIsMenuOpen(false);
  };

  const handleLang = () => {
    setLang(lang === "hi" ? "en" : "hi");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Newsify
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/all" className="nav-link">All</NavLink>
              <NavLink to="/sports" className="nav-link">Sports</NavLink>
              <NavLink to="/global" className="nav-link">Global</NavLink>
              <NavLink to="/science" className="nav-link">Science</NavLink>
              <NavLink to="/technology" className="nav-link">Technology</NavLink>
              <NavLink to="/politics" className="nav-link">Politics</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="mr-4 flex w-full max-w-xs">
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={handleInputChange}
                className="flex-grow rounded-l-md py-2 px-4 border border-r-0 text-gray-800 border-gray-200 bg-white dark:bg-gray-700 dark:text-white"
              />
              <button type="submit" className="px-4 py-2 rounded-r-md bg-blue-500 text-white whitespace-nowrap">Search</button>
            </form>
            <div className="relative mr-4">
              <select 
                value={lang} 
                onChange={handleLang}
                className="appearance-none rounded-md pl-3 pr-8 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="hi">Hindi</option>
                <option value="en">English</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                ▼
              </div>
            </div>
            <button 
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/all" className="mobile-nav-link">All</NavLink>
            <NavLink to="/sports" className="mobile-nav-link">Sports</NavLink>
            <NavLink to="/global" className="mobile-nav-link">Global</NavLink>
            <NavLink to="/science" className="mobile-nav-link">Science</NavLink>
            <NavLink to="/technology" className="mobile-nav-link">Technology</NavLink>
            <NavLink to="/politics" className="mobile-nav-link">Politics</NavLink>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="flex items-center w-full gap-2">
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={handleInputChange}
                className="flex-grow py-2 px-4 border border-gray-200 rounded-md text-gray-800 bg-white dark:bg-gray-700 dark:text-white"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
            </form>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-between items-center">
            <div className="relative">
              <select 
                value={lang} 
                onChange={handleLang}
                className="appearance-none rounded-md pl-3 pr-8 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="hi">Hindi</option>
                <option value="en">English</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                ▼
              </div>
            </div>
            <button 
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
