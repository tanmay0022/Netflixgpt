import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-transparent pt-3 mt-4 ">
      <h1 className="text-3xl font-bold text-white py-2">{title}</h1>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-2 ${isHovered ? '' : 'animate-scroll'}`}
        >
          {/* First pass through the movies */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {/* Duplicate the list to create an infinite scrolling effect */}
          {movies.map((movie) => (
            <MovieCard key={`dup-${movie.id}`} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
