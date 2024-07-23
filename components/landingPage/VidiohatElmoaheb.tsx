import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../reusable/Video'
import {SimpleGrid ,Box} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../reusable/Loader';
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
  // Add other properties as needed
 DateIn: string;
  Deleted: Boolean;
  NShares: number;
  Description: string;
  NViews: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  NVotes:number;
  PosterUrl:string;
  Votes:[]
}

const VidiohatElmoaheb = () => {
  // const [data, setData] = useState<VideoData[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
  
    const response = await axios.get('https://vodafone.alerting.services/LawMawhobApis/Talents/GetAllVideos', {
      headers: {
        "Header" :" Access-Control-Allow-Headers",
        "value":"api_key",
        "Api_Key": "elinxfthr62023",
        'content-type': 'text/json'
      }});
      return response.data;
 
    
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos", fetchData)
  
 
  
  // useEffect(() => {
  //   // fetchData();

  //   console.log(data)
  //   console.log('esraa')
  // }, []);
 
  const renderedVideos = data?.slice(0, 3)?.map((video:VideoData) => {
    return  <Video videodetails={video} key={video.VideoId}  Msdn="" refetchVideos={refetch} />
  })
  return (
    <>
      {isLoading ? <Loader /> :
        <Box m='24px 0'>
       
          <Link href='/AllVideos' className="section-title">
            فديوهات المواهب
          </Link>
          <Link href='/AllVideos' className="section-page">
            عرض الكل
          </Link>
          <br style={{ clear: "both" }} />
          <div className='videos-grid'>
            {renderedVideos}
     
            
          </div >
          
        </Box>
    

      }
        
    </>
  )
}

export default VidiohatElmoaheb