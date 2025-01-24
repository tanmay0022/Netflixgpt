import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch } from '../utils/searchSlice'

const Button = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(store => store.search.showSearch);

  const handleSearchClick = () => {
    dispatch(toggleSearch());
  }

  return (
    <button
      onClick={handleSearchClick}
      className="relative mt-3 px-8 py-1 text-lg font-bold text-white transition-all duration-300 rounded-full group"
    >
      <span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 
                   opacity-0 blur-md group-hover:opacity-100 transition-all duration-500 rounded-full"
      ></span>
      <span className="relative z-10">{showSearch ? "browse" : "Ask AI"}</span>
    </button>
  )
}

export default Button