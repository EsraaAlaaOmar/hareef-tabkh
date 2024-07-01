import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NewsData {
  ImgUrl: string;
  Description: string;
  Title: string;
}

interface SingleNewsInAllNewsProps {
  news: NewsData;
}

const SingleNewsInAllNews: React.FC<SingleNewsInAllNewsProps> = ({ news }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/SingleNews'); // Navigate to '/SingleNews' when clicked
  };

  function isValidURL(str: string): boolean {
    try {
      new URL(str);
      return true;
    } catch (error) {
      return false;
    }
  }

  const imgUrl = news?.ImgUrl;

  // Check if imgUrl is a valid absolute URL or a valid relative URL
  const isValidImgUrl = isValidURL(imgUrl) || (imgUrl && imgUrl.startsWith('/'));

  return (
    <div className='single-news-inallnews' onClick={handleClick}>
      {isValidImgUrl ? (
        <Image src={imgUrl} alt="News Image" width={500} height={300} />
      ) : (
        <p>No valid image available</p>
      )}
      <div className='title'>{news?.Title}</div>
    </div>
  );
};

export default SingleNewsInAllNews;
