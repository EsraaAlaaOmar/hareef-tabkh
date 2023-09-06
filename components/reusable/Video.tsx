import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"
import Image from 'next/image';
import { IoIosPeople } from 'react-icons/io'
import { TbShare3 } from 'react-icons/tb'
import{AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
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

const Video = ({ videodetails }: { videodetails: VideoData }) => {
  return (
    <>
      {/* <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
      <div className='video-box'>
      <video
      className="competetion-video"
      width="320"
      height="240"
      // controls="false"
      muted
     >
    
      <source src={videodetails?.Url} type="video/mp4" />
      Your bro
        </video>
        <div className='video-info'>
        <span><AiOutlineHeart /></span>100
          
          <span><TbShare3 /> </span>3k
          <span><IoIosPeople /> </span>10k
        
        </div>
        <div className='userName'>فاطمة احمد علي </div>
      
        <div className='videoname'>{ videodetails.Title}</div>
        <div className='like-vid'><AiFillHeart /></div>
        <div className='share-vid'><TbShare3 /></div>
      </div>
    </>
   
  )
}

export default Video