import React from 'react'
import Navbar from '../components/reusable/Navbar'
import Video from '../components/reusable/Video'
import VidiohatElmoaheb from '../components/landingPage/VidiohatElmoaheb'
import VidiohatMoreViews from '../components/landingPage/VidiohatMoreViews'
import Ahdth from '../components/landingPage/Ahdth'
import NewestNews from '../components/landingPage/NewestNews'
import Footer from '../components/reusable/Footer'
import Carousel from '../components/reusable/carousel'
const index = () => {
  return (
      <>
      <Navbar />
      
      <div className='container'>
      <VidiohatElmoaheb />
      <Carousel />
      
      {/* <NewestNews /> */}
       <VidiohatMoreViews />
        <Ahdth />
      
      </div>
      <Footer />
      
    
      </>
  )
}

export default index