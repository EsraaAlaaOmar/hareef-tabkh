import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SwiperCom = () => {
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false} autoFocus={true}>
    <div>
       <img src="/images/slider1.png" />
       <p className="legend" >
          عندك موهبة ونفسك تشاركها مع الناس؟
          <br/>
          فرصتك جت يلا شاركنا مستنى ايه!

        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
      
    </div>
    <div>
        <img src="/images/slider2.png" />
        <p className="legend" >
        في ايديك دلوقتي تطلع للنور حمِل فيديوهات لموهبتك وشاركها مع الناس!
        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
    </div>
    <div>
        <img src="/images/slider3.png" />
        <p className="legend" >
        اطلب #37# دلوقتي أو زور اللينك للاشتراك في خدمة لو موهوب. مع اورنج هتقدر تشارك فيديوهاتك مع صحابك و أقاربك .
        <br/> 
        <button className='add-vid'>اضافة فيديو </button>
        <button className='competition'>المسابقة</button>
      </p>
    </div>
</Carousel>
  )
}

export default SwiperCom