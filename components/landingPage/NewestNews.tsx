import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[{Title: "من ضابط لـداعشي.. دياب: شخصيتي في السربممتعة والأكشن كان الأصعب في مليحة",Description:"الفنان المصري قال للعربية.نت إن مشاهد ضرب النار كانت الأصعب بالنسبة له لأنها جديدة كليًا عليه، وقد تم تدريبه عليها بواسطة ضباط من القوات المسلحة قبل الدخول في مرحلة تصوير المسلسل",ImgUrl:"/images/news1.webp"},
    {Title: "مصيبة حلوة.. هنا الزاهد تجري عملية تجميل بعد تنمر",Description:"كشفت الفنانة المصرية هنا الزاهد عن خضوعها أخيراً لعملية تجميل لتقويم أسنانها، بعد أن أعلنت في وقت سابق عن تعرّضها للتنمّر بسببهم.",ImgUrl:"/images/news2.webp"},
    {Title: "ملامح مسلسل سفاح التجمع ترتسم.. وصحافي استقصائي يشارك",Description:"بدأت ترتسم ملامح مسلسل سفاح التجمع، حيث أعلن الصحافي الاستقصائي المصري عبد الرحمن الصافي عن مشاركته في كتابة المسلسل مع السيناريست جوزيف فوزي.",ImgUrl:"/images/news3.webp"}
  ]

  const NewsList = News.map((item,index)=>{
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
