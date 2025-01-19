import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'عنبة ينضم رسميًا إلى أبطال مسلسل "الكوتش"'
      , Description:"انضمام عنبة رسميًا إلى فريق عمل مسلسل \"الكوتش\"، المنتظر عرضه في موسم رمضان 2025. وقد كشف المخرج أحمد صالح الكيلاني عن انضمامه للعمل، حيث نشر عبر حساباته الرسمية صوراً تجمعهما خلال التحضيرات، مؤكداً حماسه للتعاون معه في هذا المشروع. من ناحية أخرى أعرب عنبة عن سعادته البالغة بالمشاركة في مسلسل \"الكوتش\"، مشيراً إلى أن العمل مع المخرج أحمد صالح الكيلاني يمثل تجربة مميزة بالنسبة له، كما أثنى على أجواء العمل والفريق، معبرًا عن حماسه لتقديم شخصية جديدة ومختلفة لجمهوره. مسلسل \"الكوتش\" مكون من 15 حلقة، ويدور في إطار اجتماعي كوميدي، ما يجعله من الأعمال المتوقع أن تحظى بمتابعة جماهيرية كبيرة."
       ,ImgUrl:"/images/news227.webp"},

       {Title:'أكرم حسني: أجواء حفل Joy Awards لا تُنسى'
         , Description:"عبر أكرم حسني عن سعادته الكبيرة بمشاركته في حفل Joy Awards، الذي يُعد من أبرز الفعاليات الفنية في المملكة العربية السعودية. كما تحدث أكرم حسني، في أحد اللقاءات التلفزيونية عن الأجواء الرائعة التي سادت الحفل، وأشاد بتنظيم الحدث ومستوى الاحترافية الذي ظهرت به الفعاليات، وأوضح أن مشاركة عدد كبير من النجوم والفنانين في هذه الاحتفالية يجعلها تجربة لا تُنسى، متوقعًا أن تستمر الرياض في استقطاب الفعاليات الكبرى في المستقبل."
         ,ImgUrl:"/images/news228.webp" },
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
