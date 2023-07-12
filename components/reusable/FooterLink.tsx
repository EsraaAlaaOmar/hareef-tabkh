import React from 'react';
import { FaLessThan } from 'react-icons/fa';

type FooterLinkProps = {
  name: string;
  link: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ name, link }) => {
  return (
    <div className='footer-link'>
      {name} <span className='left'> <FaLessThan /></span>
    </div>
  );
};

export default FooterLink;
