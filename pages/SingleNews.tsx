import React, { useEffect } from 'react'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import Image from 'next/image'
import { title } from 'process'
const SingleNews = () => {
  var Title ;
  var Description;
  var ImgUrl;
  console.log (Title)
  if (typeof window !== 'undefined') {
  const queryParams = new URLSearchParams(window.location.search);
   Title = window && queryParams.get('Title');
   Description = window && queryParams.get('Description');
   ImgUrl = window && queryParams.get('ImgUrl');
}
  return (
    <>
          <Navbar />
          <div className='single-news'>
          <Image alt='news'width={1000}height={1000} className='newsimage' src={ImgUrl?ImgUrl:''} />
          <div className='news-title'>{Title}</div>
          <p>{Description}</p>
              <Footer />
              </div>
    </>
  )
}

export default SingleNews