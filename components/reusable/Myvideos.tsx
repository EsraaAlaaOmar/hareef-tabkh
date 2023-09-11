import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import { useQuery, useMutation , useQueryClient } from 'react-query';
import MySingleVideo from './MySingleVideo';
import Loader from './Loader';
const axios = require("axios");

interface VideoData {
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
const Myvideos = () => {
  // const [data, setData] = useState<VideoData[] | null>(null);

  const fetchData = async () => {
    

  
    try {
        const Msisdn ="Msisdn"
        const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/GetMyVdeos?Msisdn=${Msisdn}`,{},{ headers: {
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

  function useDeleteItem() {
    const queryClient = useQueryClient();
  
    const deleteItem = async (vidId:string) => {
      // Make your delete API request here
      const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/DeleteVideo?VideoId=${vidId}`,{},{ headers: {
        "Header" :" Access-Control-Allow-Headers",
        "value":"api_key",
        "Api_Key": "elinxfthr62023",
        'content-type': 'text/json'
      }});
  
      // Invalidate the query to refetch the data
      queryClient.invalidateQueries('myvideos');
  
      return response.data;
    };
  
    return useMutation((vidId: string) => {
      return  deleteItem(vidId)
    })
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("myvideos", fetchData)
  console.log(data)
  
  const renderedVideos =
 ( data?.length === 0)?<>ليس لديك اي فديوهات </>
   :
  data?.map((video:VideoData)=><MySingleVideo key={video.VideoId} videoDetails={video} useDeleteItem={useDeleteItem} />)
  return (
      <div>
          <div className="upload-video">
    <p className="upload-qoute">
                 عندك موهبة ونفسك تشاركها مع الناس؟
                  <br />
                !فرصتك جت! يلا شاركنا بموهبتك  
     </p>
     <Link href="/upload">
        <button className="link-button">
             إضافة فديو    
        </button>
     </Link>
    
        
        <div className="row">
      {isLoading? <Loader />  : renderedVideos}
   

    </div>
       <div>
  
  </div>
    <div >
    
</div>
<Link href="/compeition">
<button className="link-button">
   
     المسابقة    
    
</button>
</Link>
   </div>
    </div>
  )
}

export default Myvideos