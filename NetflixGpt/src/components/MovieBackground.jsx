import React, { useEffect, useState } from 'react'   
import {options} from '../utils/constant'
import { useDispatch,useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieSlice'


const MovieBackground = ({id}) => {

    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movie?.trailerVideo);
    const videoTrailer = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
            const data = await response.json();
            const filterData = data.results.filter((video) => video.type === 'Trailer');
            const trailer = filterData[0];
            // trailer.key = trailer.key;
            dispatch(addTrailer(trailer));
            //  console.log(trailer);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        videoTrailer()
    },[])

  return (
    <div>
      {trailer && (
        <div >
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?si=eov8hmPBQFiOZ9uC&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailer.key}&modestbranding=1&vq=hd1080`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; controls" 
          />
        </div>
      )}
    </div>
  )
}

export default MovieBackground