import React from 'react'
import Video from '../components/reusable/Video'
import axios from 'axios';
import { useQuery } from 'react-query';
import Navbar from '../components/reusable/Navbar'
import Footer from '../components/reusable/Footer';
import SwiperCom from '../components/reusable/SwiperCom';

const SingleVideo = () => {
    var param1Value:any ;
    if (typeof window !== 'undefined') {
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
     param1Value = window && queryParams.get('ID');

  
    
    }
console.log(param1Value)
    const fetchData = async () => {
    

  
        try {
            const Msisdn ="Msisdn"
            const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/GetSingleVideoByID?VideoId=${param1Value}`,{},{ headers: {
              "Api_Key": "elinxfthr62023",
              'content-type': 'text/json'
            }});
          
            if (response.status === 200) {
              // Handle successful upload
              console.log(response)
              return response.data
              // setData(response)
            } else {
              // Handle upload error
            }
          } catch (error) {
            // Handle network error or any other error
          }
    
      };
      const { isLoading, data, isError, error, isFetching, refetch } = useQuery("myvideos", fetchData)
  return (
    <>
    <Navbar />
    <SwiperCom />
    <div className='single-video-continer'>

   
     <Video videodetails={data} />
     </div>
     <Footer />
    </>
  )
}

export default SingleVideo