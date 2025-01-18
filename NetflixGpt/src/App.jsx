import Login from './components/Login'
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import appstore from './utils/appstore' 
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase'
import { useEffect } from 'react'


function App() {
 
 

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    }
  ])



//    useEffect(() => {
//   const auth = getAuth();
//    onAuthStateChanged(auth, (user) => {
//    if (user) {
//   } else {
   
    

//   }
// });
// }, [])
  return (
    <>
     <Provider store={appstore}> <RouterProvider router={appRouter} /> </Provider>
    </>
  )
}

export default App
