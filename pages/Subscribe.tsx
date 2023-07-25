import React from 'react'
import Image from 'next/image'
const Subscribe = () => {
  return (
      <div className='subscribe'>
          <Image alt='logo' className='logo' src='/images/logo.png' />    
          <Image alt='subscribe' className='subscribe-image' src='/images/subscribe.png' />
          <div className='text'>
              <div className='title'>لو موهوب</div>
              <br/>
              <div>
                  عندك موهبة ونفسك تشاركها مع الناس؟
                  <br />
                  فرصتك جت! اشترك في لو موهوب وشاركنا موهبتك!
              </div>
              
          </div>
          <button>إشترك الآن</button>
          
      </div>
  )
}

export default Subscribe