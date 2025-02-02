import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'تغيير اسم مسلسل "فات الميعاد" لـ"طلاق مصلحة"'
      , Description:"كشف محمد علي رزق، عن تغيير اسم مسلسله الجديد، والذي كان يحمل عنوان \"فات الميعاد\"، ليصبح \"طلاق مصلحة\"، والمقرر عرضه ضمن موسم الاوف سيزون لعام 2025. وأكد أنه لا يزال يواصل تصوير مشاهده ضمن أحداث العمل، مشيرًا إلى أنه لم ينتهِ بعد من التصوير. جدير بالذكر أن مسلسل \"طلاق مصلحة\" يتكون من 30 حلقة، ويشارك في بطولته أسماء أبو اليزيد، أحمد مجدي، أحمد صفوت، هاجر عفيفي، محمد أبو داوود، وآخرون، وهو من تأليف الثلاثي عاطف ناشد وإسلام أدهم وناصر عبدالحميد، وإخراج سعد هنداوي."
       ,ImgUrl:"/images/news247.webp"},

       {Title:'أشرف عبد الباقي بلوك جديد في "قلبي ومفتاحه"'
         , Description: "شارك أشرف عبد الباقي، مع جمهوره ومتابعيه، عبر صفحته على انستجرام البوستر الدعائي له في مسلسل \"قلبي ومفتاحه\"، المقرر عرضه خلال رمضان المقبل. وروج أشرف عبد الباقي لدوره في المسلسل، وعلق قائلاً: \"استنوني في عمل مختلف في رمضان 2025 .. مسلسل قلبي ومفتاحه\". وظهر بلوك جديد عما اعتاده الجمهور عليه مرتديا نظارة وبلحية. مسلسل \"قلبي ومفتاحه\" من بطولة مي عز الدين وآسر ياسين وأحمد خالد صالح وأشرف عبد الباقي ودياب وعايدة رياض وسما إبراهيم وميس حمدان وحازم سمير من تأليف تامر محسن ومها الوزير ومن إخراج تامر محسن."

         ,ImgUrl:"/images/news248.webp" },
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
