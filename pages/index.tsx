import React, { useEffect } from 'react';




import Navbar from '../components/reusable/Navbar'
import Video from '../components/reusable/Video'
import VidiohatElmoaheb from '../components/landingPage/VidiohatElmoaheb'
import VidiohatMoreViews from '../components/landingPage/VidiohatMoreViews'
import Ahdth from '../components/landingPage/Ahdth'
import NewestNews from '../components/landingPage/NewestNews'
import Footer from '../components/reusable/Footer'
import Carousel from '../components/reusable/carousel'
import SwiperCom from '../components/reusable/SwiperCom';
import axios from 'axios';




const Index = () => {
  var param1Value:any ;

  
  const checkSubscribtion = async () => {
    

  
    try {
        const Msisdn ="Msisdn"
        const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/checkSubscriptions?Msisdn=${param1Value}`,{},{ headers: {
          "Api_Key": "elinxfthr62023",
          'content-type': 'text/json'
        }});
      
        if (response.status === 200) {
          // Handle successful upload
          localStorage.setItem('Msisdn', JSON.stringify(param1Value));
          return true
          // setData(response)
         
        } else {
          localStorage.clear();
        }
      } catch (error) {
        // Handle network error or any other error
      }

  };
  useEffect(()=>{
 
    if (typeof window !== 'undefined') {
      const queryParams = new URLSearchParams(window.location.search);
      
      // Reading specific query parameters
       param1Value = window && queryParams.get('Msisdn');
    
       checkSubscribtion()
      
      }
  },[])
console.log(typeof window !== 'undefined'&&localStorage.getItem('Msisdn'))
  return (
      <>
      <Navbar />
      <SwiperCom />
      <div className='container'>
      {/* <VidiohatElmoaheb /> */}
      {/* <Carousel /> */}
      
    
       <VidiohatMoreViews />
        <Ahdth />
        <NewestNews />
   
      </div>
      <Footer />
      
      
    
      </>
  )
}

export default Index