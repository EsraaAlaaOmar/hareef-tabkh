import Link from 'next/link'
import React,{useRef} from 'react'
import { IoIosCloseCircleOutline  } from "react-icons/io";

import { useOnClickOutside } from 'usehooks-ts'
type menuProps={
  setshowList: () => void ;
};
const Menu = ({setshowList}:menuProps) => {
const phoneNumber =(typeof window !== 'undefined')&&localStorage.getItem("MSISDN")
  const ref = useRef(null)
  useOnClickOutside(ref, ()=>setshowList())
  return (
<>
    <div id="divMenu" className="menu-list active" ref={ref}>
      <span className='close'><IoIosCloseCircleOutline  onClick={()=>setshowList()}/></span>
        <ul className="list-unstyled">
            <li><a href="http://www.hareeftabkh.com/signin" className="na">
                <i className="far fa-user"></i><span>  {phoneNumber ?`مرحبا ${phoneNumber}` :"تسجيل الدخول"}</span></a>
                </li>
            <li><a href="http://www.hareeftabkh.com/" className="active">
                <i className="fas fa-home"></i>
             <span> الرئيسية </span></a>
             </li>
             <li><a href="/http://www.hareeftabkh.com/index?state=signin" className="na"><i className="fas fa-heart"></i> <span> المفضلة </span></a></li>
             <li><Link href="/AllVideos"><i className="fas fa-heart"></i> <span> المسابقة </span></Link></li>
             <li><Link href="/myvideos" className="na"><i className="fas fa-heart"></i> <span> فديوهاتي </span></Link></li>
             <li><a href="/http://www.hareeftabkh.com/categories" className="na"><i className="fas fa-concierge-bell"></i> <span> التصنيفات </span></a></li>
             <li><a href="/http://www.hareeftabkh.com/mostviewed" className="na"><i className="fas fa-fire"></i> <span> الأكثر مشاهدة </span></a></li>
             <li><a href="/http://www.hareeftabkh.com/latest" className="na"><i className="fas fa-utensils"></i> <span> أحدث الوصفات </span></a></li>
             <li><a href="/http://www.hareeftabkh.com/terms" className="na"><i className="fas fa-question"></i> <span> الشروط و الأحكام </span></a>
             </li><li><a href="/http://www.hareeftabkh.com/signin" className="na"><i className="fas fa-sign-out-alt"></i> <span>تسجيل الخروج</span></a></li> 
             <li><a href="unsubconfirm" className="na"><i className="fas fa-sign-out-alt"></i> <span>الغاء الاشتراك</span></a></li> 
             <ul className="list-unstyled"></ul></ul>
     
    </div>
    
 </>
  )
}

export default Menu
