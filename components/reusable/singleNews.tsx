import Image from 'next/image'
import React from 'react'

const singleNews = () => {
  return (
    <div className='news-row'>
     <Image width={288} height={379} alt='news' src='/images/salah.png' />
      <div className='news-info'>
        <div className='title'>صلاح مستمر فى ليفربول</div>
        <p>شدد أندي روبرتسون ظهير ليفربول على أن زميله محمد صلاح سيستمر مع الفريق هذا الموسم، وسط شائعات انتقاله للدوري السعودي.
وكان قد ارتبط اسم صلاح بالانتقال إلى اتحاد جدة وأشار يورجن كلوب المدير الفني إلى استمرار نجم الفريق ولا نية لبيعه.
وقال روبرتسون في تصريحات لشبكة سكاي سبورتس:  &quot;; شائعات انتقال صلاح للسعودية؟ هذا لا يهمنا، لم نشعر بالقلق كلاعبين &quot;.
</p>
      </div>
      <br/>
    </div>

  )
}

export default singleNews