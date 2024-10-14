import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'محمد لطفي يشارك في "من أيام الجيزة" بطولة إياد نصار'
      , Description:"انضم محمد لطفي للمشاركة في بطولة فيلم 'من أيام الجيزة' بطولة إياد نصار، ومن المقرر بدأ تصوير العمل خلال الفترة المقبلة. فيلم 'من أيام الجيزة'، من نوعية الأعمال الاجتماعية الكوميدية، ومن بطولة إياد نصار، آية سماحة، عمرو عبدالجليل، محمد لطفي، وحاتم صلاح، ومن إخراج مرقس عادل. يُذكر أن محمد لطفي شارك مؤخرًا في فيلم 'ولاد رزق 3' بطولة أحمد عز وعمرو يوسف ومن تأليف صلاح الجهيني، وإخراج طارق العريان."
      ,ImgUrl:"/images/news97.webp"},
      {Title:'طرح برومو فيلم "المخفي" عرضه قريبًا في دور السينما'
        , Description:"طرحت الشركة المنتجة البرومو الدعائي الرسمي لفيلم 'المخفي' والذي يقوم ببطولته عمرو عبد الجليل ومحمد محمود وأحمد سلطان. ومن المفترض أن يتم طرح الفيلم في السينمات خلال أيام قليلة من الآن، حيث بدأت الشركة المنتجة في إطلاق حملة دعائية لتدعيم الفيلم. الفيلم من تأليف أحمد عبد الله وإخراج محمد الشورى ويشارك في بطولته كل من بدرية طلبة وريهام الشنواني ومحمد محسن ومحمود حافظ."
        ,ImgUrl:"/images/news98.webp"},
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
