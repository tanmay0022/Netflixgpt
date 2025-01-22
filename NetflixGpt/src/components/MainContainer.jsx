import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import MovieBackground from "./MovieBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return ;

  const mainMovie = movies[2];
  console.log(mainMovie);

  const { original_title, overview,id } = mainMovie;

  return (
    <div>
       <VideoCard title={original_title} overview={overview} id={id} />
      <MovieBackground id={id} />
     
       
      
    </div>
  );
};

export default MainContainer;
