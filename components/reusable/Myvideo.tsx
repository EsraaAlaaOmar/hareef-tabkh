import React , {useState,useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"
import Image from 'next/image';
import { IoIosPeople, IoIosTimer } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare , BiBasket} from 'react-icons/bi'
import Share from './Share';
import { FiEdit } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'
import axios from 'axios';
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
  VotesCount: number;
  PosterUrl:string;
  Votes:[]
}

interface myvideoProps {
  refetch:Function,
  videodetails: VideoData,



}
  
const Myvideo: React.FC<myvideoProps> =({refetch, videodetails}) => {
  const [showList, setShowList] = useState(false)
    const [share, setShare] = useState(false)
  const [play, setPlay] = useState(false)

  
  const ref2 = useRef(null)

  const handleClickOutside2 = () => {
    // Your custom logic here
    setPlay(false)
    
  }


  useOnClickOutside(ref2, handleClickOutside2)

const ref = useRef(null)

const handleClickOutside = () => {
  // Your custom logic here
  setShowList(false)

}

const handleClickInside = () => {
  // Your custom logic here
  console.log('clicked inside')
}


  useOnClickOutside(ref, handleClickOutside)
  const date = new Date(videodetails.DateIn);

  // Define options for formatting the date
  const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: true, timeZone: 'UTC' };
  
  // Convert the date to a string in Arabic
  const formattedDate = date.toLocaleString('ar-EG', options);


  const handleShareClick = () => {
    setShare(true);
    // (window as any).FB?.ui({
    //   method: 'share',
    //   href: 'https://example.com', // URL you want to share
    // });
  };
    const handleClickOutsideShare = () => { 
setShare(false)
  }
   useOnClickOutside(ref2, handleClickOutsideShare)
    const DeleteVideo = async (VideoId:number) => {

        await axios.post(
          `https://vf.alerting.services/SherbiniApis/Users/DeleteVideo?VideoId=${VideoId}
          `,
          {},
          {
        
          }
        );
        refetch()
      };

  return (
    <>
      {/* <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
      {play && <div className='video-overlayer'>
           
           
           <video
           
            src={videodetails?.Url}
              controls
           autoPlay
           >
       
           <source  type="video/mp4" />
           Your bro
         </video>
         <span className='close-btn' onClick={()=>setPlay(false)}>×</span>
         <div className='details'>
        
        {videodetails?.Title}
   
          </div>
           </div>}
      <div className='video-box myvedio-box'>
        <div className='rel'>
           {share && <div className='share-box'  ref={ref2}><Share id={videodetails.VideoId} refetchVideos={refetch} /></div>}
          <span className='play-icon' onClick={()=>setPlay(true)}><BsPlay /></span>
          <video
        className="competetion-video"
        width="320"
            height="240"
            poster={videodetails?.PosterUrl}
        // controls="false"
        muted
        >
    
        <source src='' type="video/mp4" />
        Your bro
      </video>
      </div>
      <div className='video-info'>
      <span><AiOutlineHeart /></span>{videodetails.VotesCount}
        
        {/* <span><BiShare /> </span>3k */}
        {/* <span><IoIosPeople /> </span>10k */}
      
      </div>
      <div className='userName'>{videodetails.Title}</div>
      <div className='videoname'>{videodetails.Description}</div>
      <div className='like-vid'><AiOutlineHeart /></div>
  
        <div className='share-vid' onClick={() => setShowList(true)}><FiMoreVertical /></div>
        <div className='video-time'> <span><IoIosTimer /></span> {formattedDate}</div>
       {showList && <div className='list'  ref={ref}  onClick={handleClickInside}>
          <div onClick={handleShareClick}><span><BiShare /></span>مشاركة </div>
          {/* <div><span><FiEdit /> </span>تعديل </div> */}
        <div><span><BiBasket onClick={()=>DeleteVideo(videodetails.VideoId)} /></span>مسح</div>
        </div>}
     
      </div>
    </>
   
  )
}


export default Myvideo