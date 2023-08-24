import React,{useState} from 'react'
import Link from 'next/link'
const axios = require("axios");
const Upload = () => {
  const [formData, setFormData] = useState(
    {
      Title: '',
      Description: '',
      Msisdn: 'Msisdn',
      formFile: '',
      
    }
  )
  // important
  // const upload_msg = document.getElementById('upload-msg')
  // if(upload_msg){upload_msg.style.display='block'}


  const { Title, Description, Msisdn, formFile } = formData;
  const onChange = (e: any) => {
 
    if (e.target.name === 'formFile') {
      // Set the formFile property to the selected file
      
      setFormData({ ...formData, formFile: e.target.files[0] });
      console.log(e.target.files[0])
    } else {
      // For other input fields (e.g., Title, Description, Msisdn), update accordingly
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  
  const handleFileChange = async (event:any) => {
    
    console.log('submit')
    event.preventDefault(); 

  
      const reqdata = new FormData();
      reqdata.append("Title", formData.Title);
      reqdata.append("Description", formData.Description);
      reqdata.append("Msisdn", formData.Msisdn);
      reqdata.append("formFile", formData.formFile);
  
      // try {
      //   const response = await fetch("http://196.219.32.230:8088/LawMawhobApis/Talents/Addvideo", {
      //     method: "POST",
      //     body: formData,
      //   });
  
      //   if (response.ok) {
      //     // Handle successful upload
      //   } else {
      //     // Handle upload error
      //   }
      // } catch (error) {
      //   // Handle network error
      // }
     
  console.log(formData)
      try {
        const response = await axios.post("http://196.219.32.230:8088/LawMawhobApis/Talents/Addvideo", reqdata);
      
        if (response.status === 200) {
          // Handle successful upload
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }
     
    }
 
  
  function video(e:any) {
    
      var fileInput = document.getElementById('video_input') as any;
     var fileUrl = URL.createObjectURL(fileInput?.files[0]);
     const videoselector = document.querySelector("video")
     if(videoselector){videoselector.src = fileUrl}
      const uploaded_data = document.getElementById('uploaded-data')
      if(uploaded_data){uploaded_data.style.display='block'}
      const choose_to_upload =   document.getElementById('choose-to-upload')
      if(choose_to_upload){choose_to_upload.style.display='none'}

 onChange(e)
  
 
    }


    function buttonClick(){
   
      const video_input =   document.getElementById('video_input')
      if(video_input){video_input.click()}
    
    }

    function publish(){
      const upload_msg = document.getElementById('upload-msg')
      if(upload_msg){upload_msg.style.display='block'}
      
    }
  return (
     <div>
           <div className="upload-video">
  
      <Link href="/myvideos">
          <button className="link-button video-link">
      
              فديوهاتي         
       
          </button>
        </Link> 
      
              <input id='video_input' type="file" accept="video/*" onChange={(e)=>video(e)} name='formFile'  />
    <button id="choose-to-upload" className="video-upload-button" onClick={()=>buttonClick()}>اختر فديو لتشارك به</button> 
        <div id="uploaded-data">
            <form onSubmit={(e)=>handleFileChange(e)}>
        <div className="upload-video-input">
          <label className="upload-video-label" >عنوان الفديو </label>
              <input className="upload-video-textarea" style={{ height: "40px" }} placeholder="أدخل عنوان الفديو " name='Title' value={Title} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label">وصف الفديو </label>
          <textarea  className="upload-video-textarea" placeholder="أدخل وصف الفديو " name='Description' value={Description} onChange={e=>onChange(e)} ></textarea>
      </div>
    <video width="320" height="240" autoPlay controls>
      <source id='source' src="movie.mp4" type="video/mp4" />
  
       Your browser does not support the video tag.
    </video>
<div className="actions">
                      <button type='submit' className="video-action-upload-button" > نشر الفديو  </button> 
    <button className="video-action-upload-button video-upload-delete"> حذف الفديو</button>
    
            </div>
           
<div id="upload-msg">
  شكرا لك .. سيتم مراجعة الفديو قبل النشر 
 
            </div>
            </form>
</div>

   
   </div>
    </div>
  )
}

export default Upload