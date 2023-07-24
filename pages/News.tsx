import React from 'react'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import Singlenewsinallnews from '../components/Singlenewsinallnews'

const News = () => {
  return (
      <>
          <Navbar />
          <div className='news-page'>
              <Singlenewsinallnews img='/images/news1.jpg'  title='فيلم Mission: Impossible 7 يحقق 273 مليون دولار حول العالم' />
              <Singlenewsinallnews img='/images/news2.jpg' title='مستر إكس يحقق 467 ألف جنيه فى السينمات ليلة السبت.. اعرف التفاصيل' />
              <Singlenewsinallnews img='/images/news1.jpg'  title='فيلم Mission: Impossible 7 يحقق 273 مليون دولار حول العالم' />
              <Singlenewsinallnews img='/images/news2.jpg'  title='مستر إكس يحقق 467 ألف جنيه فى السينمات ليلة السبت.. اعرف التفاصيل' />
                
          </div>
          <Footer />
    </>
  )
}

export default News