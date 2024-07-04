import React, { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
} from '@chakra-ui/react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { BsList } from 'react-icons/bs'
import{AiOutlineClose} from 'react-icons/ai'
import { CiUser } from "react-icons/ci";
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Simple() {
 const[showList, setShowList] = useState(false)
const[phoneNumber, setPhoneNumber] = useState<any>()
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  // Close the mobile menu after navigation
  };
//   useEffect(() => {
//     (typeof window !== 'undefined') && setPhoneNumber(localStorage.getItem('Msisdn'));
//   },[ (typeof window !== 'undefined') &&localStorage.getItem('Msisdn')])
//  const clearLocalStorage = () =>{
//   localStorage.clear();
//  }

  const updatePhoneNumber = () => {
    if (typeof window !== 'undefined') {
      setPhoneNumber(localStorage.getItem('Msisdn'));  
    }
  };
  setTimeout(() => {
 !phoneNumber&&updatePhoneNumber()
  },1000);
  useEffect(() => {
    updatePhoneNumber();
    // Listen for changes in the URL
    const handleRouteChange = () => {
      updatePhoneNumber();
    };

  
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setPhoneNumber(null); // clear state
  };

  return (
    <>
      
      <div className='navbar'>
      <Image
                
                width={'10'}
                height={'10'}
          alt={'logo'}
          display={'inline-block'}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAe1BMVEX/eQD/////dgD/nWf/cQD/bwD/dAD/bAD/4NH/xqn/klH/+/n/jEv/aQD/7eX/zrj/jUH/6Nz/3Mr/9/L/5db/exP/1MD/uZb/mWL/o3L/gzL/07v/pnn/iD7/fCD/son/gSj/kVr/l1v/rIT/vZ7/XwD/dRP/spL/zbAa+GtvAAAEL0lEQVRoge2X65KiOhCAIeTCLWi4Kgro6O74/k940p2goOhunbLG/ZFUzRQknXzpK63nfWKQ4CNYx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Xcf4xL9LBPP8nt0y5Nq+7geVVa/RyXpLVSdadKSZskJj+nL5HRILkKO6HU8Qe5Ho0aSrJgtVnlH+AyVcdL3GvQzSZvqwuLC3NLEoZbNYUs77lciPVXzCW38lJKof9XMb4x6aXpQQrD4VQI3NG24xTKcCqZR4QQ1EwxWaVrOJJsdDidvD6g23YezzIIfRjZCQ8iaZFlJdso39eBL7pVgqv5hgF2H+VlL7a4I+/MTWm7gtdd25alagDMDxfcVDQMLcnBeHf5K2p/HOqg10gMd4jgvfLE+broR/pEWuqHTWhnihbOosEo0YAUm8742WHmjxuX3bBaqrJcMyqG+EQp1HnLPQrIxP75fq1tTjqztbC30+ZO8VJhibpUi1y+R5nVcM7gYUVv3CKr+FbPNi0hLayGwnB9/xJ3XWHvKRWcHvdtM3IFCNcHynHXmS1yYSnrBGU8h20dMdykSQ+9XuZNwLRr2AnErL7ZUXuNASZJCSqXpNqDMjJcPKDo9Qzv7N0euMZIW4gF8hseB2q42zFYKeesatfRhLuScOGt4VJYyVEnarg4U0uuxy8wypE8cvkAu3+bACvRY4a7HoVpf6oz6/2Ry/AEywUznTF7ZIZcNFyWh3rkEAZ7/sjFwFE2HfB5zuX9ahJ1i1yAnfAEERpu5s9GQxe4cGxouZAzivIJl6cmwnbfu6fcAr3zgnte4k71vTzoiy5XsWSYx8/1ndsZAnyQbBwTM9/8C3HqG//KB/8ay3Nun5a54TWumI0r8O/FZs9dFZ/H8x4P6jGe+YTLwjH/2HN94UbFQd+NDZN4Vsa4fcyW6xUapTgKJnpQNxnz98ZdSUJElz3jGvGw49XWN1yjy0lwTlnuR+2SnU0a+kke1VjnLmO9MnbG6r7v4ih5Gs/Gq7qW2miCeoVFbRfEJ5gr2iWux3aT0FPX+rw2n6ZZYC5zbX1GAcM1HhvHQBe5nriBy57MuJ6I7EqxHFe+5no0tp+E79xwdX28plKyn5bn+fd3kxtl99KEWl7XeWvCQQR5kmS7vah09dkRj19UqTBryJd+CjsQ43zIs6wOfoWWC/XcfIyafqrtXR+r24Q2XtNrvyEYu7YSXOjuA1JQtxIY2PrVHMWhLUExotsPLUTQ07Y66X1My05j6oHrPemv/m7wfvPdYFNRgYrBPeol9/8PkxBRx8kXRu/hpfQb+1hh8igxHUhDXwq/kUv6yXfg/Br71r6dkEFBJhXZKv0D9s2/Fyhr482x4+LPvfybf6cQ8ncZobnkE4NvvOATYzP8B89dO0RmcdHrAAAAAElFTkSuQmCC"
        />
         <span className='site-name'>لوموهوب</span>
        <span className='list-big'>
          <span className='links'>
          
              <Link href='/'><span className='link'>الرئيسية</span></Link>
              <Link href='/AllVideos'><span className='link'> فيديوهات المواهب</span></Link>
              <Link href={ !phoneNumber || phoneNumber=='NA' || phoneNumber=='undefined' ?  `http://ohel.alerting.services/OrangeHE/Index.aspx?serviceID=617` :'/myvideos'}><span className='link'> فيديوهاتى </span></Link>
              <Link href='/FanElcamera'><span className='link'> فن الكاميرا </span></Link>
              <Link href='/SuccessStory'><span className='link'> قصة نجاح  </span></Link>
              <Link href='/History'><span className='link'> تاريخ وتراث </span></Link>
              <Link href='/News'><span className='link'> احدث الأخبار الفنية </span></Link>
             
              {/* {phoneNumber?
              <span className='link'>    مرحبا {phoneNumber} </span>
                  :
              <Link href='/signin'><span className='link'> 
                  <span className='icon'><CiUser /> </span>
                 
                  تسجيل الدخول
                  
                </span>
                </Link>} */}
                  <Link href='http://ohel.alerting.services/OrangeHE/Index.aspx?serviceID=617'>
              <span className='link'> {phoneNumber?
              <span className='link' aria-label="تسجيل الخروج" title="تسجيل الخروج" onClick={clearLocalStorage}>    مرحبا {phoneNumber} </span>
                  :
              <span>
                  <span className='icon'><CiUser /> </span>
                 
                  تسجيل الدخول
                  
                </span>
               
         
          
           
              }
          </span>
          </Link>
          
            </span> 
          </span>
        {showList && <span className='close-list' onClick={()=>setShowList(false)}><AiOutlineClose /> </span>}
        <span className='list-phone'>
          {showList ? <span className='links '>
            
                <Link href='/'><span className='link big-screens'>الرئيسية</span></Link>
            <Link href='/AllVideos'><span className='link'> فيديوهات المواهب</span></Link>
            <Link href={ !phoneNumber || phoneNumber=='NA' || phoneNumber=='undefined' ?  `http://ohel.alerting.services/OrangeHE/Index.aspx?serviceID=617` :'/myvideos'}><span className='link'> فيديوهاتى </span></Link>
            <Link href='/FanElcamera'><span className='link'> فن الكاميرا </span></Link>
              <Link href='/SuccessStory'><span className='link'> قصة نجاح  </span></Link>
              <Link href='/History'><span className='link'> تاريخ وتراث </span></Link>
              <Link href='/News'><span className='link'> احدث الأخبار الفنية </span></Link>
          
              </span> : <span className='list-icon' onClick={() => setShowList(true)}><BsList /></span>}
        </span>   
      </div>
    </>
  );
}
