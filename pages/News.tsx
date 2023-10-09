import React from 'react'
import Link from 'next/link'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import Singlenewsinallnews from '../components/Singlenewsinallnews'
import SingleNews from '../components/reusable/singleNews'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
const News = () => {
  return (
    <>
        <Navbar />
      <div className='page container'>
    
      <div className='page-hierarchy'>
             <span className='parent'>
              <Link href='/'>
                الرئيسية 
             </Link>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>أخبار الفنانين</span>

      </div>
      <div className='page-title'>أخبار الفنانين</div>
          <div className='landing-news-container '>
        <SingleNews />
        <SingleNews />
        <SingleNews />   
        <SingleNews />
        <SingleNews />
                
          </div>
        
      </div>
      <Footer />
      </>
  )
}

export default News