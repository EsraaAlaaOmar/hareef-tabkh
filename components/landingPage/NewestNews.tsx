import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'يحيى الفخراني: لم أعتزل واستعد لمسرحية جديدة'
      , Description:"بعد انتشار خبر اعتزال الفنان يحيى الفخراني وتصدر الخبر محركات البحث، نفى الفخراني خبر اعتزاله وقال أنها مُجرد شائعة، وإنه لا يهتم للشائعات ولا يُعطي لها اهتمامًا. كما أكد أنه يقوم بالاستعداد لإطلاق مسرحية جديدة على المسرح القومي، معلقًا: 'اعتزلت فين؟.. مفيش الكلام ده انا شغال علي مسرحية، والعمل مازال في مرحلة البروفات والتجهيزات'. وأضاف أنه إلى الآن لم يستعد لأي عمل درامي خاص برمضان القادم."
       ,ImgUrl:"/images/news171.webp"},
       {Title:'تعرف على موعد عرض الجزء الثالث من مسلسل "موضوع عائلي"'
         , Description:"يترقب متابعو الدراما الاجتماعية والكوميدية معرفة موعد عرض الجزء الثالث من مسلسل \"موضوع عائلي\"،وقد أعلنت بالفعل إحدى المنصات الرقمية عن موعد انطلاقه الرسمي. ومن المقرر عرضه يوم 26 ديسمبر الجاري، وسيكون العمل متاحًا بشكل حصري على منصتها باعتباره من إنتاجاتها الأصلية. كما أنه انضمت ياسمينا العبد إلى أسرة المسلسل، حيث تجسد دور شخصية جديدة تدعى \"شيماء\". المسلسل من بطولة ماجد الكدواني وطه دسوقي و محمد رضوان وياسمينا العبد وسما إبراهيم، بالإضافة إلى عدد آخر من النجوم، والمسلسل من تأليف «محمد عز الدين وكريم يوسف»، وإخراج أحمد الجندي."
         ,ImgUrl:"/images/news172.webp" },
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
