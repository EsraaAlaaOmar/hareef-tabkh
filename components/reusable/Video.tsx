import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Text } from "@chakra-ui/react"


const Video = ({vidImage='https://www.kabbos.com/dark/wp-content/uploads/2015/10/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%B5%D9%8A%D9%81%D9%8A-%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%87%D8%A8-%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA-%D9%85%D9%88%D8%A7%D9%87%D8%A8-Copy-2.jpg'}) => {
  return (
    <>
      <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${vidImage})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">قصيدة أول فرصة</Text>
    </>
   
  )
}

export default Video