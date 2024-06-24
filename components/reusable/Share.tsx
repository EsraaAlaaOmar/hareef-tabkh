import axios from 'axios';
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

interface ShareProps {
  id: number;
  refetchVideos:Function
}
const Share: React.FC<ShareProps> =  ({id,refetchVideos}) => {
    const shareUrl = `https://lwmohoob-front-git-toka-bakend-esraaalaaomars-projects.vercel.app/SingleVideo?ID=${id}`;
    const title = 'Check out this website!';
   
    const addshare= async ()=>{
      
 
        try {
          const response = await axios.post(
            `https://vodafone.alerting.services/LawMawhobApis/Talents/AddVideoShare?VideoId=${id}`,
            null, // Since there's no request body, pass null
            {
              headers: {
                'content-type': 'application/json' // Correct content type
              }
            }
          );
      
          // Update the state
         
      
          // Trigger a refetch of the videos
          await refetchVideos();
      
          // Return the response data
          return response.data;
        } catch (error) {
          console.error('Error adding vote:', error);
          // Return a default value or handle the error as needed
          return null;
        }
      };  
    
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <FacebookShareButton url={shareUrl} title={title} onClick={()=>addshare()}>
          <FacebookIcon size={32} round  />
        </FacebookShareButton>
  
        <TwitterShareButton url={shareUrl} title={title} onClick={()=>addshare()}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
  
        <LinkedinShareButton url={shareUrl} title={title} onClick={()=>addshare()}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
  
        <WhatsappShareButton url={shareUrl} title={title} separator=":: " onClick={()=>addshare()}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    );
  };

export default Share