import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'فيفي عبده تتعاقد على العتاولة الجزء الثاني'
      , Description:"أعرب أحمد السقا عن بالغ سعادته لانضمام فيفي عبده إلى أبطال الجزء الثاني من مسلسل 'العتاولة'. وصرح السقا أن انضمامها للمسلسل تشريف لهم لأن الكل يحبها وتتمتع بخفّة ظل ووجودها في اللوكيشن يضفي حيوية. يُذكر أن هذا المسلسل تعود به فيفي عبده إلى الدراما بعد غياب عامين. وشارك في الجزء الأول أحمد السقا وطارق لطفي ومي كساب ونهى عابدين وزينة وباسم سمرة، ومن تأليف هشام هلال، وإخراج أحمد خالد موسى."
      ,ImgUrl:"/images/news67.webp"},
      {Title:'هل تشارك مي عز الدين في المداح الجزء الخامس؟'
        , Description:"تداولت الفترة الماضية أنباء عن انضمام مي عز الدين لأبطال الجزء الخامس من المداح. نفى حمادة هلال هذا الخبر، وأكد أنه يتمنى انضمامها للمسلسل خصوصًا أنها من جمهوره كما صرحت له. وكشف أنه استعار بعض الأوراد من مي عز الدين ليستخدمها في أحداث المسلسل قائلًا: 'مي دي أختي ونجمة كبيرة وهي فاجئتني إنها من جمهور المداح ومعرفش هتزعل مني ولا لأ بس انا خدت أوراد منها استخدمتها في المداح'. جدير بالذكر أن الجزء الخامس من مسلسل المداح سوف يتم عرضه في الموسم الرمضاني ٢٠٢٥."

  
        ,ImgUrl:"/images/news68.webp"},
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
