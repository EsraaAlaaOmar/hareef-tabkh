import React, { ReactNode, useEffect, useState,useRef } from 'react';


import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';



import { BiGridSmall } from "react-icons/bi";


import{AiOutlineClose} from 'react-icons/ai'
import { CiUser } from "react-icons/ci";
import axios from 'axios';
import { useQuery } from 'react-query';
import Menu from './Menu';

export default function Simple() {
 const[showList, setShowList] = useState(false)
 const [Msdn,setMsdn]=useState<any>()
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value ? setMsdn(param1Value) : setMsdn((typeof window !== 'undefined')&&localStorage.getItem("MSISDN"))
    
   

  }, []);


  Msdn&& localStorage.setItem("MSISDN",Msdn)
  var removeHistory = () => {
    window && window.history.replaceState(null, '', window.location.pathname);
  };
  const clickSidebutton= ()=>{
    setShowList(!showList);
   }
  console.log(Msdn)
  
  return (
    <>
 <div className="navbar navbar-default">
        <div className="row">
            <div className=" pull-left">
                <div className="user centerY">
                </div>
            </div>
            <div className="pull-left">
                <a href="index" className="logo">
                    <img src="/images/logo.png" className="img-responsive center-block" alt="logo" />
                </a>
            </div>
            <div className=" pull-right">
                <div className="sidebar-btn centerY" onClick={()=>clickSidebutton()} >
                <BiGridSmall />

                </div>
            </div>
        </div>
    </div>
    {showList&&<Menu setshowList={clickSidebutton} />}
    </>
  );
}
