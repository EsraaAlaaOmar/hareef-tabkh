import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"

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
      <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80)`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">قصيدة أول فرصة</Text>
    </>
   
  )
}

export default Video