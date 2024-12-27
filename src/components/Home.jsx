import React, { useState, useEffect } from "react";
import Card from '../card/Card'

function Home({ q, language }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=20&page=${page}&sortBy=publishedAt&apiKey=72f945e9bb36445aa39857d675e1c65d`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(prevArticles => [...prevArticles, ...data.articles.filter((x) => x.title !== "[Removed]")]);
        setPage(prevPage => prevPage + 1);
      } else {
        throw new Error(data.message || 'Failed to fetch news');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setArticles([]);
    setPage(1);
    fetchNews();
  }, [q, language]);

  if (error) {
    return <div className="text-center py-10 text-red-500 dark:text-red-400">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item, index) => (
          <Card
            key={index}
            source={item.source.name || "N/A"}
            title={item.title}
            description={item.description}
            url={item.url}
            pic={item.urlToImage}
            date={item.publishedAt}
          />
        ))}
      </div>
      {loading && <div className="text-center py-4 text-gray-600 dark:text-gray-400">Loading...</div>}
      {!loading && (
        <div className="text-center mt-8">
          <button 
            onClick={fetchNews}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;




