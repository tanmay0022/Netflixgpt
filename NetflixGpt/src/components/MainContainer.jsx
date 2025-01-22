import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieBackground from "./MovieBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return ;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview,id } = mainMovie;

  return (
    <div>
       <MovieCard title={original_title} overview={overview} id={id} />
      <MovieBackground id={id} />
     
       
      
    </div>
  );
};

export default MainContainer;
