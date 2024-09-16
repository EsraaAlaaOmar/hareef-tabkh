import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أحمد السقا يحصد جائزة الإبداع من مهرجان الفضائيات العربية'
      , Description :"حصد أحمد السقا جائزة الابداع من مهرجان الفضائيات العربية في دورته الـ15 عن دوره في فيلم 'السرب'. وأهدى السقا تكريمه للفنانة ناهد رشدي التي رحلت عن عالمنا يوم السبت الماضي. وعلى جانب آخر تعاقد أحمد السقا على بطولة فيلم جديد بعنوان 'خبطة العمر' من تأليف هاني سرحان وإخراج محمد سلامة وجاري اختيار باقى فريق العمل والتعاقد معهم. وصرح السقا أن هناك فيلمان جديدان، أحدهما مع المخرج أحمد نادر جلال وآخر مع المخرج حسين المنباوي، لكنه لم يفصح عن تفاصيلهما بعد."
       ,ImgUrl:"/images/news59.webp"},
    {Title:'بدء عرض مسلسل "ديبو" لـ محمد أنور على إحدى المنصات الشهيرة'
    ,Description:"لاقى مسلسل \"ديبو\" بعد عرض الحلقة الأولى تفاعل كبير علي مواقع التواصل الاجتماعي والسوشيال ميديا. وتدور أحداث المسلسل في إطار تشويقي كوميدي حول شاب مستهتر يدعى \"ديبو\" يضطر للعمل في أحد الفنادق من خلال مكتب توظيف لسداد ديونه ليكتشف فيما بعد أنه خاص بالحيوانات لتنقلب الأحداث رأسا على عقب. المسلسل من بطولة محمد أنور وهالة فاخر ومحمد محمود ويشارك عدد من ضيوف الشرف منهم زينة وأكرم حسني. المسلسل من تأليف إيهاب بليبل، وإخراج أحمد عبد الوهاب، وإنتاج سالي والي."
    ,ImgUrl:"/images/news60.webp"},
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
