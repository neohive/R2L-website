import dynamic from 'next/dynamic';
import React from 'react';
const HeaderOne = dynamic(() => import('./HeaderOne'));
const HeaderTwo = dynamic(() => import('./HeaderTwo'));
const HeaderThree = dynamic(() => import('./HeaderThree'));

const Header = ({ pageTitle }) => {
  return pageTitle === 'Home Three' ? (
    <HeaderThree />
  ) : pageTitle === 'Home Two' ? (
    <HeaderTwo />
  ) : (
    <HeaderOne />
  );
};

export default Header;
