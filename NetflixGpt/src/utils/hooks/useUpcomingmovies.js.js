import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../movieSlice';
import { useEffect } from 'react';
import { options } from '../constant';


const useUpcoming = () => {
const dispatch = useDispatch();

const getUpcomingMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.status_message || response.statusText}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    // adding movies list to store
    dispatch(addUpcomingMovies(data.results));

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

useEffect(() => {
  getUpcomingMovies();
},[])
}

export default useUpcoming;