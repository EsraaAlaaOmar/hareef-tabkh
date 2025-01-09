import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'معتز هشام ينضم لـ "ولاد الشمس" مع أحمد مالك وطه دسوقي'
      , Description:"انضم معتز هشام إلى أحمد مالك وطه دسوقي في بطولة مسلسل \"ولاد الشمس\" الذي ينافس في الموسم الرمضاني القادم 2025، من تأليف مهاب طارق وإخراج شادي عبد السلام. وتدور أحداث مسلسل \"ولاد الشمس\" في إطار درامي اجتماعي، حول قصة صديقين نشآ معاَ منذ الطفولة في دار للأيتام، ويستعرض رحلتهما في الحياة التي قادتهما إلى الدخول في عالم السرقة والجرائم."
       ,ImgUrl:"/images/news215.webp"},

       {Title:'مريم الخشت تشارك أحمد داوود بطولة "الشرنقة" في رمضان 2025'
         , Description:"تعاقدت مريم الخشت مؤخرا على مشاركة أحمد داوود بطولة أحدث أعماله الدرامية مسلسل \"الشرنقة\"، المقرر عرضه في سباق رمضان المقبل 2025. مسلسل \"الشرنقة\" بطولة أحمد داوود، اللبنانية سارة أبي كنعان، مريم الخشت، صبري فواز، علي الطيب، عمرو وهبة، صلاح عبد الله، محمد عبده، ياسر عزت وعدد آخر من الفنانين، والعمل من تأليف عمرو سمير عاطف، وإخراج محمود عبد التواب وتدور الأحداث في إطار اجتماعي مشوق . من ناحية أخرى تعاقدت مؤخرا مريم الخشت علي المشاركة في مسلسل \"كامل العدد 3\" بطولة دينا الشربيني، المقرر عرضه في دراما رمضان المقبل 2025."
         ,ImgUrl:"/images/news216.webp" },
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
