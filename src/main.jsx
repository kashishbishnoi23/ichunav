import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from '../src/store/globalStore'
import {Provider} from 'react-redux' // this Provider acts like a wrapper -> iski help se ham <App/> me jitne bhi components hai -> unko store ka access denge
import {BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Carousel from './pages/Carousel'
import Entry from './pages/Entry'
import Home from './pages/Home'
import LokSabhaVoting from './pages/LokSabhaVoting'
import SelectLocation from './pages/SelectLocation'
import ChooseCandidates from './pages/ChooseCandidates'
import Complete from './pages/Complete'
import ThankYou from './pages/ThankYou'
import VerifyAadhar from './pages/VerifyAdhar'

const router = createBrowserRouter(
  // createBrowserRouter is a function that takes an array of paths in arguement and returns a router object 

  [
    
      {path:"/", element: <VerifyAadhar/>},
      {path: "/carousel", element: <Carousel/>},
      {path: "/home", element:<Home/>},
      {path: "/loksabhavoting", element:<LokSabhaVoting/>},
      
      {path: "/loksabhavoting/selectlocation", element: <SelectLocation/>},
      {path: "/loksabhavoting/choosecandidate", element : <ChooseCandidates/>},

      {path: "/loksabhavoting/complete", element: <Complete/>},
      {path: "/loksabhavoting/thankyou", element: <ThankYou/>}
      
    

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

