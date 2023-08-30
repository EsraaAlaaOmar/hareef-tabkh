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
  DateIn: Date;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  Votes:[]
}

const VidiohatElmoaheb = () => {
  // const [data, setData] = useState<VideoData[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
  
      const response = await axios.get('https://vodafone.alerting.services/LawMawhobApis/Talents/GetAllVideos',{ headers: {
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
 
  const renderedVideos = data?.slice(0, 4)?.map((video:VideoData) => {
    return<span key={video.VideoId}> <Box p="5px">  <Video videodetails={video} /></Box></span>
  })
  return (
    <>{isLoading ? <Loader />
      :<Box padding=" 10px 0 ">
      <Link href='/' className="section-title">
          فديوهات المواهب
          </Link>
          <SimpleGrid  minChildWidth='120px'  spacing='20px' >
              {renderedVideos}
            
        </SimpleGrid >
          <Link href='/upload' >
                <div className="upload">تحميل</div>
              </Link>
      </Box>
    }


        
    </>
  )
}

export default VidiohatElmoaheb