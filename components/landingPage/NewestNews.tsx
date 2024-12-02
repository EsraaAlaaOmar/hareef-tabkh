import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'طرح فيلم "الحريفة 2" في دور العرض .. الأربعاء المقبل'
      , Description:"طرح فيلم \"الحريفة 2\" في دور العرض السينمائية يوم الأربعاء المقبل، وهو من بطولة نور النبوي وأحمد غزى وكزبرة، وهو من إخراج كريم سعد وتأليف إياد صالح. تدور أحداث فيلم \"الحريفة 2\" تحت اسم \"الريمونتادا\" حول الحريفة بعد فوزهم بالبطولة، يتفقوا على استكمال الحلم سويًا. وتشهد الأحداث دخولهم الجامعة لأول مرة وانبهارهم بما في داخلها وعودتهم للعب كرة القدم، مع وجود \"حريفة جدد\" داخل الفريق سواء من العنصر النسائي أو الرجالي."
       ,ImgUrl:"/images/news163.webp"},
       {Title:'محمد أنور يكشف تفاصيل الجزء الثاني من "ديبو"'
         , Description:"صرح محمد أنور أنه يستعد لتقديم جزء ثان من مسلسل \"ديبو\" الذي عرض مؤخرا على إحدى المنصات الرقمية. وقال محمد أنور إنه بدأ حاليا فى التحضيرات للجزء الثاني من مسلسل \"ديبو\" ولكن المسلسل قد يستغرق بعض الوقت لكونه يضم مجموعة كبيرة من ضيوف الشرف. يتم حاليًا كتابة الجزء الثاني وفور الانتهاء من الكتابة سوف تبدأ جلسات العمل مع المخرج والمؤلف لبدء التصوير. مسلسل \"ديبو\" مكون من 12 حلقة شارك في بطولة الجزء الأول العديد من النجوم وضيوف الشرف أبرزهم زينة، مصطفى غريب وهالة فاخر."
         ,ImgUrl:"/images/news164.webp" },
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
