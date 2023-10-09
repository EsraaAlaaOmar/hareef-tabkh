import React from 'react'
import Link from 'next/link'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import NewPagedetails from '../components/reusable/NewPagedetails'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Image from 'next/image'
import {MdSquare} from 'react-icons/md'
import NewPageItem from '../components/reusable/NewPageItem'
const SuccessStory = () => {
  return (
    < >
    <Navbar />
<div className='new-pages'>

 <div className='page-hierarchy'>
 <span className='parent'>
              <Link href='/'>
                الرئيسية 
             </Link>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
     <span className='child'>قصة نجاح  </span>
   
     <br />
     <div className='top'>
         <Image className='logo' alt='logo' width={48} height={46} src='/images/logo.png' />
         <span className='logo-text'>
         بنقربك 
         <br />
          للى يهمك
     </span>
         <div className='text'>
             <h3>قصة نجاح</h3>
             <p>رحلة ملهمة إلى عالم الفنون من الموسيقى والرسم والنحت والفاشون والكوميديا.</p>
             
         </div>
         <Image className='topImage' alt='top-image' width={1200} height={495} src='/images/qestagah.png' />
           </div>
           
           <div className='npdetails'>
             <p>هنا تلتقي بأروع الأفراد الذين تحدوا الصعاب وصنعوا لأنفسهم مسار مميز في عالم الفن. تعيش معهم تجاربهم من خلال قصصهم الملهمة، بدًءا من اللحظة الأولى التي شعروا فيها بشغفهم وحتى وصولهم إلى قمم النجاح.</p>
           </div>
    
           <div className='npItem'>
              <span className='r-icon'><MdSquare /></span> <span className='fctitle'>عبد الحليم نويرة - عازف العود- إرث يتجدد.</span>
           </div>
     <div className='flex'>
           <Image height={480} width={480} alt='cam1' src='/images/qestagah1.png' /> 
               <div className='colom'>
               <div className='npItem'>
                 عبد الحليم نويرة، العازف الموهوب وعضو فرقة&quot;فتحي قورة&quot; لم يكن مجرد عازف عادي، بل كان شخصية فنية استثنائية تركت أثر عميق في عالم الموسيقى المصرية والعربية. وإلي اليوم، يتجدد تأثيره ويستمر في إلهام الجيل الحالي والمستقبلي. منذ بدايته، استطاع نويرة أن يحدث تغيير حقيقي في فن العزف على العود. بتقنياته المبتكرة وأسلوبه الفريد، أعطى آلة العود حياة جديدة وجعلها تعبر عن مشاعر عميقة.
               </div>
               </div>
             
           </div>
           <div className='flex rtl'>
           <Image height={480} width={480} alt='cam1' src='/images/qestagah2.png' /> 
               <div className='colom'>
                 <div className='npItem'>
                              
                 امتزجت موهبته مع قدرته على التلحين، فكانت نتائجه مذهلة. أصبحت أغانيه لها تأثير طويل المدى مثل &quot; أمل حياتي&quot; التي ما زالت تحظى بشعبية واسعة. لم يقتصر تأثير نويرة على مجرد موسيقاه، بل امتد إلى مجتمعه والفنانين الناشئين. كان رمز للتجديد والإبداع، وهذا ما جعله يحتل مكانة خاصة في قلوب عشاق الموسيقى. تركزت مسيرته الفنية على العطاء والاستمرار في تقديم أفضل ما لديه. </div>
               </div>
            
           </div>

           <div className='flex'>
              <Image height={480} width={480} alt='cam1' src='/images/qestagah3.png' /> 
               <div className='colom'>
                  <div className='npItem'>
                  مما جعله قدوة للشباب الذين يسعون لتحقيق تأثير فني مستدام. باختصار، عبد الحليم نويرة هو أكثر من مجرد عازف عود، بل هو رمز للتجديد المستمر في الموسيقى والفن. إرثه يستمر في العيش من خلال أعماله الموسيقية الخالدة وتأثيره على الجيل الجديد، مما يؤكد أن الفن الحقيقي لن يموت بل يتجدد دائما.      
                 </div>
               </div>
           
           </div>
        


 </div>


   </div>
   <Footer />
   </>
  )
}

export default SuccessStory