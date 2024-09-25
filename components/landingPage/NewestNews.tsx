import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'رنا رئيس تشارك في "حياة أو موت" مع حنان مطاوع'
      , Description:"بدأت رنا رئيس تصوير دورها في مسلسل 'حياة أو موت' مع حنان مطاوع. حيث تقوم رنا بدور محوري في أحداث العمل الذي تدور أحداثه في إطار تشويقي اجتماعي ويتكون من 10 حلقات. والمسلسل من إخراج هاني حمدي ومن إنتاج أحمد السبكي. ويشارك في بطولة المسلسل أحمد الرافعي، ومحمد علي رزق وسلوى عثمان وآخرون. ومن ناحية أخرى من المقرر أن تشارك رنا رئيس في بطولة الجزء الثالث من مسلسل 'موضوع عائلي' وهو من إخراج أحمد الجندي وبطولة ماجد الكدواني وطه دسوقي وسما إبراهيم ومحمد رضوان."
      ,ImgUrl:"/images/news73.webp"},
      {Title:'برغم القانون وتيتا زوزو وإنترفيو تتصدر قائمة الأكثر مشاهدة'
        , Description:"تصدرت عدد من المسلسلات قائمة الأكثر مشاهدة في مصر، حيث تصدر مسلسل برغم القانون المركز الأول بطولة إيمان العاصي ويشارك في بطولة مسلسل 'برغم القانون' كل من هانى عادل ووليد فواز ومحمد محمود عبد العزيز وتأليف نجلاء الحديني وإخراج شادى عبد السلام. وحصد مسلسل 'تيتا زوزو' المركز الثاني، بطولة إسعاد يونس وحمزة العيلي ومحمود البزاوي، من تأليف محمد عبد العزيز، وإخراج شيرين عادل ويتكون المسلسل من 30 حلقة وإنتاج سينرجي. وجاء في المركز الثالث مسلسل 'انترفيو' بطولة رنا رئيس وخالد شباط ومن إخراج أحمد خالد امين."

        ,ImgUrl:"/images/news74.webp"},
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
