import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../reusable/Video'
import { Grid, GridItem ,Box} from '@chakra-ui/react'
import Link from 'next/link'
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
  const [data, setData] = useState<VideoData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://196.219.32.230:8088/LawMawhobApis/Talents/GetAllVideos');
      setData(response.data as VideoData[]); // Using a type assertion here
      setIsLoading(false);
      console.log(response.data )
    } catch (error:unknown) {
      setError(error as Error);
      setIsLoading(false);
    }
    
  };

  useEffect(() => {
    fetchData();

    console.log(data)
  }, []);
 
  const renderedVideos = data?.map(video => {
    <GridItem p="5px">  <Video videodetails={video} /></GridItem>
  })
  return (
    <>
<Box padding=" 10px 0 ">
<Link href='/' className="section-title">
    فديوهات المواهب
    </Link>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} >

    {renderedVideos}
    </Grid>
    <Link href='/upload' >
          <div className="upload">تحميل</div>
        </Link>
</Box>

        
    </>
  )
}

export default VidiohatElmoaheb