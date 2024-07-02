import React,{useEffect, useState} from "react";
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
import { Pagination } from 'react-bootstrap';
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
  // Add other properties as needed
  DateIn: string;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  NVotes: number;
  NShares: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  Votes:[]
}

const AllVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [playvideo, setPlayVideo] = useState<boolean>(false);
  const [vote, setVote] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState({
    videoId: 0,
    videosrc: '',
    describtion: '',
    votes: 0
    
  })
 
  const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);


  const scrolToTop=()=>{
    // Assuming you have a reference to the pagination element
const paginationElement = document.getElementById('pagination');

// Scroll to the pagination element
paginationElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });

}


  function playVideo(videosrc: string, describtion: string, votes: number, videoId:number) {
    setPlayVideo(true)
    setPlayerData({ videosrc:videosrc,describtion:describtion , votes:votes ,videoId:videoId})
  }


  //fetch data
  
  const fetchData = async () => {
  
    const response = await axios.get(`https://vodafone.alerting.services/LawMawhobApis/Talents/GetAllVideos?Page=${currentPage}&PageSize=${itemsPerPage}`,{ headers: {
      "Api_Key": "elinxfthr62023",
      'content-type': 'text/json'
    }});
    return response.data;

  
};
const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  ["videos", currentPage],
  () => fetchData(),
  {
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 0,
  }
);


// useEffect(() => {
//   // fetchData();

//   console.log(data)
//   console.log('esraa')
// }, []);

const renderedVideos = data?.map((video:VideoData) => {
  return   <Video  key={video.VideoId} videodetails={video} refetchVideos={refetch} Msdn={Msdn}/>   
})
  
  
  return (
    <>
    <Navbar />
      <div className="page container">
      

        <div className="upload-video">
        <div className='page-hierarchy'>
            <span className='parent'>
              <Link href='/'>
                الرئيسية 
             </Link>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فيديوهات المواهب </span>

          </div>
          {/* <SelectComponent /> */}
         <div className='title'>فيديوهات المواهب </div>
         
        
      
          <div className="videos-grid videos-page">
            {isLoading? <Loader /> : data?.length>0 ?<>  {renderedVideos}
              <br/>
          
       </>:<div className="no-videos"> لا يوجد فيديوهات</div>}
       
       
           </div>
          <div></div>
          <div className="pagination-butons">
            <Pagination>
        <li className="page-item" onClick={()=>{currentPage>1&&setCurrentPage(currentPage-1);scrolToTop()}}><a className="page-link"   style={{color: '#000'}} >السابق</a></li>
        <li className="page-item"><a className="page-link" style={{color: '#000'}} >{currentPage}</a></li>
        <li className="page-item"  onClick={()=> {  data.length==itemsPerPage &&setCurrentPage(currentPage+1);scrolToTop()}}><a className="page-link" style={{color: '#000'}} >التالي</a></li>
       </Pagination>
       </div>
        </div>

      
        
      </div>
      <Footer />
    </>
  );
};



export default AllVideos