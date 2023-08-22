import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import MySingleVideo from './MySingleVideo';
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
const Myvideos = () => {
  const [data, setData] = useState<VideoData[] | null>(null);

  const fetchData = async () => {
    

  
    try {
        const Msisdn ="Msisdn"
        const response = await axios.post(`http://196.219.32.230:8088/LawMawhobApis/Talents/GetMyVdeos?Msisdn=${Msisdn}`);
      
        if (response.status === 200) {
          // Handle successful upload
          console.log(response)
          setData(response)
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }

  };
  
  useEffect(() => {
    fetchData();

    
  }, []);
  return (
      <div>
          <div className="upload-video">
    <p className="upload-qoute">
                 عندك موهبة ونفسك تشاركها مع الناس؟
                  <br />
                !فرصتك جت! يلا شاركنا بموهبتك  
     </p>
     <Link href="/upload">
        <button className="link-button">
             إضافة فديو    
        </button>
     </Link>
    
        
        <div className="row">
          <MySingleVideo />
      <div className="col-md-4">
        <div className="upload-msg text-warning">
          هذا الفديو قيد المراجعة
         
         </div>
       
         
        <video width="320" height="240" autoPlay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          قصيدة أول فرصة
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>
      <div className="col-md-4">
        <div className="upload-msg text-success">
          تم نشر هذا الفديو 
         
         </div>
       
         
        <video width="320" height="240" autoPlay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          قصيدة أول فرصة
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>

      <div className="col-md-4">
        <div className="upload-msg text-danger">
          تم رفض  هذا الفديو 
         
         </div>
       
         
        <video width="320" height="240" autoPlay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          قصيدة أول فرصة
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>

    </div>
       <div>
  
  </div>
    <div >
    
</div>
<Link href="/compeition">
<button className="link-button">
   
     المسابقة    
    
</button>
</Link>
   </div>
    </div>
  )
}

export default Myvideos