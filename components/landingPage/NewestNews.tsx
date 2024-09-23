import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'بدرية طلبة تشارك في "وتقابل حبيب" مع ياسمين عبدالعزيز'
      , Description:"تعاقدت بدرية طلبة على المشاركة في مسلسل 'وتقابل حبيب' مع ياسمين عبدالعزيز الذي سوف يتم عرضه في رمضان 2025. 'وتقابل حبيب' هو الاسم المؤقت للمسلسل ويحمل طابع اجتماعي رومانسي ويتكون من 30 حلقة ويشارك كريم فهمي في البطولة وهو من تأليف عمرو محمود ياسين وإخراج محمد الخبيري وإنتاج شركة سينرجي."
      ,ImgUrl:"/images/news69.webp"},
      {Title:'بدء تصوير فيلم "أوتو كروس" لملك زاهر'
        , Description:"بدأت ملك زاهر تصوير أحدث أفلامها 'أوتو كروس' الذي تجسد فيه شخصية سيدة أعمال تمتلك العديد من الشركات خلال أحداث الفيلم، ويشارك في البطولة كلًا من ناهد السباعي وباسم سمرة ووفاء عامر وغيرهم، من تأليف هبة رجب وإخراج إبرام نشأت. يُذكر أن اَخر أعمال ملك زاهر كانت مسلسل 'محارب' الذي عُرض في رمضان الماضي مع حسن الرداد وأحمد زاهر، ومن تأليف محمد سيد بشير وإخراج شيرين عادل وإنتاج أحمد السبكي."

        ,ImgUrl:"/images/news70.webp"},
    ]

  const NewsList = News?.slice(0, 2)?.map((item,index)=>{
    return <SingleNews key={index} Title={item.Title} Description={item.Description} ImgUrl={item.ImgUrl} />
  })
  return (
    <div className="landing-news-container">
    <Link href='/News' className="section-page">
            عرض الكل 
   </Link>
  <Link href='/News' className="section-title">
       أخر الأخبار
  </Link>
{NewsList}
  
    </div>
  );
};

export default NewestNews;
