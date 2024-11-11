import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'تعرف إلى تفاصيل مسلسل "موعد مع الماضي" '
      , Description:"طرح الفيديو الترويجي لمسلسل \"موعد مع الماضي\" لآسر ياسين.\n\nالفيديو كشف عن مجموعة متنوعة من اللقطات التشويقية للعمل المقرر أن يتكون من 8 حلقات، وسيعرض في 6 ديسمبر على إحدى المنصات العالمية.\n\nتدور أحداث المسلسل في مصر، حيث يخوض يحيى (آسر ياسين) رحلة مليئة بالمخاطر للكشف عن الحقيقة وراء مقتل شقيقته نادية، ومع تصاعد الأحداث، تصبح جميع الشخصيات مشبوهة، ويزداد الغموض مع الأحداث.\n\nالمسلسل من إخراج السدير مسعود، وكتابة محمد المصري، ويشارك آسر ياسين البطولة محمود حميدة وشريف سلامة و شيرين رضا وركين سعد والعديد من النجوم."
       ,ImgUrl:"/images/news137.webp"},
       {Title:'صناع مسلسل "الكينج" يأجلونه لرمضان ٢٠٢٦'
         , Description:"أعلن منتجي مسلسل 'الكينج' خروجه من السباق الرمضاني وتأجيله لرمضان القادم ٢٠٢٦.\n\nونشر بطل المسلسل محمد إمام تعليق على انستجرام كتب فيه: 'اللي جاي حلو ان شاء الله' ليعبر عن إيجابيته تجاه تأجيل المسلسل.\n\nتعد آخر الأعمال الدرامية التي قدمها محمد إمام كان مسلسل بعنوان 'كوبرا'، والذي تم عرضه في رمضان ٢٠٢٤ وحقق نجاح كبير وكان مسلسل كوميدي تدور أحداثه في إطار لايت تشويقي."
         ,ImgUrl:"/images/news138.webp"},
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
