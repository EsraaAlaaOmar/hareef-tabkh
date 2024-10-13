import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'"صاحبة السعادة" تستضيف أبطال وصناع مسلسل "تيتا زوزو الإثنين والثلاثاء '
      , Description:"تستضيف الفنانة والإعلامية إسعاد يونس، في برنامجها 'صاحبة السعادة' أبطال وصناع مسلسل 'تيتا زوزو'، وذلك يومي الاثنين والثلاثاء. ويستضيف البرنامج خلال الحلقتين محمد كيلاني، إسلام إبراهيم، بسمة داوود، نور محمود، إيناس كامل، حمزة العيلي، سمر علام، عابد عناني، كما يستضيف دنيا ماهر وإسراء نبيل وأحمد عنان وجودي مسعود وجوليا كريم ومدثر حسن ومعاذ جاد وكارلا سعد وصالح مهدي والمخرجة شيرين عادل والمؤلف محمد عبدالعزيز."
      ,ImgUrl:"/images/news95.webp"},
      {Title:'ريهام حجاج تبدأ تحضيرات مسلسل "كنترول"'
        , Description:"بدأت ريهام حجاج في الاستعداد لمسلسلها الرمضاني الجديد 'كنترول' حيث بدأت الجلسات التحضيرية للاستقرار على اختيار الممثلين والتفاصيل الأخرى تمهيدًا لبدء التصوير خلال الشهر المقبل على أقصى تقدير. وتدور أحداث المسلسل في 15 حلقة في أولى تجارب ريهام لتقديم هذه النوعية من المسلسلات، المسلسل من تأليف أيمن سلامة ومن إخراج أحمد صالح ومن المقرر أن يتم الإعلان عن أسماء الممثلين المشاركين في العمل خلال الفترة المقبلة."
        ,ImgUrl:"/images/news96.webp"},
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
