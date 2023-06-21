import React from 'react'

const Myvideos = () => {
  return (
      <div>
          <div className="upload-video">
    <p className="upload-hadith">قال رسول الله صلي اله عليه وسلم : ( يقال لقارئ القرآن : اقرأ ورتل وارتق كما كنت ترتل في الدنيا فإن منزلتك عند آخر آية كنت تقرؤها ) </p>
        <button className="link-button">
            <a href="upload.html" className="video-link">
             إضافة فديو    
            </a>
        </button>
    
        
        <div className="row">
      <div className="col-md-4">
        <div className="upload-msg text-warning">
          هذا الفديو قيد المراجعة
         
         </div>
       
         
        <video width="320" height="240" autoplay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          ما تيسر من سورة البقرة
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>
      <div className="col-md-4">
        <div className="upload-msg text-success">
          تم نشر هذا الفديو 
         
         </div>
       
         
        <video width="320" height="240" autoplay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          ما تيسر من سورة البقرة
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    </div>
      </div>

      <div className="col-md-4">
        <div className="upload-msg text-danger">
          تم رفض  هذا الفديو 
         
         </div>
       
         
        <video width="320" height="240" autoplay controls>
          <source id='source' src="movie.mp4" type="video/mp4" />
      
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
          ما تيسر من سورة البقرة
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

<button className="link-button">
    <a href="competition.html" className="video-link">
     المسابقة    
    </a>
</button>
   </div>
    </div>
  )
}

export default Myvideos