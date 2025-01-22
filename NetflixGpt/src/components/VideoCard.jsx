import React from 'react'

const VideoCard = ({title,overview}) => { 
  return (
    <div>
      <div className='pl-24 absolute pt-[20%] bg-gradient-to-r from-black from-[10%] to-transparent z-10 aspect-video'>
        <h1 className="text-6xl font-bold text-white font-sans tracking-tight mb-2">{title}</h1>
        <p className="text-gray-300 w-[35%] mt-4 text-lg font-medium leading-relaxed">{overview}</p>
        <div className="flex gap-4 mt-8">
            <button className="bg-white hover:bg-opacity-80 text-black px-8 py-2 rounded-md text-xl font-semibold transition duration-200">Play</button>
            <button className="bg-gray-500 bg-opacity-50 hover:bg-opacity-40 text-white px-8 py-2 rounded-md text-xl font-semibold transition duration-200">More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;