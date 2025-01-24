import React from 'react'   
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

const movies = useSelector((store) => store.movie?.nowPlayingMovies);
const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);

  return (
    <div className='relative -mt-[10%] z-20 px-6 bg-transparent pb-6'>
      <MovieList title={"Trending Now"} movies={movies} />
      <MovieList title={"upcoming movies"} movies={upcomingMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
    </div>
  )
}

export default SecondaryContainer