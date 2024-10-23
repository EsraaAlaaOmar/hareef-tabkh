import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'محمد هنيدي يتعاقد علي مسرحية "المجانين"'
      , Description:"تعاقد محمد هنيدي على بطولة مسرحية جديدة بعنوان 'المجانين'، ومن المقرر عرضها ضمن فعاليات موسم الرياض التي تستمر حتى نهاية فبراير من العام المقبل. في سياق أخر ينتظر هنيدي عرض فيلم 'الجواهرجي' والذي يتعاون فيه بعد غياب للتعاون مع منى زكي، منذ مشاركتهم في فيلم 'صعيدي في الجامعة الأمريكية'. وتدور أحداث الفيلم في إطار كوميدي، حول تاجر مجوهرات يقع في العديد من المتاعب والمواقف المحرجة بسبب زوجته؛ ثم يدخل مستشفى الأمراض النفسية والعصبية."
      ,ImgUrl:"/images/news111.webp"},
      {Title:'بدء تصوير عمرو يوسف لـ  فيلمه الجديد "درويش"'
        , Description:"بدأ عمرو يوسف وتارا عماد تصوير مشاهدهم في فيلم 'درويش' وهو من نوعية أفلام الأكشن والمطاردات، وتدور أحداثه خلال فترة الأربعينات. ويشارك في بطولة فيلم 'درويش' كل من دينا الشربيني ومحمد شاهين وتارا عماد ومصطفى غريب وأحمد عبد الوهاب وخالد كمال وإسلام حافظ، وهو من تأليف وسام صبري وإخراج وليد الحلفاوي. ويلعب فيه عمرو يوسف دور محتال يتحول إلى بطل شعبي بالصدفة."
        ,ImgUrl:"/images/news112.webp"},
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
