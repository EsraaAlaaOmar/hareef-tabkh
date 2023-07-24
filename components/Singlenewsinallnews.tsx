import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface SinglenewsinallnewsProps {
  img: string;
  title: string;
}

const Singlenewsinallnews: React.FC<SinglenewsinallnewsProps> = ({ img, title }) => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/SingleNews');
    };
  
  return (
    <div className='single-news-inallnews'  onClick={handleClick}>
      <Image src={img} alt='صورة الخبر' width={100} height={100} style={{ width: '100%',maxWidth: '100%', height: 'auto',  }} />
      <div className='title'>{title}</div>
    </div>
  );
};

export default Singlenewsinallnews;