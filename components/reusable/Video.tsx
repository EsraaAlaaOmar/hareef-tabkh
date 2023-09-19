import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"
import Image from 'next/image';
import { IoIosPeople } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'
import { IoIosTimer } from 'react-icons/io'
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
        <div className='rel'>
          <span className='play-icon'><BsPlay /></span>
          <video
        className="competetion-video"
        width="320"
        height="240"
        // controls="false"
        muted
        >
    
        <source  type="video/mp4" />
        Your bro
      </video>
      </div>
      <div className='video-info'>
      <span><AiOutlineHeart /></span>100
        
        <span><BiShare /> </span>3k
        <span><IoIosPeople /> </span>10k
      
      </div>
      <div className='userName'>عنوان الفديو</div>
      <div className='videoname'>وصف الفديو</div>
      <div className='like-vid'><AiOutlineHeart /></div>
      <div className='share-vid'><BiShare /></div>
      <div className='video-time'> <span><IoIosTimer /></span> 2023-09-10 .. 15:53:48.3</div>
      <div className='vote'>تصويت</div>
      </div>
    </>
   
  )
}

export default Video