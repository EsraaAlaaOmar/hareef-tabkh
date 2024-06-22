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
const Share = (id:number) => {
    const shareUrl = `https://lwmohoob-p1me.vercel.app/SingleVideo?ID=${id}`;
    const title = 'Check out this website!';
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <FacebookShareButton url={shareUrl} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
  
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
  
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
  
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    );
  };

export default Share