import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'طرح البوسترات الفردية لـ فيلم "بضع ساعات في يوم ما"استعدادًا لطرحه في السينما'
      , Description:"طرحت الجهة المنتجة لفيلم \"بضع ساعات في يوم ما\" بطولة هشام ماجد ومي عمر و هنا الزاهد، البوسترات الفردية للعمل، المقرر طرحة بدور العرض السينمائي 26 من ديسمبر الجاري. والعمل من تأليف الكاتب محمد صادق، إخراج عثمان أبو لبن. يُذكر أن هشام ماجد يستعد حاليا لتصوير فيلم \"البرشامة\" من بطولة ريهام عبد الغفور وطه دسوقي وباسم سمرة ومصطفي غريب كما يعرض له حاليا فيلم «اكس مراتي» بطولة أمينة خليل ومحمد ممدوح."
       ,ImgUrl:"/images/news165.webp"},
       {Title:'رحمة أحمد تشارك أكرم حسني بطولة "الكابتن" في رمضان 2025'
         , Description:"تعاقدت رحمة أحمد علي مشاركة أكرم حسني بطولة مسلسل 'الكابتن'، المقرر عرضه ضمن سباق رمضان 2025 المقبل. مسلسل 'الكابتن' مكون من 15 حلقة، ويدور في إطار اجتماعي كوميدي، وتشارك آية سماحة في بطولته مع أكرم حسني، ومن إخراج معتز التوني. من ناحية اخرى تعاقدت رحمة أحمد علي فيلم 'رزق الهبل' مع مني زكي ومن المقرر بدء التصوير خلال الفترة القادمة، والعمل يدور في إطار كوميدي ويعتمد على البطولة النسائية."
         ,ImgUrl:"/images/news167.webp" },
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
