import React from 'react'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import NewPagedetails from '../components/reusable/NewPagedetails'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image'
import { MdSquare } from 'react-icons/md'
import NewPageItem from '../components/reusable/NewPageItem'
const FanElcamera = () => {
    return (
        < >
            <Navbar />
            <div className='new-pages'>

                <div className='page-hierarchy'>
                    <span className='parent'>
                        الرئيسية
                        <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='child'>فن الكاميرا  </span>

                    <br />
                    <div className='top'>
                        <Image className='logo' alt='logo' width={48} height={46} src='/images/logo.png' />
                        <span className='logo-text'>
                            بنقربك
                            <br />
                            للى يهمك
                        </span>
                        <div className='text'>
                            <h3>فن الكاميرا</h3>
                            <p>نصائح حول التصوير، الأضاءة، تسجيل الصوت، وتحرير الفيديو لتحسين جودة الفيديوهات الخاصة بك. </p>

                        </div>
                        <Image className='topImage' alt='top-image' width={1200} height={495} src='/images/fnelkamira-top.png' />
                    </div>

                    <NewPagedetails />
                    <div className='flex'>
                        <Image height={480} width={480} alt='cam1' src='/images/cam1.png' />
                        <div className='colom'>
                            <NewPageItem title='اختر المكان المناسب' p="قبل أن تبدأ في التسجيل، حدد مكانا يوفر إضاءة جيدة وخلفية ملائمة تعكس أسلوب الموسيقى الذي تعزفه ." />
                            <NewPageItem title='ضبط الصوت' p=" استخدم معدات صوتية جيدة لضمان جودة صوتية عالية. احرصعىل توازن الصوت بشكل جيد بين اآللة والموسيقى المصاحبة." />
                        </div>

                    </div>
                    <div className='flex rtl'>
                        <Image height={480} width={480} alt='cam1' src='/images/cam2.png' />
                        <div className='colom'>
                            <NewPageItem title='التحرير الفني' p=" استخدم برامج تحرير الفيديو لتعزيز جودة الفيديو وإضافة تأثيرات بصرية تناسب الموسيقى." />
                            <NewPageItem title='الابتكار واإلبداع' p="  قم بتجربة أفكار جديدة وأنماط موسيقية مبتكرة لجذب انتباه الجمهور وإبراز مهاراتك بشكل مميز." />
                            <NewPageItem title='نشر وترويج' p="ادعو أصدقائك وجمهورك للمشاركة والتصويت عىل أدائك." />
                        </div>

                    </div>

                    <div className='flex'>
                        <Image height={480} width={480} alt='cam1' src='/images/cam3.png' />
                        <div className='colom'>
                            <NewPageItem title='الملابس والمظهر' p="اختر ملابس تناسب الجو العام لألداء وتعكس شخصيتك الفنية." />
                            <NewPageItem title='اتقن أداءك' p="قم بممارسة الأداء مراًرا وتكراًرا حتى تصبح مرتاًحا أمام الكاميرا." />
                            <NewPageItem title='التصوير الجانبي' p=" اطلب من شخصما التصوير لك بدلا من التسجيل الذاتي للحصول عىل زوايا متعددة وأفضل إطلالة." />
                        </div>

                    </div>
                    <div className='close-text'>
                        <span className='r-icon'> <MdSquare /> </span>
                        بتطبيق هذه الأسرار واالأهتمام بالتفاصيل، ستكون لديك فرصة أفضل للبروز خلف الكاميرا والتميز في عرض موهبتك الموسيقية عىل منصة &quot;لو موهوب&quot; استمتع بالعزف وشارك إبداعك مع العالم,
                    </div>


                </div>


            </div>
            <Footer />
        </>
    )
}

export default FanElcamera