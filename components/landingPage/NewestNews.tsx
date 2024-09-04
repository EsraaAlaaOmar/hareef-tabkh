import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'بعد لحظة غضب علي قاسم في انتظار عرض فيلمين ومسلسل '
     , Description :"بعد النجاح الذي حققه علي قاسم من خلال مشاركته في مسلسل لحظة غضب مع صبا مبارك ومحمد شاهين، وحقق العمل نجاحًا كبيرًا منذ عرضه في النصف الأول في رمضان 2024. ينتظر علي قاسم، عرض فيلم \"أسد أسود\" بطولة محمد رمضان، فيلم \"وداعًا حمدي\" بطولة شيرين رضا الذي يحل خلاله ضيف شرف، بالإضافة إلى مسلسل جديد مع طه دسوقي وأسماء جلال، والعمل مكون من 8 حلقات، والعمل تأليف إياد صالح وإخراج تامر محسن. وجدير بالذكر أن فيلم \"أسد أسود\" يتناول أحداث من ثورة العبيد، والعمل من تأليف وإخراج محمد دياب ويشارك فيه ماجد الكدواني وخالد الصاوي. ومازال التصوير مستمر بعد فترة توقف بسبب بناء الديكور في مدينة الإنتاج الإعلامي، ومن المقرر طرح العمل خلال الفترة المقبلة عقب الانتهاء من التصوير."

      ,ImgUrl:"/images/news45.webp"},
    {Title:'وتجسد حنان مطاوع دور طبيبة تتعرض للعديد من الأحداث المثيرة والمشوقة في إطار اجتماعي، كما اعتاد جمهورها منها.'
,Description:"مسلسل \"حياة أو موت\" مكون من 10 حلقات ومن المقرر عرضه عبر إحدى المنصات، ويشارك في البطولة حنان مطاوع وأحمد الرافعي ومحمد علي رزق ورنا رئيس وسلوى عثمان، من تأليف أحمد عبد الفتاح وإخراج هاني حمدي، وتدور أحداثه في إطار اجتماعي تشويقي."
,ImgUrl:"/images/news46.webp"},
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
