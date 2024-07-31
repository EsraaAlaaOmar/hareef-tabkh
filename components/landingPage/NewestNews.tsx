import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[{Title: "احتفال بشرى بزواجها من نجل محمود حميدة",Description:
    "احتفلت بشرى بزفافها على خالد حميدة، نجل الفنان محمود حميدة، حيث أُقيم حفل الزفاف في الساحل الشمالي وسط الأهل والأقارب وبعض الفنانين الذين تربطهم علاقة قوية بالفنانة بشرى. وكشفت بعض المصادر المقربة من الفنانة بشرى عن وجود علاقة صداقة في الأساس منذ عامين تقريبًا، وتحولت الصداقة إلى حب أثناء اشتراكهما في مشروع فني كبير وهو رقمنة الأرشيف المصري باستخدام تقنيات الذكاء الاصطناعي. جدير بالذكر أن بشرى انفصلت عن زوجها السابق سالم هيكل منذ عام.",ImgUrl:"/images/news1.webp"},
      {Title: "مسلسلات تحجز مقعدها في رمضان 2025: أولها المداح الجزء الخامس ",Description:"على الرغم أن الموسم والسباق الرمضاني لم يبدأ بعد، إلا أن صناع الدراما بدأوا في حجز مقاعدهم بالتحضير لأعمالهم الفنية. وللمرة الخامسة على التوالي، يستغل 'المداح' نجاحه وشهرته والتفاعل الجماهيري، ليعلن حمادة هلال عن الجزء الخامس ليكون بذلك من أوائل دراما رمضان 2025. من المقرر أن يشارك في بطولة الجزء الخامس خالد سرحان وهادي خفاجة وفتحي عبد الوهاب وعدد آخر من النجوم الشباب. المسلسل من تأليف أمين جمال، وليد أبو المجد، شريف يسري، وإخراج أحمد سمير فرج",ImgUrl:"/images/news2.webp"},
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
