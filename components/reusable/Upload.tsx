import React from 'react'
import Link from 'next/link'
const Upload = () => {
    
function video  (){
      var fileInput = document.getElementById('video_input');
     var fileUrl = URL.createObjectURL(fileInput.files[0]);
       document.querySelector("video").src = fileUrl;
       document.getElementById('uploaded-data').style.display='block'
       document.getElementById('choose-to-upload').style.display='none'
    
    }


    function buttonClick(){
      console.log('click')
      document.getElementById('video_input').click()
    }

    function publish(){
      document.getElementById('upload-msg').style.display='block'
    }
  return (
     <div>
           <div className="upload-video">
  
      <Link href="/myvideos">
          <button className="link-button video-link">
      
              فديوهاتي         
       
          </button>
      </Link> 
              <input id='video_input' type="file" accept="video/*" onChange={()=>video()} />
    <button id="choose-to-upload" className="video-upload-button" onClick={()=>buttonClick()}>اختر فديو لتشارك به</button> 
    <div id="uploaded-data">
      <div className="upload-video-input">
          <label className="upload-video-label">وصف الفديو </label>
          <textarea  className="upload-video-textarea" placeholder="أدخل وصف الفديو "></textarea>
      </div>
    <video width="320" height="240" autoPlay controls>
      <source id='source' src="movie.mp4" type="video/mp4" />
  
       Your browser does not support the video tag.
    </video>
<div className="actions">
                      <button className="video-action-upload-button" onClick={()=>publish()}> نشر الفديو  </button> 
    <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
</div>
<div id="upload-msg">
  شكرا لك .. سيتم مراجعة الفديو قبل النشر 
 
 </div>
</div>

   
   </div>
    </div>
  )
}

export default Upload