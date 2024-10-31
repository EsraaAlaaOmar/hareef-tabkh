import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أسماء جلال تصف كواليس "الفستان الأبيض" أنها لذيذة .. وهل تشارك في أشغال شقة الجزء الثاني؟'
      , Description:"على هامش فعاليات الدورة السابعة لمهرجان الجونة السينمائي قالت أسماء جلال عن فيلمها الجديد 'الفستان الأبيض'، والذي تم عرضه أمس ضمن فعاليات المهرجان: إنها سعيدة جدا بهذا الفيلم، وأشارت إلى إن كرو العمل تعب على هذا الفيلم من أول الممثلين وحتى المخرجة. وتابعت إن الكواليس كانت ممتعة مع كرو العمل، مشيرة إلى إنه ليس أول تعاون بينها وبين ياسمين رئيس، حيث قالت: كانت ألذ حاجة وكأننا رايحين نصور مع عيلة. وأنهت أسماء جلال حديثها عن أحدث أعمالها التي تستعد لها في هذه الفترة الحالية، حيث كشفت أنها تشارك في الجزء الثاني من مسلسل أشغال شقة." 
       ,ImgUrl:"/images/news123.webp"},
       {Title:'محمد سعد يبدأ تصوير "الدشاش"'
         , Description:"بدأ محمد سعد تصوير أولى مشاهد أحدث أفلامه 'الدشاش'، من إخراج سامح عبد العزيز ويشاركه في البطولة باقة مميزة من نجوم السينما في مصر والوطن العربي، ومن المقرر عرضه في موسم عيد الفطر 2025. ونشر عبد العزيز في منشور له على حسابه على الفيسبوك صورة الكلاكيت الخاص بتصوير فيلم 'الدشاش'، معلقاً عليها: 'أول يوم تصوير فيلم الدشاش، توكلت على الله'. وقد حاز المنشور على إعجاب عدد كبير من الجمهور والمتابعين الذين أعربوا عن حماسهم لمشاهدة الفيلم فور طرحه."

 
         ,ImgUrl:"/images/news124.webp"},
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
