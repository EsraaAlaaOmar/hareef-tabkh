import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'صابرين ومراد مكرم في "خانة فاضية" في رمضان 2025'
      , Description:"تواصل صابرين تصوير مشاهدها في مسلسل \"خانة فاضية\"، الذي يخرجه شادي أبو شادي، والمقرر عرضه في رمضان المقبل. وتظهر صابرين في العمل بدور طليقة مراد مكرم، ولديهما توأم غير متطابق يلعب دوره الفنانان الشابان سليم الترك وفؤاد محسن. ويضم مسلسل \"خانة فاضية\" عددًا من النجوم، منهم: صابرين، حسين فهمي، سليم الترك، مراد مكرم، أحمد فهيم، دنيا المصري، فؤاد محسن، أحمد جيكا، ميمي جمال، بالإضافة إلى عدد من ضيوف الشرف. المسلسل يتكون من 15 حلقة، وهو من تأليف أحمد رجب وإسلام شتا، وإنتاج شركة عين للإنتاج الفني."
       ,ImgUrl:"/images/news241.webp"},

       {Title:'دنيا سمير غانم في الجامعة بسبب "عايشة الدور" '
         , Description:"يواصل فريق عمل مسلسل \"عايشة الدور\", بطولة دنيا سمير غانم, تصوير مشاهد جديدة من العمل داخل إحدى الجامعات في أكتوبر.\n\nوتدور أحداث المسلسل في إطار اجتماعي مشوق, حيث تشهد الأحداث قصة حب تجمع بين الفنانة دنيا سمير غانم والفنان محمد كيلاني, الذي يشارك في بطولة العمل.\n\nويعد المسلسل من تأليف أحمد الجندي وكريم يوسف, وإخراج أحمد الجندي, ويتكون من 15 حلقة فقط.\n\nوإلى جانب دنيا سمير غانم ومحمد كيلاني, يشارك في بطولة المسلسل عدد من النجوم, من بينهم أميرة أديب, فدوى عابد, ماجد القلعي, ومحمد ثروت."
         ,ImgUrl:"/images/news242.webp" },
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
