import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'طرح البرومو التشويقي لفيلم "الدشاش" استعدادًا لعرضه في دور السينما'
      , Description:"طرحت الشركة المنتجة لفيلم \"الدشاش\" بطولة محمد سعد، البوستر والبرومو الرسمي الخاص به، معلنة قرب موعد طرحه في دور العرض السينمائية بدءًا من أول يناير.\n\nوتدور أحداث الفيلم في إطار اجتماعي تشويقي، ويقدم بطولته الفنان محمد سعد الذي يعود من خلاله إلى السينما بعد غياب دام لأكثر من 5 سنوات إذ كان آخر أعماله الجزء الثاني من فيلم الكنز الذي قدمه عام 2019. \"الدشاش\" من تأليف الكاتب جوزيف فوزي ومن إخراج سامح عبد العزيز.\n\nويشارك في الفيلم مجموعة من النجوم منهم زينة وباسم سمرة ونسرين طافش ومصطفى أبو سريع ومحمد جمعة."
       ,ImgUrl:"/images/news193.webp"},

       {Title:'عمرو عبد الجليل ينضم لـ "حسبة عمري" بطولة روجينا'
         , Description:"انضم عمرو عبدالجليل للمشاركة في مسلسل \"حسبة عمري\" بطولة روجينا، والمقرر عرضه رمضان المقبل 2025، واستقرت الجهة المنتجة على اختيار اسم العمل \"حسبة عمري\" بشكل نهائي، بدلاً من \"حقي وحقك\". مسلسل \"حسبة عمري\" يدور في إطار اجتماعي لايت، وأوضحت روجينا، في إحدى اللقاءات أن المسلسل يستعرض قضايا المرأة بشكل جريء قد يثير استياء بعض الرجال. المسلسل من تأليف محمود عزت وإخراج مي ممدوح، وجاري ترشيح والتعاقد مع النجوم المشاركين في العمل لتحديد موعد بدء التصوير."
         ,ImgUrl:"/images/news194.webp" },
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
