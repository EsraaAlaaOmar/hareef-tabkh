import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import Link from 'next/link'
type FooterLinkProps = {
  name: string;
  link: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ name, link }) => {
  return (
    <Link href={`/${link}`}>
       <div className='footer-link'>
          {name} <span className='left'> <FaLessThan /></span>
        </div>
    </Link>
    
  );
};

export default FooterLink;
