import Link from 'next/link'
import React,{useRef} from 'react'

import { useOnClickOutside } from 'usehooks-ts'
const Menu = ({setshowList}) => {
const phoneNumber =(typeof window !== 'undefined')&&localStorage.getItem("MSISDN")
  const ref = useRef(null)
  useOnClickOutside(ref, ()=>setshowList(false))
  return (
<>
    <div id="divMenu" className="menu-list active" ref={ref}>
        <ul className="list-unstyled">
            <li><a href="#" className="na">
                <i className="far fa-user"></i><span>  {phoneNumber ?`مرحبا ${phoneNumber}` :"تسجيل الدخول"}</span></a>
                </li>
            <li><a href="index" className="active">
                <i className="fas fa-home"></i>
             <span> الرئيسية </span></a>
             </li>
             <li><a href="/favorites" className="na"><i className="fas fa-heart"></i> <span> المفضلة </span></a></li>
             <li><Link href="/AllVideos"><i className="fas fa-heart"></i> <span> المسابقة </span></Link></li>
             <li><Link href="/myvideos" className="na"><i className="fas fa-heart"></i> <span> فديوهتي </span></Link></li>
             <li><a href="categories" className="na"><i className="fas fa-concierge-bell"></i> <span> التصنيفات </span></a></li>
             <li><a href="mostviewed" className="na"><i className="fas fa-fire"></i> <span> الأكثر مشاهدة </span></a></li>
             <li><a href="latest" className="na"><i className="fas fa-utensils"></i> <span> أحدث الوصفات </span></a></li>
             <li><a href="terms" className="na"><i className="fas fa-question"></i> <span> الشروط و الأحكام </span></a>
             </li><li><a href="signout" className="na"><i className="fas fa-sign-out-alt"></i> <span>تسجيل الخروج</span></a></li> 
             <li><a href="unsubconfirm" className="na"><i className="fas fa-sign-out-alt"></i> <span>الغاء الاشتراك</span></a></li> 
             <ul className="list-unstyled"></ul></ul>
     
    </div>
    
 </>
  )
}

export default Menu
