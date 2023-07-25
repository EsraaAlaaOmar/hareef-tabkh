import React from "react";
import Link from 'next/link'
const Competition = () => {
  function addVote(id) {
    document.getElementById("vote-" + id).style.display = "none";
    document.getElementById("remove-vote-" + id).style.display = "inline-block";
  }

  function removeVote(id) {
    document.getElementById("vote-" + id).style.display = "inline-block";
    document.getElementById("remove-vote-" + id).style.display = "none";
  }

  function playVideo(videosrc, describtion, votes) {
    document.getElementById("player-box").style.display = "block";
    document.getElementById("videoplayer").src  = videosrc;
    document.getElementById("videoplayer-description").innerHTML = describtion;
    document.getElementById("player-vote-number").innerHTML =
      " عدد الاصوات" + " " + votes;
    document.getElementById("videoplayer").play();
    console.log(videosrc, describtion, votes)
  }

  function closePlayer() {
    document.getElementById("player-box").style.display = "none";
    document.getElementById("videoplayer").pause();
  }
  function addVoteFromPlayer() {
    document.getElementById("player-remove-vote").style.display = "block";
    document.getElementById("player-vote").style.display = "none";
  }
  function removeVoteFromPlayer() {
    document.getElementById("player-remove-vote").style.display = "none";
    document.getElementById("player-vote").style.display = "block";
  }
  return (
    <>
      <div>
        <div>
          <h3 className="competition-name"> مسابقة  لو موهوب</h3>
        </div>

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
          <div className="row">
            <div className="col-md-4">
              <video
                className="competetion-video"
                width="320"
                height="240"
                controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote(1)}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote(1)}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
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
                controls="false"
                muted
                onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
              >
                <source src="/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion">اية الكرسي</div>
              <div className="actions">
                <button
                  id="vote-2"
                  className="like-video"
                  onClick={() => addVote(2)}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-2"
                  className="like-video remove-vote"
                  onClick={() => removeVote(2)}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
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
                controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote(1)}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote(1)}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
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
                controls="false"
                muted
                onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
              >
                <source src="/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion">اية الكرسي</div>
              <div className="actions">
                <button
                  id="vote-2"
                  className="like-video"
                  onClick={() => addVote(2)}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-2"
                  className="like-video remove-vote"
                  onClick={() => removeVote(2)}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() => playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
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
                controls="false"
                muted
                onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
              >
                <source src="videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-describtion"> قصيدة اول فرصة</div>
              <div className="actions">
                <button
                  id="vote-1"
                  className="like-video"
                  onClick={() => addVote(1)}
                >
                 ♡
                  <br /> اضغط للتصويت{" "}
                </button>
                <button
                  id="remove-vote-1"
                  className="like-video remove-vote"
                  onClick={() => removeVote(1)}
                >
                  ❤️ <br /> إلغاء التصويت{" "}
                </button>
                <button
                  className="like-video"
                  onClick={() =>  playVideo("videos/vid1.mp4", "قصيدة اول فرصة", "28 ")}
                >
                  {" "}
                  ▶ <br />
                  مشاهدة
                </button>
              </div>
            </div>
          </div>
          <div></div>
          <Link href="/myvideos">
          <button className="link-button">
           
              فديوهاتي
          
          </button>
          </Link>
        </div>

        <div id="player-box" className="videoplayer">
          <div className="video-player-close" onClick={() => closePlayer()}>
            ⓧ
          </div>
          <video id="videoplayer" width="100%" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
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
        </div>
      </div>
    </>
  );
};

export default Competition;
