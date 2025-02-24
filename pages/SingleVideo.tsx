import React, { useState } from 'react'
import Video from '../components/reusable/Video'
import axios from 'axios';
import { useQuery } from 'react-query';
import Navbar from '../components/reusable/Navbar'
import Footer from '../components/reusable/Footer';
import SwiperCom from '../components/reusable/SwiperCom';
interface VideoData {

  DateIn: Date;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  NShares: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  Votes:[]
}
const SingleVideo = () => {
   const[viewList, setViewList] = useState()  
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
            const response = await axios.post(`https://vf.alerting.services/SherbiniApis/GetSingleVideoByID?VideoId=${param1Value}`,{},{ headers: {
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
      const { isLoading, data, isError, error, isFetching, refetch } = useQuery("singlevideo", fetchData)

      // make video in top after navigation
      const scrolToTop=()=>{
        // Assuming you have a reference to the pagination element
  const singleVideo = document.getElementById('single-video-continer');
  
  // Scroll to the pagination element
  singleVideo?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  }

  setTimeout(() => {scrolToTop()}, 1500);
  return (
    <>
     <Navbar getShowList={setViewList}/>

    <SwiperCom />
    <div id='single-video-continer' className='single-video-continer'>

   
    {data&& <Video videodetails={data}  refetchVideos={()=>{}} Msdn="" />}
     </div>
     <Footer />
    </>
  )
}

export default SingleVideo