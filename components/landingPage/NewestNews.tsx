import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'كريم عبد العزيز: مسرحية الباشا حببتني في المسرح تاني'
      , Description:"عبر كريم عبد العزيز عن سعادته بنجاح مسرحيته الأخيرة \"الباشا\"، التي تُعرض حالياً ضمن فعاليات موسم الرياض، مشيراً إلى أن هذه التجربة أعادت إليه شغفه بالمسرح. وقال كريم عبد العزيز: \"كلنا رقم واحد معندناش الحسبة دي، والمسرحية الوحيدة اللي عملتها اسمها (حكيم عيون) مع الراحل حبيبي علاء ولي الدين، و مسرحية (السندباد) رجعتني المسرح، ومسرحية (الباشا) حببتني في المسرح تاني\". وتعد مسرحية \"الباشا\" التعاون الأول الذي يجمع بين هنا الزاهد وكريم عبد العزيز ويشاركها البطولة حاتم صلاح ودينا محسن ويزو وهيدي كرم والطفل جان رامز."
       ,ImgUrl:"/images/news201.webp"},

       {Title:'وفاة أحمد عدوية عن عمر ناهز 79 عامًا'
         , Description:"توفي أحمد عدوية بعد صراع مع المرض عن عمر ناهز 79 عاما.\n\nوشارك محمد عدوية متابعيه على الفيسبوك بصورة تجمعه بوالده الفنان الراحل أحمد عدوية، معبّراً عن حزنه العميق لفقدانه.\n\nوعلّق محمد عدوية على الصورة قائلاً: \"الله يرحمك يا بابا، رحم الله طيب القلب، حنون القلب، جابر الخواطر.\""
         ,ImgUrl:"/images/news202.webp" },
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
