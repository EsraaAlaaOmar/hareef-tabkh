import React,{useState} from 'react'
  interface VideoCompetitionProps {
        playVideoo: React.Dispatch<React.SetStateAction<boolean>>;
    
    }
    const VideoCompetition: React.FC<VideoCompetitionProps> = ({ playVideoo }) => {

  
    
    const [vote, setVote] = useState<boolean>(false);

    function addVote() {
        setVote(true)
    //     const vote_ = document.getElementById("vote-" + id)
    //    if(vote_){vote_.style.display = "none";}
    //    const removevote_ = document.getElementById("remove-vote-" + id);
    //    if(removevote_){removevote_.style.display = "inline-block";}
      }
    
      function removeVote(id:string) {
    //     const vote_ = document.getElementById("vote-" + id)
    //    if(vote_){vote_.style.display ="inline-block";}
    //    const removevote_ = document.getElementById("remove-vote-" + id);
    //    if(removevote_){removevote_.style.display = "none";}
    setVote(false)
    
      }
    
      function playVideo(videosrc:string, describtion:string, votes:number) {
    //     const playerbox= document.getElementById("player-box")
    //    if(playerbox){playerbox.style.display = "block";}
    
    //    const videoplayer = document.getElementById("videoplayer")as HTMLImageElement | any
    //    if(videoplayer){videoplayer.src=videosrc}
    
    //    const videoplayer_description =  document.getElementById("videoplayer-description")
    //    if(videoplayer_description){videoplayer_description.innerHTML = describtion;}
    //   const player_vote_number =  document.getElementById("player-vote-number")
    //   if(player_vote_number){player_vote_number.innerHTML =" عدد الاصوات" + " " + votes;}
    //   if(videoplayer){videoplayer.play()}
        
          console.log('play video')
          playVideoo(true)
      }
    
  return (
    <div className="col-md-4">
    <video
      className="competetion-video"
      width="320"
      height="240"
      // controls="false"
      muted
      onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
    >
      <source src="/videos/vid1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-describtion">قصيدة اول فرصة</div>
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
        onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
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