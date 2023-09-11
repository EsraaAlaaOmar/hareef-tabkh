import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Video from '../reusable/Video'
import { SimpleGrid,Box} from '@chakra-ui/react'
import Link from 'next/link'
import Loader from '../reusable/Loader';

const VidiohatMoreViews = () => {
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
  // const [, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
   
      const response = await axios.get('https://vodafone.alerting.services/LawMawhobApis/Talents/GetVideosMostSeen', {
        headers: {
          "Header" :" Access-Control-Allow-Headers",
          "value":"api_key",
          "Api_Key": "elinxfthr62023",
          'content-type': 'text/json'
        }});
      // setData(response.data as VideoData[]); // Using a type assertion here
      // setIsLoading(false);
      return response.data

    
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos", fetchData)


 
  const renderedVideos = data?.slice(0, 3)?.map((video:VideoData) => {
    return<span key={video.VideoId}>   <Video videodetails={video} /></span>
  })
  return (
    <>
{isLoading? <Loader /> :<Box padding=" 20px " >
<Link href='/' className="section-title">
فيديوهات المواهب ( الأكثر مشاهدة )
    </Link>
    <Link href='/' className="section-page">
            عرض الكل 
          </Link>
          <br style={{clear: "both"}}/>
    <div className='videos-grid'>
              {renderedVideos}
            
    </div >
    
</Box>

        }
    </>
  )
}

export default VidiohatMoreViews