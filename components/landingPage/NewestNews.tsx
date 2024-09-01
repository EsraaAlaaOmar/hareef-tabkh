import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أحمد داش ومايان السيد في "نجوم الساحل"'
     , Description :"أعلن السيناريست محمد جلال عن بدء تصوير فيلم 'نجوم الساحل' وهو من بطولة أحمد داش ومايان السيد ومن إخراج رؤوف السيد، ويشارك في التأليف كريم يوسف. ونشر جلال صور تجمعه بأبطال العمل داش ومايان عبر حساباته الشخصية على مواقع التواصل الاجتماعي. فيلم 'نجوم الساحل' بطولة أحمد داش، مايان السيد، علي صبحي، أحمد عبدالحميد، علي السبع، مالك عماد، تميم حافظ ومغني الراب فليكس في أولى تجاربه التمثيلية، إضافة لمشاركة العديد من ضيوف الشرف."
      ,ImgUrl:"/images/news39.webp"},
    {Title:'انترفيو أحدث أعمال رنا رئيس وميدو عادل'
,Description:"انتهت رنا رئيس من تصوير أحدث أعمالها (انترفيو) وبدأت احدى المنصات الشهيرة في الترويج للمسلسل بنشر البرومو الخاص به على انستجرام. وتحكي قصة المسلسل عن علاقة حب بين شاب وفتاة 'رنا رئيس وخالد شباط'، كما أن تلك العلاقة باءت بالفشل بسبب خلافات في وجهات النظر والطباع والعقلية، ما يجعل المشاهد في ترقب شديد حول تلك العلاقة وأحداثها. مسلسل 'إنترفيو' مكون من 10 حلقات، ويشارك في البطولة خالد شباط وميدو عادل وديانا هشام وحازم إيهاب ومحمد العمروسي وسارة نور ونور بدر وخالد جواد ومونيكا ألفونس، وعدد آخر من الفنانين وضيوف الشرف، وإخراج أحمد خالد أمين."
,ImgUrl:"/images/news40.webp"},
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
