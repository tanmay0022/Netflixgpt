import React, { useState, useEffect } from 'react'
import Header from './Header'
import useNowplayingMovies from '../utils/hooks/useNowplayingMovies.js'
import usePopularmovies from '../utils/hooks/usePopularmovies.js'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import useUpcomingMovies from '../utils/hooks/useUpcomingmovies.js'

import MainSearch from './MainSearch.jsx'

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);
  const showSearch = useSelector((store) => store.search?.showSearch);

  useNowplayingMovies();
  usePopularmovies();
  useUpcomingMovies();

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  return (
    <div className='z-100000'>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
        </div>
      ) : (
        <>
          <Header/>
          {showSearch ? (
            <MainSearch/>
          ) : (
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Browse