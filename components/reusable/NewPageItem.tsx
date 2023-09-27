import React from 'react'
import {MdSquare} from 'react-icons/md'
const npItem = ({title='اختر المكان المناسب', p="قبل أن تبدأ في التسجيل، حدد مكانا يوفر إضاءة جيدة وخلفية ملائمة تعكس أسلوب الموسيقى الذي تعزفه ."}) => {
    return (
        <div className='npItem'>
              <span className='r-icon'><MdSquare /></span> <span className='fctitle'> {title} </span>: {p}
    </div>
  )
}

export default npItem