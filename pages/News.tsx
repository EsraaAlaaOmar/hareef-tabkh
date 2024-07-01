import React from 'react'
import Link from 'next/link'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import Singlenewsinallnews from '../components/Singlenewsinallnews'
import SingleNews from '../components/reusable/singleNews'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import { useQuery } from 'react-query'
import axios from 'axios'
const News = () => {
  const fetchData = async () => {
  
    const response = await axios.get(`https://vodafone.alerting.services/LawMawhobApis/Talents/GetLastNews`,{ headers: {
      "Api_Key": "elinxfthr62023",
      'content-type': 'text/json'
    }});
    return response.data;

  
};
const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  ["news"],
  () => fetchData(),
  {
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 0,
  }
);
console.log(data);
const renderedNews =data?.map((news:any) =>{
  return <Singlenewsinallnews key={news.NewsId} news={news}  />
})
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
       {renderedNews}
          </div>
        
      </div>
      <Footer />
      </>
  )
}

export default News