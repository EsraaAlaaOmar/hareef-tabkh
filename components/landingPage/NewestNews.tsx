import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'"حلمي حلمك".. مسرحية جديدة لـ أحمد حلمي في موسم الرياض'
      , Description:"بعد نجاح تجاربه المسرحية السابقة، تعاقد أحمد حلمي على تقديم مسرحية جديدة بعنوان 'حلمي حلمك' خلال الموسم الجديد من موسم الرياض في السعودية. ويبدأ 'حلمي' خلال الأسابيع القادمة تحضيرات المسرحية الجديدة التي تعد من أضخم مسرحيات الموسم التي تم إعداد تجهيزات لها. يُشار إلى أن أحمد حلمي يحقق نجاحًا كبيرًا هذه الفترة من خلال مسرحية ميمو، التي مازال يقدمها على مسرح نايل جراند تاور في جاردن سيتي بالقاهرة، وترفع المسرحية شعار كامل العدد عند عرضها بشكل أسبوعي يومي الخميس والجمعة."
      ,ImgUrl:"/images/news99.webp"},
      {Title:'أحمد أمين وجيهان الشماشرجي يلتقون في رمضان في مسلسل "مذكرات نشال"'
        , Description:"يشترك كلًا من أحمد أمين وجيهان الشماشرجي في بطولة مسلسل 'مذكرات نشال' وسيعرض المسلسل في رمضان المقبل 2025 وتدور أحداث المسلسل بشكل فانتازي. ويعود أحمد أمين بهذا المسلسل بعد أن غاب عن المنافسة الرمضانية الموسم الماضي، حيث كانت أخر أعماله مسلسل 'الصفارة' رمضان قبل الماضي. ويشار إلى أن آخر أعمال جيهان الشماشرجي هو مسلسل 'جودر' ومسلسل 'كامل العدد1+' وتم عرضهم في موسم رمضان الماضي 2024."
        ,ImgUrl:"/images/news100.webp"},
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
