import bg from '@/images/backgrounds/workpackages-bg.jpg';
import Link from 'next/link';
import React from 'react';

const PageHeader = ({ pageTitle = '', header = bg }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${header.src})` }}
      ></div>
      <div className="container">
        <h2>{pageTitle}</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="color-thm-gray">/</li>
          <li>
            <span>{pageTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
