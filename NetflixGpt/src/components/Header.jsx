import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate,useLocation } from 'react-router-dom';
import netflixlogo from '../assets/netflix.png'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();

const HandleSignOut = () => {
    signOut(auth).then(() => {
    
    }).catch((error) => {
      
    }); 
}

useEffect(() => {
  const unsubscribe =onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      dispatch(addUser(uid))
      navigate('/browse');
    } else {
      dispatch(removeUser())
      navigate('/')
    }
  });

  return () => unsubscribe();
}, [])

  return (
    <div className='absolute top-0'>
    <div className='w-screen h-20 bg-gradient-to-b from-black'>
            <img src={netflixlogo} alt="Netflix Logo" 
            className='absolute left-4 top-2 w-28 z-10'/>
        </div>
         {location.pathname === '/browse' && (
           <button onClick={HandleSignOut} className='z-10 absolute top-4 right-4 text-white bg-red-600 py-2 px-4 rounded-xl cursor-pointer'>
             Logout
           </button>
         )}
    </div>
  )
}

export default Header