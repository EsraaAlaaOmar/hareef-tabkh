import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SwiperCom = () => {
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false} autoFocus={true}>
    <div>
       <img src="/images/slider1.png" />
       <p className="legend" >
        عندك موهبة ونفسك تشاركها مع الناس؟فرصتك جت يلا شاركنا مستنى ايه!

        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
      
    </div>
    <div>
        <img src="/images/slider1.png" />
        <p className="legend" >
        عندك موهبة ونفسك تشاركها مع الناس؟فرصتك جت يلا شاركنا مستنى ايه!

        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
    </div>
    <div>
        <img src="/images/slider1.png" />
        <p className="legend" >
        عندك موهبة ونفسك تشاركها مع الناس؟فرصتك جت يلا شاركنا مستنى ايه!

        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
    </div>
</Carousel>
  )
}

export default SwiperCom