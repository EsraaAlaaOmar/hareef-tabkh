import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'تغيير اسم مسلسل "ولاد الشمس" لـ"ولعة ومفتاح"'
      , Description:"استقرت الجهة المنتجة لأحدث أعمال أحمد مالك الدرامية على تغيير اسم المسلسل من 'ولاد الشمس' لـ'ولعة ومفتاح'، والمقرر عرضه في موسم رمضان 2025 المقبل. 'ولعة ومفتاح' من بطولة أحمد مالك وطه دسوقي، فكرة أحمد مالك وإخراج عصام عبد الحميد وإنتاج الشركة المتحدة للخدمات الإعلامية. مسلسل 'وِلعة ومفتاح' يُعيد أحمد مالك إلى دراما رمضان بعد غياب 3 سنوات، منذ مسلسل 'نسل الأغراب' وكذلك يعود طه دسوقي للظهور في رمضان 2025 بعد غيابه عن الموسم الماضي منذ مشاركته في مسلسل 'الصفارة' مع أحمد أمين عام 2023."
      ,ImgUrl:"/images/news75.webp"},
      {Title:'"بنسيون دلال" في دور العرض في هذا الموعد'
        , Description:"استقرت الجهة المنتجة لفيلم 'بنسيون دلال' بطولة بيومي فؤاد وعمر متولي، على طرح العمل بدور العرض تحديدًا في 10 أكتوبر المقبل. الفيلم من تأليف وإخراج شادي الرملي وحسين نيازي وبطولة بيومي فؤاد وعمر متولي ومحمود حافظ ووليد فواز ومحمد رضوان وطاهر أبو ليلة وإبرام سمير وأسامة السيد الشهير بميكا وخالد سرحان وضيفة شرف الفيلم النجمة نسرين أمين. وتدور أحداث 'بنسيون دلال' حول سيد الجدع الذي يقرر أن يخدع أبناءه الخمسة ويبيع البنسيون الذي يشاركونه في ملكيته بأوراق مزورة مدعياً أنه سيسافر للقاء المستثمرين."
        ,ImgUrl:"/images/news76.webp"},
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
