import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../movieSlice';
import { useEffect } from 'react';
import { options } from '../../utils/constant';


const usePopularmovies = () => {
const dispatch = useDispatch();

const getPopularMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.status_message || response.statusText}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    // adding movies list to store
    dispatch(addTopRatedMovies(data.results));

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

useEffect(() => {
  getPopularMovies();
},[])
}

export default usePopularmovies;