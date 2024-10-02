import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'طرح برومو مسلسل وتر حساس وعرضه قريبا على ON'
      , Description:"طرحت قناة ON برومو مسلسل 'وتر حساس' والمقرر عرضه قريبًا. مسلسل وتر حساس بطولة صبا مبارك، محمد علاء، إنجى المقدم، هيدى كرم. ويتكون المسلسل من 45 حلقة، وتأليف أمين جمال وإخراج وائل فرج وإنتاج المتحدة للخدمات الإعلامية. مسلسل وتر حساس يجمع صبا مبارك ومحمد علاء والمخرج وائل فرج مجددًا بعدما حقق الثلاثى نجاحاً سوياً خلال مسلسل 'بين السطور' الذي تم عرضه قبل رمضان الماضي، ولاقى إشادات جماهيرية وتفاعل كبير مع أحداثه المشوقة التي اعتمدت على لغز جريمة قتل."

      ,ImgUrl:"/images/news83.webp"},
      {Title:'سهر الصايغ تكشف حقيقة مشاركتها في مسلسل المداح 5 بطولة حمادة هلال'
        , Description:"كشفت سهر الصايغ، عن حقيقة مشاركتها في مسلسل المداح 5، بطولة حمادة هلال، والمقرر عرضه في رمضان المقبل. وقالت سهر الصايغ إنها لن تشارك في الموسم الخامس من مسلسل المداح معلقةً: مش هشارك في الجزء ده لكن المداح نجم من غير حاجة وربنا ينجحهم السنادي إن شاء الله. سبق وشاركت سهر الصايغ في الموسم الثاني من مسلسل المداح، وشارك في البطولة حمادة هلال، خالد سرحان، رانيا فريد شوقي ومن إخراج أحمد سمير فرج."

        ,ImgUrl:"/images/news84.webp"},
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
