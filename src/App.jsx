import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [dosearch, setDosearch] = useState('');
  const [lang, setLang] = useState('hi');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Navbar 
          dosearch={dosearch} 
          setdosearch={setDosearch} 
          lang={lang} 
          setLang={setLang}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main className="flex-grow bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home q='india' language={lang} />} />
            <Route path="/all" element={<Home q='all' language={lang} />} />
            <Route path="/politics" element={<Home q='politics' language={lang} />} />
            <Route path="/sports" element={<Home q='sports' language={lang} />} />
            <Route path="/technology" element={<Home q='technology' language={lang} />} />
            <Route path="/global" element={<Home q='global' language='en' />} />
            <Route path="/science" element={<Home q='science' language={lang} />} />
            <Route path="/search" element={<Home q={dosearch} language={lang} />} />
            <Route path="*" element={<h1 className="text-center text-2xl mt-8">404 - Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
