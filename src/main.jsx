import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from '../src/store/globalStore'
import {Provider} from 'react-redux' // this Provider acts like a wrapper -> iski help se ham <App/> me jitne bhi components hai -> unko store ka access denge
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Carousel from './pages/Carousel'

const router = createBrowserRouter(
  // createBrowserRouter is a function that takes an array of paths in arguement and returns a router object 

  [
    
      {path:"/", element: <Carousel/>},
      // {path: "/carousel", element: <Carousel/>}

    

  ]
)



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    {/* basically, routes ki information sbhi components ko available kraane k liye we use RouteProvider */}
  
    </Provider>
  </StrictMode>,
)


  // what is this createRoot function ?

  /* concept of virtual DOM in react:
  basically, ek hamara Real DOM hota hai -> elements rendered by the browser, aur ek hamara virtual dom hota hai -> jo react internally memory me create krta hai

  so basically, jab bhi hamare Real DOM me koi changes hote hain -> react compares them with the virtual dom -> using some algorithm -> finds out what changed -> updates the real dom effeciently

  so yaha createRoot se hamari virtual dom ki root create hoti hai -> we are connecting this virtual dom to the real dom using this element with id "root" -> render function react components ko render krke -> real dom wali root me inject kr deta hai

  */

