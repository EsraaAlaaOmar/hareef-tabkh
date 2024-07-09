import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import { useQuery, useMutation , useQueryClient } from 'react-query';
import Pending from './Pending';
import Loader from './Loader';
import Myvideo from './Myvideo';
import Refused from './Refused';
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Upload from './Upload';
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
   const [upload,setUpload] = useState(false)
   const[phoneNumber, setPhoneNumber] = useState<any>()

   useEffect(() => {
    (typeof window !== 'undefined') && setPhoneNumber(localStorage.getItem('Msisdn'));
  },[phoneNumber])
  const fetchData = async () => {
    

  
    try {
       
        const response = await axios.post(`https://vf.alerting.services/HarefKoraApis/Talents/GetMyVdeos?Msisdn=${phoneNumber}`,{},{ headers: {
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
      const response = await axios.post(`https://vf.alerting.services/HarefKoraApis/Talents/DeleteVideo?VideoId=${vidId}`,{},{ headers: {
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
  const queryKey = phoneNumber ? ["myvideos", phoneNumber] : ["myvideos"];
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(queryKey, fetchData)
  console.log(data)
  
 // start pending videos 
 var pendingVideos =data?.filter((video:any)=>video?.Status === 0) 
 const renderedPending =
( pendingVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
  :
  pendingVideos?.map((video:VideoData)=><Pending key={video.VideoId} videodetails={video}  refetch={refetch}  />)
  // end pending videos 
   // start accepted videos 
   var acceptedVideos =data?.filter((video:any)=>video.Status === 1) 
   const renderedaccepted =
  ( acceptedVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
    :
    acceptedVideos?.map((video:VideoData)=><Myvideo key={video.VideoId} videodetails={video} refetch={refetch} />)
    // end accepted videos 
      // start refused videos 
 var refusedVideos =data?.filter((video:any)=>video.Status === 2) 
 const renderedrefused =
( refusedVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
  :
  refusedVideos?.map((video:VideoData)=> <Refused  key={video.VideoId} videodetails={video} refetch={refetch}   />)
  // end refused videos
  return (
      <div className='page container'>
        <div className='page-hierarchy'>
             <span className='parent'>
              <Link href='/'>
                الرئيسية 
             </Link>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فديوهاتي</span>

         </div>
         <Link href='/AddVideo'>
         <button className="add-vid-button" onClick={()=>setUpload(true)}>
        اضافة فيديو
        </button>
        </Link>
         <div className='page-title'>فديوهاتي</div>
  
     
        
  
    
     <div className='section-title'>
     قيد  المراجعة
      </div> 
      <div className='videos-grid videos-page'>
       {renderedPending?.length === 0?<>ليس لديك اي فيد</> :renderedPending}
    
   


    </div>
    <div className='section-title'>
    الفيديوهات المقبولة
      </div> 
      <div className='videos-grid videos-page'>
      {isLoading? <Loader />  : renderedaccepted?.length === 0?<>ليس لديك اي فيد</> :renderedaccepted}
    
   

    </div>
    

      <div className='section-title'>
      الفيديوهات المرفوضة
      </div> 
      <div className='videos-grid videos-page'>
     {renderedrefused?.length === 0?<>ليس لديك اي فيد</> :renderedrefused}
   

    </div>
    <div >
    
      </div>
      {upload && <div className='overlay'>
        <Upload />
      </div>}
   
    </div>
  )
}

export default Myvideos