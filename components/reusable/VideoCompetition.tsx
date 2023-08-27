import React, { useState } from 'react'
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
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

  interface VideoCompetitionProps {
    playVideoo: React.Dispatch<React.SetStateAction<boolean>>;
    videodetails:VideoData
    
    }
    const VideoCompetition: React.FC<VideoCompetitionProps> = ({ playVideoo, videodetails }) => {

  
    
    const [vote, setVote] = useState<boolean>(false);

    function addVote() {
        setVote(true)
 
      }
    
      function removeVote(id:string) {
    setVote(false)
      }
    
      function playVideo(videosrc:string, describtion:string, votes:number) {
          console.log('play video')
          playVideoo(true)
      }
    console.log(videodetails)
  return (
    <div className="col-md-4">
    <video
      className="competetion-video"
      width="320"
      height="240"
      // controls="false"
      muted
      onClick={() => playVideo(videodetails?.Url, videodetails?.Title, 28 )}
    >
      <source src={videodetails?.Url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-describtion">{videodetails?.Title}  </div>
    <div className="actions">
              {vote ?
                    <button
                    
                    className="like-video remove-vote"
                    onClick={() => removeVote("2")}
                >
                    ❤️ <br /> إلغاء التصويت{" "}
                </button>
                  :
                  
                  <button
                  
                  className="like-video"
                  onClick={() => addVote()}
              >
                  ♡
                  <br /> اضغط للتصويت{" "}
              </button>
                  
                 }
      <button
        className="like-video"
        onClick={() => playVideo(videodetails?.Url, videodetails?.Title, 28 )}
      >
        {" "}
        ▶<br />
        مشاهدة
      </button>
    </div>
  </div>
  )
}

export default VideoCompetition