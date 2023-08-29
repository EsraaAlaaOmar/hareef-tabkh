import React from 'react'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import { Grid, GridItem ,Box} from '@chakra-ui/react'
import Video from '../components/reusable/Video'
const AllVideos = () => {
  return (
      <>
      <Navbar />
      <div className='all-videos'>
          <div className='categories'>
              <span className='category active first'>الاحدث </span>
              <span className='category'>الاكثر تصويتا </span>
              <span className='category last'>الاكثر مشاهدة </span>
      </div>
{/*       
      <Grid templateColumns='repeat(2, 1fr)' gap={6} >

<GridItem p="5px">  <Video /></GridItem>
<GridItem  p="5px">  <Video /></GridItem>
<GridItem p="5px">  <Video /></GridItem>
<GridItem  p="5px">  <Video /></GridItem>
        </Grid> */}
        </div>
          <Footer />
          
    </>
  )
}

export default AllVideos