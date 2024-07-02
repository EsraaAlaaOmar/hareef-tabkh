import Image from 'next/image'
import { title } from 'process';
import React from 'react'

interface newsProps{
  Title:string;
  Description:string;
  ImgUrl:string;
}

const singleNews: React.FC<newsProps>  = ({Title,Description, ImgUrl}) => {
  return (
    <div className='news-row'>
     <Image width={288} height={379} alt='news' src={ImgUrl} />
      <div className='news-info'>
        <div className='title'> {Title}</div>
        <p>{Description}
</p>
      </div>
      <br/>
    </div>

  )
}

export default singleNews