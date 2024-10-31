import React from 'react'
import Link from 'next/link'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import NewPagedetails from '../../components/reusable/NewPagedetails'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Image from 'next/image'
import {MdSquare} from 'react-icons/md'
import NewPageItem from '../../components/reusable/NewPageItem'
import { useSearchParams } from 'next/navigation'
interface historyType {
    id:string,
    title:string,
    p1:string,
    image1:string,
    p2:string,
    image2:string,
    p3:string,
    image3:string,
  }
const History = () => {
    const searchParams = useSearchParams();
    const id = searchParams?.get('id');
    console.log(id);
   var historyData=[{
    id:"1",
    title:'رحلة زمنية مذهلة من الفنون والآلات التقنية عبر العصور.',
    topP:"مرحبا بك في قسم التاريخ والتراث المميز، هنا، ستجد مرح نافذة مثيرة لأستكشاف رحلة زمنية مذهلة من الفنون والآلات التقنية. يهدف هذا القسم إلى إلقاء نظرة عميقة علي تطور الآلات الفنية عبر العصور وكيف أثرت عىل الثقافات والمجتمعات. سواء كنت عاشًقا للتاريخ أو مهتًما بالفنون التقنية، فإن هذا القسم سيأخذك في رحلة لا تنسى من خلال الماضي.",
    p1:"▪ <span class='fctitle'>رحلة الألحان من الشرق إلى الغرب </span><br/> يعود تاريخ صناعة العود إلى الآف السنين، حيث كان يعزف في أسواق الشرق وقصور العرب، وانتشر إلى الأندلس وبلاد البحر األبيض المتوسط. كل منطقة أضفت لهذه الآلة لمسة تفريدية، مما أثرى التراث الموسيقي بلمساتها المميزة.",
    image1:"history1",
    p2:"▪ <span class='fctitle'>التحديات والتطورات في عالم العود</span><br/>علي مر العصور، شهدت صناعة العود تطورات ملحوظة، من تغيرات في التصميم وحتى تبني تقنيات حديثة. ومع ذلك، بقيت قيمة الأصالة والفنون التقليدية جوهر لهذه الآلة، وأصبحت تحفظ تراثا غنًيا.",
    image2:"history2",
    p3:"▪ <span class='fctitle'>إلي الغد: العود ومستقبل الموسيقى</span><br/>مع التقنيات الحديثة، يمكن للعود أن يستمر في تحديث نفسه دون فقدان هويته. يتحدى صناع العود والموسيقيون الحدود، مما يشير إلى أن الآلة مستقبل مشرق في عالم الموسيقى الحديثة.",
    image3:"history3",
   },
   {
    id:"2",
    title:'الأدوات الموسيقية في العصر الكلاسيكي: نغمات ساحرة وأصوات خالدة',
    topP:"هل تساءلت يومًا عن الموسيقى التي تسمعها في الأفلام القديمة أو في قاعات الحفلات الكبرى؟ تلك الموسيقى الرقيقة والانسجامية التي تملأ قلبك بالهدوء والسرور، هي نتاج عصر ذهبي في تاريخ الموسيقى يُعرف بالعصر الكلاسيكي.عندما نستمع إلى الموسيقى الكلاسيكية، نشعر بسحر خاص ينقلنا إلى عالم من الأناقة والجمال. ولكن ما الذي يجعل هذه الموسيقى فريدة من نوعها؟ جزء كبير من هذا السحر يكمن في الأدوات الموسيقية التي استخدمها الموسيقيون في ذلك العصر. دعونا نستكشف معًا بعضًا من أهم هذه الأدوات.",
    p1:"▪ <span class='fctitle'>البيانو: ملك الآلات</span><br/>يتميز البيانو بصوت غني ودافئ رنان يمكنه أن يعبر عن مجموعة واسعة من المشاعر، من الفرح والحماس إلى الحزن والأسى. ويمكن للبيانو أن يعزف لحنًا واحدًا أو أن يؤدي دورًا كاملًا لأوركسترا صغيرة. أصبح البيانو في العصر الكلاسيكي مركزًا للموسيقى، حيث استخدمه الموسيقيون للتأليف والتدريب والعزف المنفرد.<br/> ▪ <span class='fctitle'>الكمان: صوت الروح</span> <br/> يتميز الكمان بصوت ناعم وعذب يمكنه أن يلامس القلوب. ويمكن للكمان أن يعزف أسرع الألحان وأعقدها، كما يمكنه أن يعبر عن أعمق المشاعر. يؤدي الكمان دور النجم اللامع في الأوركسترا الكلاسيكية، حيث كان يؤدي أدوارًا حيوية في العديد من القطع الموسيقية.",
    image1:"history4",
    p2:"▪ <span class='fctitle'>الفلوت: نسمة الهواء الرقيقة</span><br/>يتميز الفلوت بصوت ناعم وحلو يشبه نسمة الهواء الرقيقة. استخدم الفلوت في الموسيقى الكلاسيكية لإضفاء لمسة من الرقة والنعومة على الألحان، كما يمكن استخدامه في عزف الألحان المنفردة. كان الفلوت أداة رفيقة للموسيقيين، حيث كان يمكن حملها بسهولة والعزف عليها في أي مكان. <br/>  ▪ <span class='fctitle'>أدوات أخرى</span><br/>بالإضافة إلى البيانو والكمان والفلوت، كانت هناك العديد من الأدوات الموسيقية الأخرى التي لعبت دورًا هامًا في العصر الكلاسيكي، مثل التشيللو، والكونترباص، والأوبوا، والكلارينيت، والقرن الفرنسي. كل أداة من هذه الأدوات لها صوتها الخاص وخصائصها الفريدة التي ساهمت في خلق الموسيقى الكلاسيكية التي نعرفها ونحبها اليوم.",
    image2:"history5",
    p3:"▪ <span class='fctitle'>وفي الختام</span><br/>الأدوات الموسيقية في العصر الكلاسيكي لم تكن مجرد أدوات لإنتاج الأصوات، بل كانت وسيلة للتعبير عن المشاعر والأفكار. لقد ساهمت هذه الأدوات في خلق تراث موسيقي غني ومتنوع لا يزال يلهمنا حتى يومنا هذا. عندما نستمع إلى الموسيقى الكلاسيكية، فإننا لا نستمع فقط إلى الألحان، بل نستمع إلى تاريخ البشرية وتطورها.",
    image3:"history6",
   },
  ]
  var findeddata = historyData?.find((history:historyType) =>history?.id == id)
  var otherHisotoyStories:historyType[] =historyData.filter((history) =>history.id!== id)
  var renderedOtherHisotoyStories=otherHisotoyStories.map((history) =><div key={history.id}><Link href={`/History/${history.id}`}>{history.title}</Link><br/></div>)
  
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
     <span className='child'>تاريخ وتراث</span>
   
     <br />
     <div className='top'>
         <Image className='logo' alt='logo' width={48} height={46} src='/images/logo.png' />
         <span className='logo-text'>
         بنقربك 
         <br />
          للى يهمك
     </span>
         <div className='text'>
             <h3>تاريخ وتراث</h3>
             <p> {findeddata?.title} </p>
             
         </div>
         <Image className='topImage' alt='top-image' width={1200} height={495} src='/images/history.png' />
           </div>
           
           <div className='npdetails'>
            <p>{findeddata?.topP}</p>
           </div>
    
         
     <div className='flex'>
           <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image1}.png`} /> 
                      <div className='colom'>
                            <div className='npItem' >
                          <span  dangerouslySetInnerHTML={{ __html: findeddata?.p1  || '' }}></span>
                            </div>
                    </div>
             
           </div>
           <div className='flex rtl'>
           <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image2}.png`} /> 
               <div className='colom'>
               <div className='npItem'>
                              
                                <span dangerouslySetInnerHTML={{ __html: findeddata?.p2 || '' }}></span>
                                            </div>
            
           </div>

           <div className='flex'>
              <Image height={480} width={480} alt='cam1' src={`/images/${findeddata?.image3}.png`}/> 
               <div className='colom'>
                      <div className='npItem'>
                              
                                <span dangerouslySetInnerHTML={{ __html: findeddata?.p3 || '' }}></span>
                                
                       </div>
               </div>
           
           </div>
        


 </div>
 <div className='moreStories'>المزيد عن التاريخ والتراث

{renderedOtherHisotoyStories}
</div >
<br/>

              </div>
        
              </div>
   <Footer />
   </>
  )
}

export default History