import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'جيهان خليل تنضم لأبطال مسلسل "شهادة معاملة أطفال" لـ هنيدي '
      , Description:"انضمت جيهان خليل لأبطال مسلسل \"شهادة معاملة أطفال\" بطولة محمد هنيدي، وتأليف محمد سليمان عبد المالك وإخراج وائل فرج، والمقرر طرحه في شهر رمضان المقبل 2025. مسلسل شهادة معاملة أطفال من تأليف محمد سليمان عبد المالك وإخراج وائل فرج وإنتاج شركة united studios، وبطولة محمد هنيدى، صبرى فواز، سما إبراهيم، محمود حافظ وعدد آخر من الفنانين مقرر الإعلان عن أسمائهم خلال الأيام المقبلة، وتدور الأحداث فى إطار كوميدي حيث يجسد هنيدى شخصية محامى يواجه العديد من المواقف والمفارقات الكوميدية."

       ,ImgUrl:"/images/news189.webp"},
       {Title:'أحمد مالك يبدأ تصوير مسلسل "ولاد الشمس" في هذا الموعد'
         , Description:'يستعد أحمد مالك اليوم لتصوير اولى مشاهد مسلسله الجديد يحمل "ولاد الشمس". وهو من المسلسلات المقرر عرضها في موسم رمضان 2025. يتكون المسلسل من 12 حلقة فقط. مسلسل "ولاد الشمس" بطولة أحمد مالك، وطه الدسوقي. والمسلسل فكرة أحمد مالك، إنتاج المتحدة للخدمات الإعلامية، والمنتج هاني عبدالله، إخراج شادي عبدالسلام، وتأليف مهاب طارق. يُذكر أن آخر أعمال أحمد مالك هو مشاركته في مسلسل “مطعم الحبايب”، بالتعاون مع هدى المفتي، والذي عرض مؤخرا على إحدى المنصات الرقمية.'
         ,ImgUrl:"/images/news190.webp" },
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
