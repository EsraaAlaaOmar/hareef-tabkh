import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'محمد عبدالحافظ: سعيد بالتعاون مع حمادة هلال في المداح 5'
      , Description:"انضم محمد عبد الحافظ، إلى أسرة مسلسل \"المداح\" الجزء الخامس، بطولة حمادة هلال. وأعرب عن سعادته الكبيرة بخوض هذه التجربة، مشيراً إلى أنه التعاون الثاني له مع حمادة هلال بعد تعاونهما الناجح في مسلسل ولي العهد. كما عبر عبدالحافظ، عن امتنانه للتعامل لأول مرة مع المنتج صادق الصباح، والمؤلف أمين جمال، والمخرج المتميز أحمد سمير فرج، مؤكداً أنه سعيد بالانضمام إلى فريق عمل مميز. ويشارك في بطولة مسلسل المداح 5 مجموعة كبيرة من النجوم، من بينهم غادة عادل، خالد الصاوي، مي كساب، هبة مجدي، يسرا اللوزي، خالد سرحان، دنيا عبدالعزيز، حنان سليمان، محسن محيي الدين، أسماء أبواليزيد، وجوري بكر."
       ,ImgUrl:"/images/news145.webp"},
       {Title:'تفاصيل مسلسل "مذكرات نشال" لأحمد أمين في رمضان 2025'
         , Description:"يستعد أحمد أمين لرمضان المقبل بمسلسل \"مذكرات نشال\" والذي يشاركه فيه عدد من كبار الفنانين إلى جانب النجوم الشباب، ومن أبرزهم ركين سعد، حاتم صلاح، عبد الرحمن محمد، وتواصل الشركة المنتجة الفترة الحالية التعاقد مع بقية الفنانين المشاركين في المسلسل. مسلسل \"مذكرات نشال\" مكون من 15 حلقة، وتدور أحداثه في إطار كوميدي فانتازي، والعمل من إخراج حسام علي."
         ,ImgUrl:"/images/news146.webp"},
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
