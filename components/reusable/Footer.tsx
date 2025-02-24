import React from 'react'
import {FaLessThan} from 'react-icons/fa'
import FooterLink from './FooterLink';
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
              <img
                src="images/logo.png"
                className="img-responsive center-block"
                alt="logo"
              />
            </div>
            <div className="sitemap">
              <a title="الرئيسية" href="index">
                <span> الرئيسية </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="المفضلة" href="favorites">
                <span> المفضلة </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="التصنيفات" href="categories">
                <span> التصنيفات </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="الأكثر مشاهدة" href="mostviewed">
                <span> الأكثر مشاهدة </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="أحدث الوصفات" href="latest">
                <span> أحدث الوصفات </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
              <a title="الشروط و الأحكام" href="terms">
                <span> الشروط و الأحكام </span>
                <span className='icon'><MdKeyboardArrowLeft/></span>
              </a>
            </div>
          </div>
          <div id="divCopyright" className="media">
            <div className="copyright">
              <p> جميع الحقوق محفوظة © {curentYear} لدى شركة إيجيبت لينكس </p>
              <a href="http://egyptlinx.com/" target="_blank">
                <img src="/images/elinx-logo.png" alt="egyptlinx" />
              </a>
            </div>
          </div>
        </footer>

    );
  }
export default Footer