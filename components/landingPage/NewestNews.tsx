import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'ياسمين رئيس في رمضان بـ "قتل اختياري"'
      , Description:"تعاقدت ياسمين رئيس على مسلسل 'قتل اختياري' لتخوض به موسم رمضان 2025 المقبل. وتدور أحداثه حول قضية عن الأمهات اللاتي يعانين مع أطفالهن المصابون بمتلازمة داون، وهو من تأليف محمد السوري. من ناحية أخرى بدأت ياسمين رئيس في تصوير أحدث أعمالها الدرامية مسلسل 'رقم سري' ويشاركها البطولة صدقي صخر. ويُذكر أن ياسمين رئيس شاركت رمضان الماضي بمسلسلها الناجح 'جودر' مع ياسر جلال والذي من المقرر عرض الجزء الثاني منه رمضان المقبل."

      ,ImgUrl:"/images/news93.webp"},
      {Title:'محمد فراج ينضم للسباق الرمضاني 2025 بمسلسل جديد'
        , Description:"الكل يتسابق للانضمام إلى موسم الدراما الرمضانية، واشترك في السباق الرمضاني محمد فراج بمسلسل جديد مكون من 15 حلقة ليدخل به إلى قائمة المنافسة. حيث تعاقد المؤلف محمد هشام علي على كتابة مسلسل محمد فراج الجديد، والذي يتولى إخراجه تامر نادي، وإنتاج عبد الله أبو الفتوح، وجار التعاقد مع باقي أبطال العمل خلال الفترة الحالية. ويذكر أن الفنان محمد فراج انتهى منذ فترة من تصوير مسلسل 'كتالوج'، ويشاركه البطولة فيه ريهام عبد الغفور، سماح أنور، بيومي فؤاد، ومن المقرر عرضه على إحدى المنصات الشهيرة قريباً. يُذكر أن آخر أعمال محمد فراج كانت فيلم 'السرب' بطولة أحمد السقا، شريف منير، أسر ياسين."
        ,ImgUrl:"/images/news94.webp"},
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
