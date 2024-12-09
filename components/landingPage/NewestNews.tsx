import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'عرض "إقامة جبرية" ل هنا الزاهد قريبًا'
      , Description:'روجت إحدى المنصات الرقمية لمسلسل “إقامة جبرية” من بطولة هنا الزاهد وصابرين. وتقوم هنا الزاهد بدور صيدلانية تعاني من أزمة نفسية بعد وفاة زوجها، مما يدفعها للتوجه إلى عيادة طبيبة نفسية تؤدي دورها الفنانة صابرين، وخلال الجلسات، تتعرف على ابن الطبيبة النفسية، الذي يؤدي دوره محمد الشرنوبي، لتبدأ بينهما علاقة تأخذ منحى غير متوقع، وتتصاعد الأحداث في إطار درامي مشوق. "إقامة جبرية" من بطولة هنا الزاهد، محمد الشرنوبي، وصابرين، ويشارك فيه أيضًا محمود البزاوي، ثراء جبيل، وعايدة رياض، مع ضيف الشرف أحمد حاتم، المسلسل من تأليف أحمد عادل وإخراج أحمد سمير فراج.'
       ,ImgUrl:"/images/news173.webp"},
       {Title:'"مشيرة الخطيرة" مسرحية جديدة ل ليلى علوي في موسم الرياض'
         , Description:'كشفت ليلى علوي عن موعد عرض أحدث أعمالها المسرحية "مشيرة الخطيرة" ضمن فعاليات موسم الرياض بالسعودية. ونشرت ليلى علوي البوستر الدعائي للمسرحية على إنستجرام وعلقت: "انتظروني في مسرحية (مشيرة الخطيرة) بطولتي أنا وبيومي فؤاد يوم ٢٢ ديسمبر على مسرح محمد العلي". يُذكر أن ليلى علوي انتهت مؤخرًا من تصوير مشاهدها في أحدث أفلامها المستريحة، والذي من المقرر طرحه خلال الفترة المقبلة.'
         ,ImgUrl:"/images/news174.webp" },
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
