import React from 'react'

const MovieCard = ({title,overview}) => {
  return (
    <div className='ml-10'>
        <h1 className="text-6xl font-bold text-white font-sans tracking-tight mb-2">{title}</h1>
        <p className="text-gray-300 w-[30%] mt-4 text-lg font-medium leading-relaxed">{overview}</p>

        <div className="flex gap-4 mt-8">
            <button className="bg-white hover:bg-opacity-80 text-black px-8 py-2 rounded-md text-xl font-semibold transition duration-200">Play</button>
            <button className="bg-gray-500 bg-opacity-50 hover:bg-opacity-40 text-white px-8 py-2 rounded-md text-xl font-semibold transition duration-200">More Info</button>
        </div>
    </div>
  )
}

export default MovieCard;