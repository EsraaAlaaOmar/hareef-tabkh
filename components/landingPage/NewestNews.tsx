import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'هدى المفتي تشارك في الموسم الرمضاني 2025 بـ "80 باكو"'
      , Description:"تعاقدت هدى المفتي مؤخراً على مسلسل جديد، في أول بطولة مُطلقة، بعنوان \"80 باكو\"، ومن المقرر أن تخوض به موسم رمضان 2025. العمل مكون من 15 حلقة، من تأليف غادة عبد العال وإخراج كوثر يونس، وحتى الآن لم يتم الاستقرار على بقية فريق العمل."
       ,ImgUrl:"/images/news159.webp"},
       {Title:'انطلاق تحضيرات الجزء الثاني من فيلم شقو'
         , Description:"أعلن المنتج أحمد السبكي على حسابه على الفيسبوك عن بدء التحضيرات الأولية للجزء الثاني من فيلم شَقُّو بعنوان مبدئي 'شبنش مراكش'. وشارك السبكي صورًا جمعته بالفنانين عمرو يوسف ومحمد ممدوح، والمخرج كريم السبكي، وعلق قائلًا: 'توكلنا على الله، الشقايق ما بقوش بطولهم، واللي فات ما متش'. وكشف السبكي أن عمرو يوسف ومحمد ممدوح قد وقعا رسميًا، وأشار إلى أن الفيلم من تأليف وسام صبري، وإخراج كريم السبكي. وأوضح أن التعاقدات مع باقي النجوم لا تزال جارية، مشيرًا إلى أنه سيتم الإعلان قريبًا عن مزيد من التفاصيل حول الفيلم."
         ,ImgUrl:"/images/news160.webp" },
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
