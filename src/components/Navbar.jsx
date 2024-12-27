import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    setLang(lang === 'hi' ? 'en' : 'hi');
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
            <form onSubmit={handleSearch} className="mr-4">
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={handleInputChange}
                className="rounded-l-md py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white dark:bg-gray-700 dark:text-white"
              />
              <button type="submit" className="px-4 py-2 rounded-r-md bg-blue-500 text-white">Search</button>
            </form>
            <select 
              value={lang} 
              onChange={handleLang}
              className="mr-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
            >
              <option value="hi">HI</option>
              <option value="en">EN</option>
            </select>
            <button 
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
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
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={handleInputChange}
                className="rounded-l-md py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white dark:bg-gray-700 dark:text-white w-full"
              />
              <button type="submit" className="px-4 py-2 rounded-r-md bg-blue-500 text-white">Search</button>
            </form>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-between items-center">
            <select 
              value={lang} 
              onChange={handleLang}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
            >
              <option value="hi">HI</option>
              <option value="en">EN</option>
            </select>
            <button 
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
