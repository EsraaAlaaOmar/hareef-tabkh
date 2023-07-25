import React from 'react'
import Link from 'next/link'
const Myvideos = () => {
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
<Link href="/AllVideos">
<button className="link-button">
   
     المسابقة    
    
</button>
</Link>
   </div>
    </div>
  )
}

export default Myvideos