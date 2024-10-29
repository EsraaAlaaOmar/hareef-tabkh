import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'آسر ياسين في رمضان 2025 بـ"الحب كله"'
      , Description:"حالة من النشاط الفني يعيشها الفنان آسر ياسين، فمع انضمامه للمنافسة الرمضانية بمسلسل 'الحب كله' والذي يتكون من 15 حلقة فقط، ومن إخراج تامر محسن. يشارك أيضًا في فيلم 'فرقة الموت' مع أحمد عز ومنة شلبي ومحمود حميدة من تأليف صلاح الجوهري وإخراج أحمد علاء الديب، وهو فيلم أكشن وإثارة، ويدور حول ضابط شرطة يتم اختياره لتكوين فرقة للقضاء على تجار المخدرات في صعيد مصر. وتدور الأحداث في فترة الأربعينيات. كما انطلق تصوير فيلم 'إن غاب القط' بطولة آسر ياسين وبمشاركة أسماء جلال والفيلم تأليف أيمن وتار وإخراج سارة نوح، والفيلم تدور أحداثه في إطار كوميدي رومانسي."
       ,ImgUrl:"/images/news119.webp"},
       {Title:'أحمد داوود يكشف عن موعد "الهوى سلطان" وبوستر دعائي جديد'
         , Description:"كشف أحمد داوود عبر حسابه على انستجرام عن موعد عرض فيلم 'الهوى سلطان' ونشر بوستر دعائي جديد، حيث ظهر فيه مع منة شلبي وأحمد خالد صالح وجيهان الشماشرجي. ومن المقرر طرح الفيلم يوم 6 نوفمبر في جميع دور العرض في مصر ويوم 14 نوفمبر في جميع الدول العربية. علق أحمد داوود على البوستر قائلًا: 'في كل لحظة، الحب والصداقة بيكتبوا قصة جديدة! هتعرفوها في فيلم 'الهوى سلطان' بجميع دور العرض يوم 6 نوفمبر في مصر ويوم 14 نوفمبر في جميع الدول العربية'."
         ,ImgUrl:"/images/news120.webp"},
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
