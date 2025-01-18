import React from 'react'
import netflixLogo from '../assets/netlixx.png'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Browse = () => {

  const navigate = useNavigate();

  const HandleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      
    }); 
  }
  return (
    <div>
     <div className='w-screen'>
            <img src={netflixLogo} alt="Netflix Logo" 
            className='absolute left-4 top-2 w-28 z-10 scale-1.5 '/>
        </div>
      <button onClick={HandleSignOut}  className='absolute top-4 right-4 text-white bg-red-600 py-2 px-4 rounded-xl cursor-pointer'>Logout</button>

    </div>
  )
}

export default Browse