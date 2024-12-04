import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleNews from '../reusable/singleNews';
const NewestNews = () => {
  const News =[
    {Title:'عصام عمر يعلن عن موعد طرح أحدث أعماله السينمائية'
      , Description:"صرح عصام عمر على الفيسبوك عن موعد طرح أحدث أفلامه \"البحث عن منفذ لخروج السيد رامبو\". وطرح عصام عمر البرومو الرسمي لفيلم \"البحث عن منفذ لخروج السيد رامبو\"، وعلق قائلا: \"(رامبو ) في سينمات مصر 1 يناير والعالم العربي 9 يناير..إن شاء الله تحبوه\". وتدور أحداث الفيلم حول حسن الشاب الثلاثيني الذي يعيد اكتشاف نفسه مرة أخرى، ويضطر لمواجهة مخاوف ماضيه خلال رحلته لإنقاذ كلبه وصديقه الوحيد \"رامبو\"، من مصير مجهول بعدما تورط في حادث خطير دون ذنب، ليصبح بين ليلة وضحاها مطاردًا من قبل كارم، جار حسن، وجميع أهالي الحي. الفيلم من بطولة عصام عمر، ركين سعد، أحمد بهاء، والكلب رامبو، ومعهم المخرج والكاتب خالد منصور، والمنتجون محمد حفظي و رشا حسني."

       ,ImgUrl:"/images/news167.webp"},
       {Title:'تعرف على تفاصيل دور سيد رجب في "حقي وحقك" '
         , Description:"تعاقد سيد رجب على المشاركة في مسلسل \"حقي وحقك\" مع روجينا الذي يؤدي فيه دور طليقها الذي يدخل معها في صراعات عديدة خلال الأحداث. مسلسل \"حقي وحقك\" يدور في إطار اجتماعي لايت، من تأليف محمود عزت وإخراج مي ممدوح، وجاري ترشيح والتعاقد مع النجوم المشاركين في العمل لتحديد موعد بدء التصوير."
         ,ImgUrl:"/images/news168.webp" },
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
