import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="bg-transparent pt-3 pb-3 overflow-x-hidden w-screen">
      <h1 className="text-3xl font-bold text-white py-2">{title}</h1>
      <div className="relative overflow-x-scroll">
        <div className="flex gap-2 animate-scroll hover:animate-none">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))} 
          {movies.map((movie) => (
            <MovieCard key={`dup-${movie.id}`} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
