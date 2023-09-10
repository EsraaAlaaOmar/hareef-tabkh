import React from 'react'
import {FaLessThan} from 'react-icons/fa'
import FooterLink from './FooterLink';
import Image from 'next/image';


import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
const Footer = () => {
    let curentYear = new Date().getFullYear();
  return (
      <div className='footer'>
        <Image width={48} height={48} alt="logo" src='/images/logo.png' />
      <span className='site-name'>لو موهوب</span>
      {/* <footer >Copyright &copy; Orange Egypt {curentYear}. All rights reserved </footer> */}
      <div className='links'>
     <Link  href='/'><span className='link'>عن لو موهوب</span></Link> 
     <Link  href='/'><span className='link'>شروط المسابقة</span></Link> 
     <Link  href='/'><span className='link'>الشروط والأحكام</span></Link> 
     <Link  href='/'><span className='link'>سياسة الخصوصية</span></Link> 
      </div>
      <div className='lastline'>
        <span>
        تابعنا على :
        <span className='social'><FaFacebookF /></span>
        <span className='social'><FaInstagram /></span>
        <span className='social'><FaTwitter /></span>
        <span className='social'><FaYoutube /></span>
        </span>
        <div className='left'>Copyright &copy; Orange Egypt {curentYear}. All rights reserved</div>
      </div>
         
    </div>
  )
}

export default Footer