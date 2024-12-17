import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'كزبرة يعلن عن فيلم جديد من بطولته من إنتاج طارق الجنايني'
      , Description:"كشف كزبرة من خلال حسابه على الفيسبوك عن فيلم جديد من بطولته يتعاون فيه مع المنتج طارق الجنايني، بعد نجاح الجزئين الأول والثاني من فيلم الحريفة وكتب: \"توكلنا على الله، استنونا في الصيف الجاي فيلم \\\"أوڤر سايز\\\"، شخصية عماد البطيء\".\n\nوأضاف: \"خطوة مهمة جدًا مكنتش هقدر أخدها من غير دعم أخواتي وإيمانكم بيا ويارب يعجبكم، إنتاج طارق الجنايني اخراج كريم سعد تاليف إياد صالح.\""
       ,ImgUrl:"/images/news183.webp"},
       {Title:'ياسمين رئيس تشارك فراج بطولة مسلسل "منتهي الصلاحية"'
         , Description:"تعاقدت ياسمين رئيس على مشاركة محمد فراج أحدث مسلسلاته \"منتهي الصلاحية\" والمقرر عرضه في رمضان المقبل 2025.\n\n\"منتهي الصلاحية\"، يمثل أولى تجارب محمد فراج في البطولة المُطلقة بموسم رمضان، والعمل مكون من 15 حلقة، ويضم هنا شيحة وسامي مغاوري وحسن مالك، وجاري التعاقد مع باقي أبطاله في الفترة الحالية، والمسلسل من تأليف محمد هشام عبية، إخراج تامر نادي."

         ,ImgUrl:"/images/news184.webp" },
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
