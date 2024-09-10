import Image from 'next/image'
import Link from 'next/link';
import { title } from 'process';
import React from 'react'

interface newsProps{
  Title:string;
  Description:string;
  ImgUrl:string;
}

const singleNews: React.FC<newsProps>  = ({Title,Description, ImgUrl}) => {
  const data = {
    Title: Title,
    Description: Description,
    ImgUrl:ImgUrl
  };
  return (
    <div className='news-row'>
     <Image width={217} height={207} alt='news' src={ImgUrl} />
      <div className='news-info'>
        <div className='title'> {Title}</div>
        <p>{Description}
        <Link href={{ pathname: '/SingleNews', query:data  }}> .. عرض الخبر  </Link>
</p>
      </div>
      <br/>
    </div>

  )
}

export default singleNews