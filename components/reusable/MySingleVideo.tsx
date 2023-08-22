import React from 'react'

const MySingleVideo = () => {
  return (
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
  )
}

export default MySingleVideo