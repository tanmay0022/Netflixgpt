import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../utils/hooks/useNowplayingMovies.js'

const Browse = () => {

useNowplayingMovies();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse