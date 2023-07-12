import React from 'react'
import Navbar from '../components/reusable/Navbar'
import Video from '../components/reusable/Video'
import VidiohatElmoaheb from '../components/landingPage/VidiohatElmoaheb'
import VidiohatMoreViews from '../components/landingPage/VidiohatMoreViews'
import Ahdth from '../components/landingPage/Ahdth'
import NewestNews from '../components/landingPage/NewestNews'
const index = () => {
  return (
      <>
      
      <div className='container'>
      <Navbar />
      <VidiohatElmoaheb />
      <NewestNews />
       <VidiohatMoreViews />
       <Ahdth />
      </div>
      
    
      </>
  )
}

export default index