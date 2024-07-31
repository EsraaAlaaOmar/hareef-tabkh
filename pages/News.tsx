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
const News =[{Title: "احتفال بشرى بزواجها من نجل محمود حميدة",Description:
"احتفلت بشرى بزفافها على خالد حميدة، نجل الفنان محمود حميدة، حيث أُقيم حفل الزفاف في الساحل الشمالي وسط الأهل والأقارب وبعض الفنانين الذين تربطهم علاقة قوية بالفنانة بشرى. وكشفت بعض المصادر المقربة من الفنانة بشرى عن وجود علاقة صداقة في الأساس منذ عامين تقريبًا، وتحولت الصداقة إلى حب أثناء اشتراكهما في مشروع فني كبير وهو رقمنة الأرشيف المصري باستخدام تقنيات الذكاء الاصطناعي. جدير بالذكر أن بشرى انفصلت عن زوجها السابق سالم هيكل منذ عام.",ImgUrl:"/images/news1.webp"},
  {Title: "مسلسلات تحجز مقعدها في رمضان 2025: أولها المداح الجزء الخامس ",Description:"على الرغم أن الموسم والسباق الرمضاني لم يبدأ بعد، إلا أن صناع الدراما بدأوا في حجز مقاعدهم بالتحضير لأعمالهم الفنية. وللمرة الخامسة على التوالي، يستغل 'المداح' نجاحه وشهرته والتفاعل الجماهيري، ليعلن حمادة هلال عن الجزء الخامس ليكون بذلك من أوائل دراما رمضان 2025. من المقرر أن يشارك في بطولة الجزء الخامس خالد سرحان وهادي خفاجة وفتحي عبد الوهاب وعدد آخر من النجوم الشباب. المسلسل من تأليف أمين جمال، وليد أبو المجد، شريف يسري، وإخراج أحمد سمير فرج",ImgUrl:"/images/news2.webp"},
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