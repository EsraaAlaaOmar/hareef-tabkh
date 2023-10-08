import React,{useState} from "react";
import Link from 'next/link'

import { useQuery } from 'react-query';
import axios from 'axios';
import { GridItem } from "@chakra-ui/react";
import Loader from "../components/reusable/Loader";
import Video from "../components/reusable/Video";
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import SelectComponent from "../components/reusable/SelectComponent";
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
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

const AllVideos = () => {

  const [playvideo, setPlayVideo] = useState<boolean>(false);
  const [vote, setVote] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState({
    videoId: 0,
    videosrc: '',
    describtion: '',
    votes: 0
    
  })
 
  
  const addVote = async (VideoId:number,MSISDN:string ) => {
    setVote(true)
   
    try {
      const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/AddVote?VideoId=${VideoId}&MSISDN=${MSISDN}`, {}, {
        headers: {
          "Api_Key": "elinxfthr62023",
          'content-type': 'text/json'
        }
      });
    
      if (response.status === 200) {
        return response
        // Handle successful upload
      } else {
        // Handle upload error
      }
    } catch (error) {
      // Handle network error or any other error
    }
  }

const removeVote = async (id:number) => {
  setVote(false)
  try {
    const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/DeleteVote?VoteId=${id}`, {}, {
      headers: {
        "Api_Key": "elinxfthr62023",
        'content-type': 'text/json'
      }
    });
  
    if (response.status === 200) {
      return response
      // Handle successful upload
    } else {
      // Handle upload error
    }
  } catch (error) {
    // Handle network error or any other error
  }
  }

  function playVideo(videosrc: string, describtion: string, votes: number, videoId:number) {
    setPlayVideo(true)
    setPlayerData({ videosrc:videosrc,describtion:describtion , votes:votes ,videoId:videoId})
  }


  //fetch data
  
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

// const renderedVideos = data?.map((video:VideoData) => {
//   return<span key={video.VideoId}>   <Video videodetails={video}/>     </span>
// })
  
  
  return (
    <>
    <Navbar />
      <div className="page container">
      

        <div className="upload-video">
        <div className='page-hierarchy'>
           <span className='parent'>
           الرئيسية 
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فيديوهات المواهب </span>

          </div>
          <SelectComponent />
         <div className='title'>فيديوهات المواهب </div>
         
        
      
          <div className="videos-grid videos-page">
            {/* {isLoading? <Loader /> : renderedVideos}   */}
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
           </div>
          <div></div>
        
        </div>

      
        
      </div>
      <Footer />
    </>
  );
};



export default AllVideos