import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'هشام ماجد وأسماء جلال يواصلون تصوير الجزء الثاني من "أشغال شقة "'
      , Description:"يواصل هشام ماجد وأسماء جلال تصوير مشاهدهما في مسلسل \"أشغال شقة 2\" تمهيدًا لعرضه في رمضان تحت إشراف المخرج خالد دياب. يُذكر أن الجزء الأول من مسلسل \"أشغال شقة\" كان من بطولة أسماء جلال، شيرين، انتصار، نهى عابدين ومن تأليف خالد وشيرين دياب وإخراج خالد دياب وينضم للجزء الثاني مصطفى غريب وعلي صبحي."

       ,ImgUrl:"/images/news181.webp"},
       {Title:'"الباشا" مسرحية جديدة تجمع كريم عبد العزيز وهنا الزاهد في موسم الرياض'
         , Description:"يستعد كريم عبد العزيز، لعرض مسرحيته الجديدة \"الباشا\"، على خشبة مسرح بكر الشدي من يوم 25 ديسمبر إلى 1 يناير ضمن فعاليات موسم الرياض. ويشارك في المسرحية هنا الزاهد وهيدي كرم وويزو وحاتم صلاح والطفل جان رامز. جدير بالذكر أن آخر مسرحيات كريم عبد العزيز في موسم الرياض كانت \"السندباد\" التي تم عرضها في أغسطس الماضي وشاركه في البطولة نيللي كريم وبيومي فؤاد ومصطفى خاطر ومن إخراج أحمد الجندي."
         ,ImgUrl:"/images/news182.webp" },
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
