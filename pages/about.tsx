import React from 'react'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
const About = () => {
  return (
      <div className='static-pages'>\
          <Navbar />
          <div className='page-hierarchy'>
            <span className='parent'>
            الرئيسية 
            <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
            </span>
            <span className='child'>الشروط والأحكام</span>

          </div>
          <p>
          لو شايف نفسك موهوب دي فرصتك! فنك وموهبتك مش مجرد هواية! في ايديك دلوقتي تطلع للنور. حمِل فيديوهات لموهبتك وشاركها مع الناس..  اطلب #37# دلوقتي أو زور اللينك للاشتراك من خلاله في خدمة لو موهوب. مع اورنج، أكتر حد موهوب شركة اورنج هتنتج له شو كامل و دقائق كتير!  مش كدا و بس.. هتقدر تشارك فيديوهاتك مع صحابك و أقاربك و كمان هتقدر تصوت للمشتركين. أول 3 أيام مجاناً وبعدين 1.5 ج في اليوم. متضيعش الفرصة!   
          </p>
          <Footer />
      </div>
  )
}

export default About