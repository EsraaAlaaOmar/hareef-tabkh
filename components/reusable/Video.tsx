import React, { useState,useEffect, useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"
import Image from 'next/image';
import { IoIosPeople } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useOnClickOutside } from 'usehooks-ts'
import Head from 'next/head';
import Share from './Share';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
interface VideoData {

  DateIn: string;
  Deleted: Boolean;
  Description: string;

  UserId: number
  Title: string;
  VideoUrl: string;
  VideoId: number;
  PosterUrl:string;
   VotesCount: number;
  UsersVotes:[
    userId:any
  ];
}
interface videoProps{
  refetchVideos:Function,
  videodetails: VideoData,
  Msdn:String
}
// { videodetails }: { videodetails: VideoData } in()
const Video: React.FC<videoProps> =({ videodetails,refetchVideos,Msdn }) => {
  const [play, setPlay] = useState(false)
  const [like, setLike] = useState(false)
  const [share, setShare] = useState(false)
  const[phoneNumber, setPhoneNumber] = useState<any>()
  const ref = useRef(null)
  const ref2 = useRef(null)

  const router = useRouter();
  const handleClickOutside = () => {
    // Your custom logic here
    setPlay(false)
    
  }

  const handleClickOutsideShare = () => { 
setShare(false)
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)
  useOnClickOutside(ref2, handleClickOutsideShare)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).FB?.init({
        appId: 'YOUR_APP_ID',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
      });
    }
  
   setPhoneNumber(localStorage.getItem("MSISDN"));
    
  }, []);

  const handleShareClick = () => {
    setShare(true);
    // (window as any).FB?.ui({
    //   method: 'share',
    //   href: 'https://example.com', // URL you want to share
    // });
  };
  const getuserId = async () => {
    const response = await axios.post(
      
      `https://vf.alerting.services/SherbiniApis/Users/GetUserID?MobileNumber=${phoneNumber}`,
      {},
      {
    
      }
    );
    return response.data.UserID;
  };   

   const queryKey = phoneNumber ? ["userId", phoneNumber] : ["userId"];
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    queryKey,
    getuserId)
    
    var Liked = videodetails?.UsersVotes?.find((vote) => {
      return vote?.UserId === data && vote.Liked===true ? true : false;
    });
    
  const addVote = async (videoId: number) => {
 
    try {
      const response = await axios.post(
        `
       https://vf.alerting.services/SherbiniApis/Users/AddVote?VideoId=${videodetails.VideoId}&MobileNumber=${phoneNumber}&Vote=${!Liked}`,
        null, // Since there's no request body, pass null
        {
          headers: {
            'content-type': 'application/json' // Correct content type
          }
        }
      );
  
      // Update the state
     
  
      // Trigger a refetch of the videos
      await refetchVideos();
  
      // Return the response data
      return response.data;
    } catch (error) {
      console.error('Error adding vote:', error);
      // Return a default value or handle the error as needed 
      return null;
    }
  };    
  
   const  addVoteRedirect=(videoId: number)=>  !phoneNumber || phoneNumber=='NA' || phoneNumber=='undefined' ?  router.push(`http://elchef.info/signin`) :addVote(videoId);
   const date = new Date(videodetails.DateIn);

   // Define options for formatting the date
   const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: true, timeZone: 'UTC' };
   
   // Convert the date to a string in Arabic
   const formattedDate = date.toLocaleString('ar-EG', options);
   return (
    <>
       <Head>
      {/* Add Facebook SDK script here */}
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=YOUR_APP_ID"
      ></script>
    </Head>
   
      {/* <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
         {play && <div className='video-overlayer'>
           
           
           <video
           
            src={videodetails?.VideoUrl}
              controls
           autoPlay
           >
       
           <source  type="video/mp4" />
           Your bro
         </video>
         <span className='close-btn' onClick={()=>setPlay(false)}>×</span>
         <div className='details'>
        
        {videodetails?.Title}
       {Liked ?<div className='vote-btn'onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiFillHeart /></div> :<div className='vote-btn'onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiOutlineHeart/></div>}
          </div>
           </div>}
      <div className='video-box'>
      {share && <div className='share-box'  ref={ref2}><Share id={videodetails.VideoId} refetchVideos={refetchVideos} /></div>}
        <div className='rel'>
          <span className='play-icon' onClick={()=>setPlay(true)}><BsPlay /></span>
          <video
        className="competetion-video"
           
            src="/videos/vid.mp4"
            poster={videodetails?.PosterUrl?videodetails.PosterUrl:"/images/Placeholder.jpg"}
        // controls="false"
        muted
        >
    
        <source  type="video/mp4" />
        Your bro
      </video>
      </div>
      <div className='video-info'>
      {Liked ?<span onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiFillHeart /></span> :<span onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiOutlineHeart/></span>}{videodetails?.VotesCount}
        
      
        {/* <span><IoIosPeople /> </span>10k */}
      
      </div>
        <div className='userName'>{videodetails?.Title}</div>
        <div className='videoname'>{ videodetails?.Description}</div>
      {/* <div className='like-vid' onClick={()=>setLike(!like)} >{like? <AiFillHeart/>: <AiOutlineHeart /> }</div> */}
      <div className='share-vid' onClick={handleShareClick}><BiShare /></div>
      <div className='video-time'> <span><IoIosTimer /></span> { formattedDate}</div>
      <div className='vote' onClick={()=>addVoteRedirect(videodetails.VideoId)}>{Liked?<>الغاء التصويت</> :<>تصويت</>}</div>
    {/* <div>{Liked}</div> */}
      </div>
    </>
   
  )
}

export default Video