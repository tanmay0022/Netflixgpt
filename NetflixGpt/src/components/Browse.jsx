import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../utils/hooks/useNowplayingMovies.js'
import MainContainer from './MainContainer'

const Browse = () => {

useNowplayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse