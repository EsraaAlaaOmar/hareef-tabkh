import React from 'react'
import Link from 'next/link'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import NewPagedetails from '../../components/reusable/NewPagedetails'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Image from 'next/image'
import {MdSquare} from 'react-icons/md'
import NewPageItem from '../../components/reusable/NewPageItem'
import { useSearchParams } from 'next/navigation';
interface storyType {
  id:string,
  title:string,
  p1:string,
  image1:string,
  p2:string,
  image2:string,
  p3:string,
  image3:string,
}
const SuccessStory = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  console.log(id);
 var storiesData=[{
  id:"1",
  title:'عبد الحليم نويرة - عازف العود- إرث يتجدد',
  p1:'عبد الحليم نويرة، العازف الموهوب وعضو فرقة"فتحي قورة" لم يكن مجرد عازف عادي، بل كان شخصية فنية استثنائية تركت أثر عميق في عالم الموسيقى المصرية والعربية. وإلي اليوم، يتجدد تأثيره ويستمر في إلهام الجيل الحالي والمستقبلي. منذ بدايته، استطاع نويرة أن يحدث تغيير حقيقي في فن العزف على العود. بتقنياته المبتكرة وأسلوبه الفريد، أعطى آلة العود حياة جديدة وجعلها تعبر عن مشاعر عميقة.',
  image1:"qestagah1",
  p2:'امتزجت موهبته مع قدرته على التلحين، فكانت نتائجه مذهلة. أصبحت أغانيه لها تأثير طويل المدى مثل " أمل حياتي" التي ما زالت تحظى بشعبية واسعة. لم يقتصر تأثير نويرة على مجرد موسيقاه، بل امتد إلى مجتمعه والفنانين الناشئين. كان رمز للتجديد والإبداع، وهذا ما جعله يحتل مكانة خاصة في قلوب عشاق الموسيقى. تركزت مسيرته الفنية على العطاء والاستمرار في تقديم أفضل ما لديه.',
  image2:"qestagah2",
  p3:'مما جعله قدوة للشباب الذين يسعون لتحقيق تأثير فني مستدام. باختصار، عبد الحليم نويرة هو أكثر من مجرد عازف عود، بل هو رمز للتجديد المستمر في الموسيقى والفن. إرثه يستمر في العيش من خلال أعماله الموسيقية الخالدة وتأثيره على الجيل الجديد، مما يؤكد أن الفن الحقيقي لن يموت بل يتجدد دائما.',
  image3:"qestagah3",
 },
 {
  id:"2",
  title:'محمود مختار.. عملاق النحت المصر',
  p1:'ان محمود مختار من أوائل الطلاب الذين التحقوا بمدرسة الفنون الجميلة بالقاهرة، ثم سافر إلى باريس حيث أذهل أساتذته بموهبته الفذة. وقد تميز أسلوبه النحتي بدمج العناصر المصرية القديمة بالطراز الحديث، مما أضفى على أعماله طابعًا أصيلًا ومميزًا.',
  image1:"qestagah4",
  p2:'<span class="fctitle" >اشتهر محمود مختار بعدة أعمال خالدة، من أبرزها</span><br/><span class="fctitle" >تمثال نهضة مصر:</span> يعتبر هذا التمثال أيقونة للفن المصري الحديث، ويعبر عن روح التحرر والكفاح التي سادت مصر بعد ثورة 1919. <br/><span class="fctitle" >تماثيل سعد زغلول:</span> قام مختار بنحت عدة تماثيل للزعيم المصري سعد زغلول، تعكس قوته وشخصيته القيادية. <br/><span class="fctitle" >ابن البلد:</span> يصور هذا التمثال الفلاح المصري بكل بساطته وقوته، وهو يعتبر تحية للصمود والعزيمة الشعبية. <br/>حاملة الجرار: تجسيد رائع للمرأة المصرية بجمالها وقوتها، وهي تحمل إناء مملوءًا بالماء، رمزًا للحياة والعطاء.<br/><span class="fctitle" >رياح الخماسين:</span> يصور هذا التمثال قوة الطبيعة وعنفوانها، وهو عمل فني يثير الإعجاب والتأمل.<br/>كاتمة الأسرار:تمثال يرمز إلى الحكمة والصمت، ويعبر عن عمق الحضارة المصرية.',
  image2:"qestagah5",
  p3:'يعد محمود مختار فنانًا استثنائيًا ترك بصمة واضحة في تاريخ الفن المصري. فقد أسس مدرسة نحتية جديدة، وألهم أجيالًا من الفنانين. ولا يزال أعماله تحظى بإعجاب وتقدير كبيرين حتى يومنا هذا.<br/>  توفي محمود مختار في عام 1934، تاركًا خلفه إرثًا فنيًا غنيًا. ولتخليد ذكراه، تم إنشاء متحف باسمه بالقاهرة، يضم مجموعة كبيرة من أعماله وأرشيفه الشخصي.',
  image3:"qestagah6",
 }
]
var findeddata = storiesData?.find((story:storyType) =>story?.id == id)
var otherStories:storyType[] =storiesData.filter((story) =>story.id!== id)
var renderedOtherStories=otherStories.map((story:storyType) =><div key={story.id}><Link href={`/SuccessStory/${story.id}`}>{story.title}</Link><br/></div>)

return (
    < >
    <Navbar />
<div className='new-pages page container'>

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
              <span className='r-icon'><MdSquare /></span> <span className='fctitle'>{findeddata?.title}</span>
           </div>
     <div className='flex'>
           <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image1}.png`}/> 
               <div className='colom'>
               <div className='npItem'  dangerouslySetInnerHTML={{ __html: findeddata?.p1  || '' }}/>
            
               </div>
             
           </div>
           <div className='flex rtl'>
           <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image2}.png`} /> 
               <div className='colom'>
               <div className='npItem'  dangerouslySetInnerHTML={{ __html: findeddata?.p2 || '' }}/>
               </div>
            
       

           <div className='flex'>
              <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image3}.png`} /> 
               <div className='colom'>
                  <div className='npItem' dangerouslySetInnerHTML={{ __html: findeddata?.p3 || '' }}/>
            
                 </div>
               </div>
      
           </div>
        
           <div className='moreStories'>المزيد من قصص النجاح

{renderedOtherStories}
</div >
<br/>
 </div>


   </div>
   <Footer />
   </>
  )
}

export default SuccessStory