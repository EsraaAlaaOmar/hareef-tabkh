import React from 'react'
import {FaLessThan} from 'react-icons/fa'

import Image from 'next/image';


import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'
import { MdKeyboardArrowLeft } from "react-icons/md";

import Link from 'next/link';
const Footer = () => {
    let curentYear = new Date().getFullYear();
    return (
  
        <footer>
          <div id="divFooter" className="clearfix">
            <div className="logo">
              <Image 
                src="/images/logo.png"
                className="img-responsive center-block"
                alt="logo"
                width={100} height={100} 
              />
            </div>
            <div className="sitemap">
              <a title="الرئيسية" href="http://elchef.info/ ">
                <span> الرئيسية </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="المفضلة" href="http://elchef.info/favorites">
                <span> المفضلة </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="التصنيفات" href="http://elchef.info/categories">
                <span> التصنيفات </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="الأكثر مشاهدة" href="http://elchef.info/mostviewed">
                <span> الأكثر مشاهدة </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="أحدث الوصفات" href="http://elchef.info/latest">
                <span> أحدث الوصفات </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="الشروط و الأحكام" href="http://elchef.info/terms">
                <span> الشروط و الأحكام </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
            </div>
          </div>
          <div id="divCopyright" className="media">
            <div className="copyright">
              <p> جميع الحقوق محفوظة © {curentYear} لدى شركة إيجيبت لينكس </p>
              <a href="http://egyptlinx.com/" target="_blank">
                <Image  src="/images/Elinx-logo.png" alt="egyptlinx" width={200} height={200}  />
              </a>
            </div>
          </div>
        </footer>

    );
  }
export default Footer