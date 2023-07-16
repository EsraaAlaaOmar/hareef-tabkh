import React from 'react'
import Video from '../reusable/Video'
import { Grid, GridItem ,Box} from '@chakra-ui/react'
import Link from 'next/link'

const VidiohatMoreViews = () => {
  return (
    <>
<Box padding=" 10px 0 ">
<Link href='/' className="section-title">
فيديوهات المواهب ( الأكثر مشاهدة )
    </Link>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} >

        <GridItem p="5px">  <Video /></GridItem>
        <GridItem  p="5px">  <Video /></GridItem>
        <GridItem p="5px">  <Video /></GridItem>
        <GridItem  p="5px">  <Video /></GridItem>
    </Grid>
    <Link href='/upload' >
          <div className="upload">تحميل</div>
        </Link>
</Box>

        
    </>
  )
}

export default VidiohatMoreViews