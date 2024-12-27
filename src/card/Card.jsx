import React from 'react';

const Card = ({ source, title, description, url, pic, date }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <img
        src={pic || "/assets/noimage.jpeg"}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {e.target.onerror = null; e.target.src="/images/noimage.png"}}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{source}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;


