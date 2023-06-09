import fundingData from '@/data/fundingData';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleFunding from './SingleFunding';

const Funding = () => {
  return (
    // <section className="gallery-page">
    <section className="funding-section">
      <Container className="funding-section__container">
        <Row className="justify-content-xl-center">
          {fundingData.map((funding) => (
            <SingleFunding key={funding.id} funding={funding} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Funding;
