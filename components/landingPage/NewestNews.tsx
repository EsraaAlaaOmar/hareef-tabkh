import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'إسعاد يونس: أستعد للجزء الثاني من مسلسل "تيتا زوزو"'
      , Description:"صرحت الفنانة إسعاد يونس عن تحضيرات الجزء الثاني من مسلسل \"تيتا زوزو\" بعد النجاح الكبير الذي حققه فور عرضه. وقالت إسعاد يونس أنها بدأت تصوير مسلسل \"كامل العدد 3\" منذ ثلاثة أيام وتحضر حاليًا للجزء الثاني من تيتا زوزو وستعلن عن تفاصيله خلال الفترة المقبلة. وجدير بالذكر أن مسلسل \"تيتا زوزو\" عرض مؤخرًا، وتقوم ببطولته إسعاد يونس إلى جانب محمد كيلاني، إسلام إبراهيم، ندى موسى، وآخرين، وهو من تأليف محمد عبد العزيز وإخراج شيرين عادل."
       ,ImgUrl:"/images/news139.webp"},
       {Title:'"شهادة معاملة أطفال".. هنيدي يعلن مشاركته في رمضان 2025'
         , Description:"أعلن محمد هنيدي من خلال منشور على الفيسبوك، عن مشاركته في سباق دراما رمضان 2025 بمسلسل جديد بعنوان \"شهادة معاملة أطفال\". وعلق هنيدي على المنشور: \"بسم الله.. توكلنا على الله.. مسلسل شهادة معاملة أطفال في رمضان، ربنا يكرمنا\". وكشف البوستر الدعائي الذي أرفقه هنيدي بإعلانه عن العمل، من تأليف محمد سليمان عبد المالك، وإخراج وائل فرج."
         ,ImgUrl:"/images/news140.webp"},
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
