import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'نيللي كريم وكندة علوش في "ناقص ضلع" في رمضان 2025'
      , Description:"بدأ فريق عمل مسلسل 'ناقص ضلع' الاستعداد للتصوير بالتحضيرات اللازمة، والمقرر عرضه في رمضان 2025، والذي تتشارك فيه نيللي كريم وكندة علوش وروبي وجيهان الشماشرجي. المسلسل من تأليف مهاب طارق وإخراج أحمد شاكر، ويعكس رؤية فنية جديدة تسعى لتقديم قصة مثيرة وجذابة للجمهور. ويُعد آخر أعمال نيللي كريم هو مسلسل 'فراولة' رمضان 2024. أما آخر أعمال كندة علوش هو مسلسل 'ستات بيت المعادي' عام 2021."
       ,ImgUrl:"/images/news125.webp"},
       {Title:'هدى المفتي تخوض تجربة درامية جديدة في رمضان'
         , Description:"مازال صدى نجاح مسلسل 'مطعم الحبايب' مستمر حيث حصد المسلسل نسبة مشاهدات عالية ويبدو أن نجاح هدى المفتي في دور 'ديدة' في مطعم الحبايب رشحها لبطولة مسلسل جديد رمضان القادم. تعاقدت هدى المفتي على مسلسل من تأليف غادة عبد العال وإخراج كوثر يونس، والمسلسل ينتمي لنوعية الـ 15 حلقة، وتقوم حاليًا بعقد جلسات عمل مكثفة للوقوف على التفاصيل النهائية للمسلسل وسيتم الإعلان عن باقي فريق العمل قريباً."


 
         ,ImgUrl:"/images/news126.webp"},
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
