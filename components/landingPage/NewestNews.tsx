import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أحمد فهمي وإدوارد ونجلاء بدر في المستشفى بسبب "تليجراف"'
      , Description:'يواصل أبطال مسلسل "تليجراف" تصوير مشاهدهم داخل العمل تمهيدًا لعرضه في موسم رمضان 2025. وقد انتهت نجلاء بدر وأحمد فهمي وإدوارد من تصوير عدد من مشاهد العمل بالأمس داخل مستشفى بمنطقة الشيخ زايد بمدينة السادس من أكتوبر. ويشارك في بطولة المسلسل أحمد فهمي، ميرنا نور الدين، إدوارد، نجلاء بدر، وصفاء الطوخي، والعمل من تأليف هشام هلال، إخراج أحمد خالد، وإنتاج سالي والي، وينتمي المسلسل إلى نوعية الحلقات الطويلة 30 ومن المقرر عرضه خلال السباق الرمضاني 2025.'
       ,ImgUrl:"/images/news239.webp"},

       {Title:'دي إم سي تبدأ الترويج لمسلسل "النُّص" بطولة أحمد أمين'
         , Description:'روجت صفحة قناة دى إم سى لمسلسل "النُّص" بطولة الفنان أحمد أمين ونشرت صورًا من كواليس المسلسل الذى يعرض خلال موسم رمضان المقبل، وتضمنت الصور مشاهد ل أحمد أمين والفنان صدقي صخر. مسلسل "النُّص" من بطولة أحمد أمين وأسماء أبو اليزيد وصدقي صخر وحمزة العيلي وسامية طرابلسي وكذلك دنيا سامي وسمر علام ودعاء حكم.'
         ,ImgUrl:"/images/news240.webp" },
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
