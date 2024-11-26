import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'سيد رجب والد أم كلثوم في فيلم “الست” ويتوفى خلال الأحداث'
      , Description:"يشارك سيد رجب في بطولة فيلم “الست”، لـ منى زكي، حيث يجسد شخصية الشيخ إبراهيم، والد كوكب الشرق أم كلثوم، ضمن عمل سينمائي يتناول جوانب من حياة أسطورة الغناء. ويقدم سيد رجب أداءً مميزًا لشخصية الشيخ إبراهيم، الذي لعب دورًا كبيرًا في تشكيل مسيرة ابنته، إلا أن الشخصية سترحل خلال أحداث الفيلم، مما يضيف عمقًا دراميًا للعمل. ويضم العمل في بطولته كل من عمرو سعد ومحمد فراج بجانب عدد كبير من ضيوف الشرف منهم أحمد حلمي وكريم عبدالعزيز، من تأليف أحمد مراد وإخراج مروان حامد."
       ,ImgUrl:"/images/news157.webp"},
       {Title:'"فقرة الساحر" مسلسل جديد لأسماء جلال وطه دسوقي'
         , Description:'شاركت أسماء جلال متابعيها على انستجرام برومو مسلسلها الجديد “فقرة الساحر”، المقرر عرضه قريبًا على إحدى المنصات الإلكترونية، المسلسل من إخراج تامر محسن. ظهر في البرومو أسماء جلال برفقة طه دسوقي وعلي قاسم في مشهد غامض، حيث تم الكشف عن لحظة إزالة غطاء كان يمنعهم من رؤية محيطهم، إلى جانب تقييد حركتهم، ورافق المشهد تعليق صوتي لطه دسوقي قائلاً: “الناس ما بيتقسموش لأغبيا وأذكيا، الناس نوعين، في ناس طماعين وفي إحنا".'

         ,ImgUrl:"/images/news158.webp" },
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
