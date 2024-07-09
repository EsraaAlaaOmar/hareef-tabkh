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
  
    const response = await axios.get(`https://vf.alerting.services/HarefKoraApis/Talents/GetLastNews`,{ headers: {
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
const News =[{Title: "من ضابط لـداعشي.. دياب: شخصيتي في السربممتعة والأكشن كان الأصعب في مليحة",Description:"الفنان المصري قال للعربية.نت إن مشاهد ضرب النار كانت الأصعب بالنسبة له لأنها جديدة كليًا عليه، وقد تم تدريبه عليها بواسطة ضباط من القوات المسلحة قبل الدخول في مرحلة تصوير المسلسل",ImgUrl:"/images/news1.webp"},
  {Title: "مصيبة حلوة.. هنا الزاهد تجري عملية تجميل بعد تنمر",Description:"كشفت الفنانة المصرية هنا الزاهد عن خضوعها أخيراً لعملية تجميل لتقويم أسنانها، بعد أن أعلنت في وقت سابق عن تعرّضها للتنمّر بسببهم.",ImgUrl:"/images/news2.webp"},
  {Title: "ملامح مسلسل سفاح التجمع ترتسم.. وصحافي استقصائي يشارك",Description:"بدأت ترتسم ملامح مسلسل سفاح التجمع، حيث أعلن الصحافي الاستقصائي المصري عبد الرحمن الصافي عن مشاركته في كتابة المسلسل مع السيناريست جوزيف فوزي.",ImgUrl:"/images/news3.webp"}
]

const NewsList = News.map((item,index)=>{
  return <SingleNews key={index} Title={item.Title} Description={item.Description} ImgUrl={item.ImgUrl} />
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
       {NewsList}
       {NewsList}
          </div>
        
      </div>
      <Footer />
      </>
  )
}

export default News