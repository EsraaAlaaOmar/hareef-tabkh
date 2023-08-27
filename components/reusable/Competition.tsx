import React,{useState} from "react";
import Link from 'next/link'
import VideoCompetition from "./VideoCompetition";
import { useQuery } from 'react-query';
import axios from 'axios';
import { GridItem } from "@chakra-ui/react";

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

const Competition = () => {

  const [playvideo, setPlayVideo] = useState<boolean>(false);
  const [videoDetails,setVideoDetails] = useState<[{}]>([{}])
  const viewVideo=()=>{
    setPlayVideo(true)
  
   }
console.log(playvideo)
  
  function addVote(id:string) {
    const vote_ = document.getElementById("vote-" + id)
   if(vote_){vote_.style.display = "none";}
   const removevote_ = document.getElementById("remove-vote-" + id);
   if(removevote_){removevote_.style.display = "inline-block";}
  }

  function removeVote(id:string) {
    const vote_ = document.getElementById("vote-" + id)
   if(vote_){vote_.style.display ="inline-block";}
   const removevote_ = document.getElementById("remove-vote-" + id);
   if(removevote_){removevote_.style.display = "none";}

  }

  function playVideo(videosrc:string, describtion:string, votes:number) {
    const playerbox= document.getElementById("player-box")
   if(playerbox){playerbox.style.display = "block";}

   const videoplayer = document.getElementById("videoplayer")as HTMLImageElement | any
   if(videoplayer){videoplayer.src=videosrc}

   const videoplayer_description =  document.getElementById("videoplayer-description")
   if(videoplayer_description){videoplayer_description.innerHTML = describtion;}
  const player_vote_number =  document.getElementById("player-vote-number")
  if(player_vote_number){player_vote_number.innerHTML =" عدد الاصوات" + " " + votes;}
  if(videoplayer){videoplayer.play()}
    
 
  }

  function closePlayer() {
    const playerbox= document.getElementById("player-box")
    if(playerbox){playerbox.style.display = "none";}
    const videoplayer = document.getElementById("videoplayer")as HTMLImageElement | any
    if(videoplayer){videoplayer.puse()}
    
  }
  function addVoteFromPlayer() {
    const player_remove_vote =  document.getElementById("player-remove-vote")
    if(player_remove_vote){player_remove_vote.style.display = "block";}
  const player_vote = document.getElementById("player-vote");
  if(player_vote){player_vote.style.display = "none"}
   
  }
  function removeVoteFromPlayer() {
    const player_remove_vote =  document.getElementById("player-remove-vote")
    if(player_remove_vote){player_remove_vote.style.display = "none";}
  const player_vote = document.getElementById("player-vote");
  if(player_vote){player_vote.style.display = "block"}

  }
  //fetch data
  
  const fetchData = async () => {
  
    const response = await axios.get('http://196.219.32.230:8088/LawMawhobApis/Talents/GetAllVideos',{ headers: {
      "Api_Key": "elinxfthr62023",
      'content-type': 'text/json'
    }});
    return response.data;

  
};
const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos", fetchData)



// useEffect(() => {
//   // fetchData();

//   console.log(data)
//   console.log('esraa')
// }, []);

const renderedVideos = data?.map((video:VideoData) => {
  return<span key={video.VideoId}>   <VideoCompetition playVideoo={setPlayVideo} videodetails={video} />     </span>
})
  return (
    <>
      <div>
      

        <div className="upload-video">
          <p className="upload-qoute">
            عندك موهبة ونفسك تشاركها مع الناس؟
                  <br />
                !فرصتك جت! يلا شاركنا بموهبتك  
          </p>
          <div className='categories'>
              <span className='category active first'>الاحدث </span>
              <span className='category'>الاكثر تصويتا </span>
              <span className='category last'>الاكثر مشاهدة </span>
      </div>
          {/* <div className="row">
            <div className="col-md-4">
              <video
                className="competetion-video"
                width="320"
                height="240"
                // controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote("1")}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote("1")}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
                >
                  {" "}
                  ▶ <br />
                  مشاهدة
                </button>
              </div>
            </div>
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
                <button
                  id="vote-2"
                  className="like-video"
                  onClick={() => addVote("2")}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-2"
                  className="like-video remove-vote"
                  onClick={() => removeVote("2")}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
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
            <div className="col-md-4">
              <video
                className="competetion-video"
                width="320"
                height="240"
                // controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote("1")}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote("1")}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
                >
                  {" "}
                  ▶ <br />
                  مشاهدة
                </button>
              </div>
            </div>

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
                <button
                  id="vote-2"
                  className="like-video"
                  onClick={() => addVote("2")}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-2"
                  className="like-video remove-vote"
                  onClick={() => removeVote("2")}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
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
            <div className="col-md-4">
              <video
                className="competetion-video"
                width="320"
                height="240"
                // controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote("1")}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote("1")}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", 28 )}
                >
                  {" "}
                  ▶ <br />
                  مشاهدة
                </button>
              </div>
            </div>
          </div> */}
          <div>
               {renderedVideos}  
           </div>
          <div></div>
          <Link href="/myvideos">
          <button className="link-button">
           
              فديوهاتي
          
          </button>
          </Link>
        </div>

        {playvideo && <div id="player-box" className="videoplayer">
          <div className="video-player-close" onClick={() => setPlayVideo(false)}>
            ⓧ
          </div>
          <video id="videoplayer" width="100%" height="240" controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="videoplayer-description">
            <span id="videoplayer-description"> ما تيسر من سورة البقرة </span>

            <button
              id="player-vote"
              className="vote-onplayer"
              onClick={() => addVoteFromPlayer()}
            >
              تصويت♡
            </button>
            <button
              id="player-remove-vote"
              className="vote-onplayer player-remove-vote"
              onClick={() => removeVoteFromPlayer()}
            >
              الغاء التصويت ❤️
            </button>

            <div id="player-vote-number" className="vote-number">
              عدد الاصوات 5
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Competition;
