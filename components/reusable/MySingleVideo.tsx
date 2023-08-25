import React from 'react'
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // Url: string;
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


interface MySingleVideoProps{
  videoDetails:VideoData |any
}

const MySingleVideo: React.FC<MySingleVideoProps> = ({ videoDetails }) =>{
console.log(videoDetails)
  return (
    <div className="col-md-4">
          <div className="upload-msg text-success">
          تم نشر هذا الفديو 
         
         </div>
       
         
        <video width="320" height="240" src={videoDetails?.Url} autoPlay controls>
          <source id='source' src={videoDetails?.Url} type="video/mp4" />
      {videoDetails?.Url}
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
        {videoDetails?.Title}
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>
  )
}

export default MySingleVideo