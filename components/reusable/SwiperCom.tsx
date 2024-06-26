import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const SwiperCom = () => {
    const [isClient, setIsClient]= useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a fallback or a loading state on the server-side
    return <div>Loading...</div>;
  }
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false} autoFocus={true}>
    <div>
       <img src="/images/slider1.png" />
       <p className="legend first-slide" >
          عندك موهبة ونفسك تشاركها مع الناس؟
          <br/>
          فرصتك جت يلا شاركنا مستنى ايه!

        <br/>
        <span className='center-butons'>
        <Link href='/AddVideo'> <button className='add-vid'>اضافة فيديو </button></Link>
        <Link href='/AllVideos'><button className='competition'>المسابقة</button></Link>
        </span> 
      </p>
      
    </div>
    <div>
        <img src="/images/slider2.png" />
        <p className="legend second-slide" >
        في ايديك دلوقتي تطلع للنور حمِل فيديوهات لموهبتك وشاركها مع الناس!
        <br/> 
        <span className='center-butons'>
        <Link href='/AddVideo'> <button className='add-vid'>اضافة فيديو </button></Link>
         <Link href='/AllVideos'><button className='competition'>المسابقة</button></Link>
        </span> 
      </p>
    </div>
    <div>
        <img src="/images/slider3.png" />
        <p className="legend  third-slide" >
        اطلب #37# دلوقتي أو زور اللينك للاشتراك في خدمة لو موهوب. مع اورنج هتقدر تشارك فيديوهاتك مع صحابك و أقاربك .
        <br/> 
        <span className='center-butons'>
       <Link href='/AddVideo'> <Link href='/AddVideo'> <button className='add-vid'>اضافة فيديو </button></Link></Link>
         <Link href='/AllVideos'><button className='competition'>المسابقة</button></Link>
        </span> 
      </p>
    </div>
</Carousel>
  )
}

export default SwiperCom