import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Video from '../reusable/Video'
import { Grid, GridItem ,Box} from '@chakra-ui/react'
import Link from 'next/link'
import Loader from '../reusable/Loader';

const Ahdth = () => {
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
  // const [data, setData] = useState<VideoData[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
 
    const response = await axios.get('http://196.219.32.230:8088/LawMawhobApis/Talents/GetLastVideos');
    // setData(response.data as VideoData[]); // Using a type assertion here
    // setIsLoading(false);
    return (response.data)
   
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos", fetchData)
  // useEffect(() => {
  //   fetchData();

  //   console.log(data)
  // }, []);
 
  const renderedVideos = data?.map((video:VideoData) => {
    return<span key={video.VideoId}> <GridItem p="5px">  <Video videodetails={video} /></GridItem></span>
  })
  return (
    <>
      {isLoading ? <Loader /> : <Box padding=" 10px 0 ">
     
    <Link href='/' className="section-title">
    فيديوهات المواهب ( الأحدث )
        </Link>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} >
              {renderedVideos}
            
        </Grid>
        <Link href='/upload' >
          <div className="upload">تحميل</div>
        </Link>
      </Box>}
      </>
  )
}

export default Ahdth