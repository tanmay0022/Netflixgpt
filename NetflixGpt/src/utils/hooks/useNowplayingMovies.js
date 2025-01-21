import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../movieSlice';
import { useEffect } from 'react';
import { options } from '../../utils/constant';


const useNowplayingMovies = () => {
const dispatch = useDispatch();

const getNowPlaying = async () => {
  console.log('Fetching now playing movies...');
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.status_message || response.statusText}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    // adding movies list to store
    dispatch(addNowPlayingMovies(data.results));

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

useEffect(() => {
  getNowPlaying();
},[])
}

export default useNowplayingMovies;