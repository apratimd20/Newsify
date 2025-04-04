import React from 'react';

const Card = ({ source, title, description, url, pic, date }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-lg">
      <img
        src={pic || "/assets/noimage.jpeg"}
        alt={title || "News image"}
        className="w-full h-48 sm:h-56 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/noimage.jpeg";
        }}
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white line-clamp-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
            {description}
          </p>
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="truncate">{source || "Unknown Source"}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
