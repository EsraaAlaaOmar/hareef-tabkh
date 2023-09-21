import React,{useState} from "react";
import Link from 'next/link'

import { useQuery } from 'react-query';
import axios from 'axios';
import { GridItem } from "@chakra-ui/react";
import Loader from "./Loader";
import Video from "./Video";
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import SelectComponent from "./SelectComponent";
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

const Competition = () => {

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
      <div className="page">
      

        <div className="upload-video">
        <div className='page-hierarchy'>
           <span className='parent'>
           الرئيسية 
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فيديوهات المواهب </span>

         </div>
         <div className='title'>فيديوهات المواهب </div>
           <SelectComponent />
        
      
          <div className="videos-grid videos-page">
               {/* {isLoading? <Loader /> : renderedVideos}   */}
               <Video/>
               <Video/>
               <Video/>
               <Video/>
               <Video/>
               <Video/>
           </div>
          <div></div>
        
        </div>

        {playvideo && <div id="player-box" className="videoplayer">
          <div className="video-player-close" onClick={() => setPlayVideo(false)}>
            ⓧ
          </div>
          <video id="videoplayer" width="100%" height="240" controls>
            <source src={playerData?.videosrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="videoplayer-description">
            <span id="videoplayer-description"> {playerData?.describtion}</span>

           {!vote? <button
              id="player-vote"
              className="vote-onplayer"
              onClick={() => addVote(playerData?.videoId, 'MSISDN')}
            >
              تصويت♡
            </button>
              :
            <button
              id="player-remove-vote"
              className="vote-onplayer player-remove-vote"
              onClick={() => removeVote(15) }
            >
              الغاء التصويت ❤️
            </button>}

            <div id="player-vote-number" className="vote-number">
              عدد الاصوات {playerData?.votes}
            </div>
          </div>
        </div>}
        
      </div>
    </>
  );
};

export default Competition;
