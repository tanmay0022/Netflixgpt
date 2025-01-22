import React from 'react'   
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

const movies = useSelector((store) => store.movie?.nowPlayingMovies);
console.log(movies);

  return (
    <div className='relative -mt-[2%] z-20 px-6 bg-transparent'>
      <MovieList title={"Trending Now"} movies={movies} />
    </div>
  )
}

export default SecondaryContainer