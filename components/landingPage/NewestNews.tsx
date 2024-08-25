import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أحمد العوضي ونسرين أمين في "فهد البطل" رمضان 2025'
     , Description :"تعاقدت نسرين أمين على المشاركة في بطولة مسلسل 'فهد البطل' مع أحمد العوضي، ومن المقرر عرضه في موسم الدراما الرمضانية 2025، المسلسل من تأليف محمود حمدان، وإخراج محمد عبد السلام، وتدور أحداثه في إطار شعبي واجتماعي حيث تؤدي نسرين شخصية 'راوية'، وهي فتاة تعيش حياة مليئة بالتحديات وتعكس الظروف الصعبة التي تمر بها الكثير من الفتيات في المجتمع."
      ,ImgUrl:"/images/news29.webp"},
    {Title:'بعد نجاحه في رمضان "سر إلهي" يتصدر قائمة الأكثر مشاهدة على إحدى المنصات الشهيرة '
,Description:'انضم مسلسل "سر إلهي" إلى قائمة الأكثر مشاهدة على منصة "Watch It"، وذلك بعد نجاحه في رمضان الماضي. المسلسل ينتمي لنوعية المسلسلات ذات الـ 15 حلقة وهو من بطولة روجينا ومحمد ثروت وأحمد مجدي، ومي سليم، ورنا رئيس، ونهى عابدين. ومن تأليف أمين جمال، وإخراج رؤوف عبد العزيز. وتدور أحداث المسلسل في إطار اجتماعي شعبي، مليء بالتشويق، حيث يحكي العمل، قصة نصرة التي تواجه الحياة بمفردها بعد غدر أقرب الأشخاص إليها، وتقرر الانتقام ممن ظلمها.'
,ImgUrl:"/images/news30.webp"},
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
