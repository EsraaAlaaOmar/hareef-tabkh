import React from 'react';




import Navbar from '../components/reusable/Navbar'
import Video from '../components/reusable/Video'
import VidiohatElmoaheb from '../components/landingPage/VidiohatElmoaheb'
import VidiohatMoreViews from '../components/landingPage/VidiohatMoreViews'
import Ahdth from '../components/landingPage/Ahdth'
import NewestNews from '../components/landingPage/NewestNews'
import Footer from '../components/reusable/Footer'
import Carousel from '../components/reusable/carousel'
import SwiperCom from '../components/reusable/SwiperCom';




const Index = () => {
 

  return (
      <>
      <Navbar />
      <SwiperCom />
      <div className='container'>
      <VidiohatElmoaheb />
      {/* <Carousel /> */}
      
    
       <VidiohatMoreViews />
        <Ahdth />
        <NewestNews />
        <Footer />
      </div>
  
      
      
    
      </>
  )
}

export default Index