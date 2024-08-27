import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'لقاء الخميسي ورانيا يوسف في "روج أسود"'
     , Description :"تعاقدت لقاء الخميسي على المشاركة في مسلسل 'روج أسود' مع رانيا يوسف، تأليف أيمن سليم وإخراج محمد عبد الرحمن حماقي، وتدور أحداثه في إطار اجتماعي تشويقي حول محكمة الأسرة المصرية، ويتكون من 45 حلقة ومن إنتاج ممدوح شاهين، ومن المفترض عرضه مطلع العام المقبل."
      ,ImgUrl:"/images/news33.webp"},
    {Title:'مفاجأة في لجنة تحكيم Arabs Got Talent في موسمه السابع'
,Description:"استعدت مجموعة قنوات MBC لعودة برنامج Arabs Got Talent وأعلنت عن أسماء لجنة تحكيم الموسم السابع استعدادًا لتصويره خلال الفترة المقبلة بالمملكة العربية السعودية. وشهدت لجنة الموسم الجديد مفاجأة، بتواجد باسم يوسف، الذي يظهر في لجنة التحكيم للمرة الأولى في تاريخ البرنامج. كما تستمر نجوى كرم في عضوية لجنة تحكيم البرنامج، ويشهد هذا الموسم عودة ناصر القصبي إلى عضوية لجنة تحكيم البرنامج الذي تقدمه ريا أبي راشد وقصي. ومن المقرر أن يبدأ البرنامج تصوير حلقاته الأولى المسجلة في وقت لاحق من الشهر القادم في العاصمة السعودية الرياض، وسط ترقب محبيه لعودته في موسم جديد."
,ImgUrl:"/images/news34.webp"},
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
