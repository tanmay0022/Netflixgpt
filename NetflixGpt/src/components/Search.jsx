import React from "react";

const Search = () => {
  return (
    <div className=" relative -top-60  flex items-center justify-center bg-black min-h-full w-screen">

      <div className="relative min-w-[700px] max-w-md ">
        <input
          type="text"
          placeholder="what would you like to watch?"
          className="w-full p-4 text-white bg-transparent rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    
    

    </div>
  );
};

export default Search;
