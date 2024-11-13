import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'أحمد داش يفاجيء جمهوره بخطوبته'
      , Description:"نشر أحمد داش على حسابه على انستجرام صورة من حفل خطوبته ومكتوب على الصورة يوم 24 أكتوبر. وعلق داش على الصورة وقال: الحمد لله. وانهالت التعليقات من جمهوره ومتابعيه على الصورة وكانت بين المباركة وبين اللوم على عدم المعرفة. من ناحية اخرى يصور أحمد داش حاليًا دوره ضمن أحداث فيلم 'نجوم في الساحل'. الفيلم بطولة أحمد داش، ومايان السيد، وعلي صبحي، وأحمد عبد الحميد، وعلي السبع، ومالك عماد، وتميم حافظ ومغني الراب فليكس في أولى تجاربه التمثيلية، إضافة لمشاركة العديد من ضيوف الشرف."
       ,ImgUrl:"/images/news141.webp"},
       {Title:'أكرم حسني يستكمل نشاطه الفني ب "ألف تيتة وتيتة"'
         , Description:"يستعد أكرم حسني للمسرح من جديد حيث يلتقي بجمهوره في السعودية من خلال مسرحية \"ألف تيتة وتيتة\"، الذي يعرض ضمن فعاليات موسم الرياض. ونشر المستشار تركي آل الشيخ، عبر حسابه في موقع \"إكس\" بوستر المسرحية، التي تعرض على مسرح محمد العلي في الفترة من 21 إلى 25 نوفمبر الجاري. ويشارك أكرم حسني البطولة كل من بيومي فؤاد وميرنا جميل ومجموعة من النجوم. وقد تعاقد أكرم حسني أيضًا مؤخرا على مسلسل \"الكابتن\" من إخراج معتز التوني، ومن المقرر أن يخوض به موسم رمضان المقبل 2025."
         ,ImgUrl:"/images/news142.webp"},
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
