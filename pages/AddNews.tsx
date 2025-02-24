import axios from 'axios';
import React,{useState} from 'react'

const AddNews = () => {
//   https://vf.alerting.services/SherbiniApis/AddNews
const [reqdata,setReqData]=useState<any>({})
const {title,description,imgUrl} = reqdata
const AddNewsFunc =async (e:any)=>{
   e.preventDefault()
    try {
        const response = await axios.post(" https://vf.alerting.services/SherbiniApis/AddNews", reqdata,{ headers: {
          "Api_Key": "elinxfthr62023",
          'content-type': 'text/json'
        }});
      
        if (response.status === 200) {
       
          
       
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }
     
    
}
const onChange = (e: any) => {
 
      setReqData({ ...reqdata, [e.target.name]: e.target.value });
    
  };

    return (
    <div>
<form onSubmit={(e)=>AddNewsFunc(e)}>
    <input type="text" name="title" value={title} onChange={(e)=>onChange(e)}/>
    <input type="text" name="description" value={description} onChange={(e)=>onChange(e)}/>
 
    <input  type="text" name="imgUrl" value={imgUrl}  onChange={(e)=>onChange(e)}/>
    <button type="submit" >اضافة</button>

</form>
    </div>
  )
}

export default AddNews