import AboutPage from '@/components/AboutPage/AboutPage';
import BrandOne from '@/components/BrandOne/BrandOne';
import Counters from '@/components/Counters/Counters';
import JoinOne from '@/components/JoinOne/JoinOne';
import Funding from '@/components/Funding/Funding';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import TestimonialOne from '@/components/TestimonialOne/TestimonialOne';
import React from 'react';

const About = () => {
  return (
    <div>
      <Funding></Funding>
      <Layout pageTitle="Home Three">
        <PageHeader pageTitle="About" />
        <AboutPage />
        <TestimonialOne className="about-page-testimonial" />
        <JoinOne className="join-one__about" />
        <Counters className="about-page-counter" />
        {/* <TeamOne /> */}
        <BrandOne />
      </Layout>
    </div>
  );
};

export default About;
