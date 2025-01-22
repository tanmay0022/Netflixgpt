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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50'>
        <div className='flex justify-between'>
            <img src={netflixlogo} alt="Netflix Logo" 
                className='w-28'/>
            {location.pathname === '/browse' && (
                <button onClick={HandleSignOut} 
                    className='text-white py-2 px-4 bg-transparent hover:border-none underline border-none cursor-pointer'>
                    SignOut
                </button>
            )}
        </div>
    </div>
  )
}

export default Header