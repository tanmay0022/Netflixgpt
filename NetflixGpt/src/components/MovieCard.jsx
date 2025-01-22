import React from 'react'

const MovieCard = ({posterPath}) => {
  console.log(posterPath);
  
  return (
    <div>
        <img src={'https://image.tmdb.org/t/p/w500' + posterPath} 
             className='w-[500px] min-w-[200px] cursor-pointer transition-all duration-300 hover:scale-105 min-h-[80%] rounded-lg' 
             alt="movie logo" />
    </div>
  )
}

export default MovieCard