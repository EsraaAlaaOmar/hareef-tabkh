import React from 'react'
import {FaLessThan} from 'react-icons/fa'
import FooterLink from './FooterLink';
const Footer = () => {
    let curentYear = new Date().getFullYear();
  return (
      <div className='footer'>
      <div className='long-line'></div>
      <img className='logo' src='/images/logo.png' />
      <div>لو موهوب</div>
      <div className='short-line'></div>
      <FooterLink name="عن لو موهوب" link="/" />
      <FooterLink name="شروط المسابقة" link="/" />
      <FooterLink name="شروط و الاحكام" link="/" />
      <FooterLink name="سياسة الخصوصية" link="/" />

      <footer >Copyright &copy; Orange Egypt {curentYear}. All rights reserved </footer>
  
         
    </div>
  )
}

export default Footer