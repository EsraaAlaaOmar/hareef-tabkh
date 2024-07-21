import React,{useState,useRef, useEffect,ReactNode} from 'react'
import Link from 'next/link'
import { useMutation  } from 'react-query';
import Loader from './Loader';
import { useRouter } from 'next/router';
import { useOnClickOutside } from 'usehooks-ts'
const axios = require("axios");

interface UploadProps {
  // playVideoo: React.Dispatch<React.SetStateAction<boolean>>;
 

  }
  const Upload: React.FC<UploadProps> = ({ }) => {




  const router = useRouter();
  const[phoneNumber, setPhoneNumber] = useState<any>()
  useEffect(() => {
    (typeof window !== 'undefined') && setPhoneNumber(localStorage.getItem('Msisdn'));
    setFormData({ ...formData,Msisdn :phoneNumber})
  },[phoneNumber])
  const [formData, setFormData] = useState(
    {
      Title: '',
      Description: '',
      Msisdn: phoneNumber,
      formFile: null,
      posterFile:null
      
    }
  )
  const [showvideo, setShowVideo] = useState(false)
  // important
  // const upload_msg = document.getElementById('upload-msg')
  // if(upload_msg){upload_msg.style.display='block'}


  const { Title, Description, Msisdn, formFile } = formData;
  const onChange = (e: any) => {
 
    if (e.target.name === 'formFile'&&e.target.files&& e.target.files.length > 0) {
      // Set the formFile property to the selected file
      
    
       const file = e.target.files[0];
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.onloadedmetadata = () => {
    window.URL.revokeObjectURL(video.src);
    if (video.duration > 60) {
      // Alert the user that the video duration exceeds the limit
      alert('عفوا .. لا يجب ان تتجاوز مدة الفيديو 1دقيقة (60 ثانية)');
      setFormData({ ...formData, formFile:null});
      setShowVideo(false);
      e.target.value = '';
    } else {
      // Proceed with uploading the video
      setFormData({ ...formData, formFile: e.target.files[0] });
    }
  };
  video.src = URL.createObjectURL(file);


    } 
    else if ( e.target.name === 'posterFile'&&e.target.files&&e.target.files.length > 0) {
      // Set the formFile property to the selected file
      
      setFormData({ ...formData, posterFile: e.target.files[0] });
      
    } 
    else {
      // For other input fields (e.g., Title, Description, MobileNumber), update accordingly
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  
      
  const reqdata = new FormData();
  reqdata.append("Title", formData.Title);
  reqdata.append("Description", formData.Description);
  reqdata.append("Msisdn", formData.Msisdn);
 
  if (formData.formFile !== null) {
    reqdata.append("formFile", formData.formFile);
  }
  
  // Check if posterFile is not null before appending
  if (formData.posterFile !== null) {
    reqdata.append("posterFile", formData.posterFile);
  }

    const addVideoMutation =   useMutation(
     () =>
       

        axios.post('https://vodafone.alerting.services/LawMawhobApis/Talents/Addvideo', reqdata, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }),
    {
      onSuccess: () => {

        router.push(`/myvideos?title=${formData?.Title}`);
      },
      onError: (error) => {
        
        console.error('Error adding video:', error);
        // Handle error
      },
    }
  );
  const addVideo = async (event:any) => {
    event.preventDefault(); 
    event.preventDefault(); 

    addVideoMutation.mutate()
     
    }
 
 


    function video(e:any) {
      onChange(e)
      setShowVideo(true)
   
    
    }

    var srcComp=(): ReactNode=>{  if (formData.formFile) { 
      var fileUrl = URL.createObjectURL(formData.formFile);
     
      // Render the <source> element with the created object URL
      return (
        <source id='source' src={fileUrl} type="video/mp4" />
      )}
    else{
      return<></>
    }
    }

    function buttonClick(){
   
      const video_input =   document.getElementById('video_input')
      video_input&&video_input.click()
    
    }

    function publish(){
      const upload_msg = document.getElementById('upload-msg')
      if(upload_msg){upload_msg.style.display='block'}
      
  }
  
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')

  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)
  return (
     <div style={{position:"relative"}}>
      {addVideoMutation.isLoading && <div className='overlayer-loader '><Loader /></div> }
           <div className="white-background">
           <div className='page-title'>اضافة فيديو </div>
        <form onSubmit={(e) => addVideo(e)}>
        <div className='left-section'>
       { showvideo && <video width="320" height="240" style={{margin:'auto',maxHeight:'330px'}} autoPlay controls>
              {srcComp()}
          
              Your browser does not support the video tag.
            </video>}
          <input id='video_input' type="file" accept="video/*" onChange={(e)=>video(e)} name='formFile'  />
          {!showvideo&&  <button id="choose-to-upload" className="video-upload-button" onClick={() => buttonClick()}>اضافة فيديو + </button> }
       { showvideo&&    <div className="actions">
         <button type='submit' className="video-action-upload-button" > نشر الفديو  </button> 
         <button  className="video-action-upload-button video-upload-delete"onClick={()=>{setShowVideo(false); setFormData({ ...formData, formFile:null}); }}> حذف الفديو</button>
    
            </div>}
          </div>
        <div className='right-section'>
            
               <div className="upload-video-input">
          <label className="upload-video-label" >عنوان الفديو </label>
              <input className="upload-video-textarea" style={{ height: "70px" }} placeholder="أدخل عنوان الفديو " name='Title' value={Title} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label">اسم المشترك باللغة العربية (ثلاثي) </label>
          <input  className="upload-video-textarea" style={{ height: "70px" }} placeholder="أدخل اسم المشترك " name='Description' value={Description} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label" style={{fontSize:"14px"}}>غلاف الفيديو(اختياري) </label>
          <input type='file'  className="" placeholder="أدخل غلاف الفيديو " name='posterFile'  onChange={e=>onChange(e)} style={{fontSize:"14px"}} />
      </div>
           

        </div>
   
       
        </form>
      </div>
      
    </div>
  )
}

export default Upload