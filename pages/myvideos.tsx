import React, {useEffect,useState} from 'react'
import Navbar from '../components/reusable/Navbar'
import Myvideos from '../components/reusable/Myvideos'
import Footer from '../components/reusable/Footer';
const axios = require("axios");

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

const Myvideoos = () => {
   const[viewList, setViewList] = useState()

    return (
      <>
      
        <Navbar />
       <Myvideos />
       <Footer />
           
      </>
         
  
  )
}


export default Myvideoos