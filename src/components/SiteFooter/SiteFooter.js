import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  exploreList,
  social,
  email,
  tel,
  officeAddress,
  about,
  link,
  copyrightYear,
  bottomLogo,
  footerBg,
} = footerData;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <Container>
        <div className="site-footer__top">
          <Row>
            <Col xl={1}></Col>
            <Col xl={4} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About</h3>
                <p className="footer-widget__text">{about}</p>
                {/* <a href="#" className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>Donate
                </a> */}
              </div>
            </Col>
            <Col xl={1}></Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {exploreList.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <Link href={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {exploreList.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <Link href={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Send Email</span>
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Visit Office</span>
                        {officeAddress}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
