import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../utils/hooks/useNowplayingMovies.js'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

useNowplayingMovies();

  return (
    <div className='z-100000'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse