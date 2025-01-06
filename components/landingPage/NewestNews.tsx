import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'دراما رمضان: سامح الصريطي يتعاقد على "الحلانجي" لـ محمد رجب'
      , Description:"تعاقد سامح الصريطي مؤخرًا على المشاركة في مسلسل \"الحلانجي\" بطولة محمد رجب، والمقرر عرضه ضمن سباق رمضان المقبل 2025.\n\nوتضم قائمة العمل بجانب محمد رجب، أيتن عامر، عبير صبري، دانا حلبي، محمد لطفي، هالة فاخر، أحمد وفيق، محمود قابيل، طارق صبري، ميمي جمال، إيناس النجار، وإبراهيم السمان، والعمل من تأليف محمود حمدان، إخراج معتز حسام.\n\nويعتبر \"الحلانجي\" من نوعية الأعمال الاجتماعية، ويظهر خلاله محمد رجب بشخصية نصاب، والعمل مكون من 30 حلقة."
       ,ImgUrl:"/images/news211.webp"},

       {Title:'محمد إمام يروج لأحدث أعماله "شمس الزناتي" '
         , Description:"روج محمد عادل إمام لأحدث أعماله السينمائية فيلم \"شمس الزناتي\"، عبر صفحته الرسمية على إنستجرام.\n\nونشر محمد إمام صورة للزعيم عادل إمام من فيلم \"شمس الزناتي\"، وظهر محمد وهو يقف أمام مشهد من فيلم والده، وعلق قائلاً: \"بتعرف تعد لحد كام\".\n\nرغم أن صناع فيلم «شمس الزناتي» لم يعلنوا حتى الآن مصيره إلا أن التوقع الأقرب مع الاستقرار على أبطال الفيلم وتصوير جزء كبير من مشاهده التأجيل لحين الاتفاق مع مخرج آخر لاستكمال تصويره بعد اعتذار عمرو سلامة."
         ,ImgUrl:"/images/news212.webp" },
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
