import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  return (
    <div className="landing-news-container">
    <Link href='/' className="section-page">
            عرض الكل 
   </Link>
  <Link href='/' className="section-title">
       أخر الأخبار
  </Link>
  <SingleNews />
  <SingleNews />
  
    </div>
  );
};

export default NewestNews;
