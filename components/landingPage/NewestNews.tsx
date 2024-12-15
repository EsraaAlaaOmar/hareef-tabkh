import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'حمزة العيلي يشارك في مسلسل "وصية جدو"'
      , Description:"أعرب حمزة العيلي عن سعادته بالمشاركة كضيف شرف في مسلسل \"وصية جدو\"، من بطولة بيومي فؤاد وليلى عز العرب، وأشار إلى تقديره الكبير لزملائه في العمل والجهود المبذولة من فريق الإنتاج. المسلسل ينتمي لفئة الكوميديا وهو بطولة مشتركة بين كل من: بيومي فؤاد، ليلى عز العرب، حمزة العيلي، وياسر الزنكلوني، إلى جانب عدد كبير من الفنانين الشباب والموهوبين من أبطال ذوي الهمم. العمل من قصة وإخراج محمد الأنصاري، وسيناريو سندس عادل وبلال الشاعر ومحمد عمروسي."
       ,ImgUrl:"/images/news179.webp"},
       {Title:'جمال سليمان يستعد لـ"أهل الخطايا" المستوحى من جرائم حقيقية'
         , Description:"بعد نجاح \"الطاووس\" في 2021 يلتقي جمال سليمان من جديد مع المخرج رؤوف عبدالعزيز، ليتجدد التعاون بينهما في مسلسل «أهل الخطايا». ومن خلال أحداث مسلسل \"أهل الخطايا\" يتم تناول جرائم خرجت من رحم الواقع، في 15 حلقة تم التحضير لها على مدار الأشهر الماضية مع المؤلفين أحمد أنور و محمد عبدالقوي. يبدأ تصوير مسلسل \"أهل الخطايا\" الفترة المقبلة ويقوم ببطولته النجم جمال سليمان، وتأليف كلا من المؤلفين أحمد أنور و محمد عبد القوي ، إخراج رؤوف عبد العزيز، وجاري الإعلان عن قائمة أبطال المسلسل خلال الأيام القليلة المقبلة."


         ,ImgUrl:"/images/news180.webp" },
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
