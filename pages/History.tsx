import React from 'react'
import Link from 'next/link'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import NewPagedetails from '../components/reusable/NewPagedetails'
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Image from 'next/image'
import {MdSquare} from 'react-icons/md'
import NewPageItem from '../components/reusable/NewPageItem'
const History = () => {
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
             <p> رحلة زمنية مذهلة من الفنون والآلات التقنية عبر العصور. </p>
             
         </div>
         <Image className='topImage' alt='top-image' width={1200} height={495} src='/images/history.png' />
           </div>
           
           <div className='npdetails'>
            <p>مرحبا بك في قسم التاريخ والتراث المميز، هنا، ستجد مرح نافذة مثيرة لأستكشاف رحلة زمنية مذهلة من الفنون والآلات التقنية. يهدف هذا القسم إلى إلقاء نظرة عميقة علي تطور الآلات الفنية عبر العصور وكيف أثرت عىل الثقافات والمجتمعات. سواء كنت عاشًقا للتاريخ أو مهتًما بالفنون التقنية، فإن هذا القسم سيأخذك في رحلة لا تنسى من خلال الماضي.</p>
           </div>
    
         
     <div className='flex'>
           <Image height={480} width={480} alt='cam1' src='/images/history1.png' /> 
                      <div className='colom'>
                            <div className='npItem'>
                                <span className='r-icon'><MdSquare /></span> <span className='fctitle'>رحلة الألحان من الشرق إلى الغرب </span><br/>
                                يعود تاريخ صناعة العود إلى الآف السنين، حيث كان يعزف في أسواق الشرق وقصور العرب، وانتشر إلى الأندلس وبلاد البحر األبيض المتوسط. كل منطقة أضفت لهذه الآلة لمسة تفريدية، مما أثرى التراث الموسيقي بلمساتها المميزة.
                            </div>
                    </div>
             
           </div>
           <div className='flex rtl'>
           <Image height={480} width={480} alt='cam1' src='/images/history2.png' /> 
               <div className='colom'>
               <div className='npItem'>
                                <span className='r-icon'><MdSquare /></span> <span className='fctitle'>التحديات والتطورات في عالم العود</span><br/>
                                علي مر العصور، شهدت صناعة العود تطورات ملحوظة، من تغيرات في التصميم وحتى تبني تقنيات حديثة. ومع ذلك، بقيت قيمة الأصالة والفنون التقليدية جوهر لهذه الآلة، وأصبحت تحفظ تراثا غنًيا.
                 </div>
            
           </div>

           <div className='flex'>
              <Image height={480} width={480} alt='cam1' src='/images/history3.png' /> 
               <div className='colom'>
                      <div className='npItem'>
                                <span className='r-icon'><MdSquare /></span> <span className='fctitle'>إلي الغد: العود ومستقبل الموسيقى</span><br/>
                                مع التقنيات الحديثة، يمكن للعود أن يستمر في تحديث نفسه دون فقدان هويته. يتحدى صناع العود والموسيقيون الحدود، مما يشير إلى أن الآلة مستقبل مشرق في عالم الموسيقى الحديثة.
                      </div>
               </div>
           
           </div>
        


 </div>


              </div>
              </div>
   <Footer />
   </>
  )
}

export default History