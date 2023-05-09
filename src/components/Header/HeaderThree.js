import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";

import logo from "@/images/resources/logo-2.png";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import Funding from "../Funding/Funding";
import NavItem from "./NavItem";

const HeaderThree = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className="main-header-three clearfix">
      <Funding></Funding>
      <div className="main-header-three__menu-box clearfix">
        <nav
          className={
            scrollTop
              ? "stricky-header stricked-menu main-menu main-menu-three stricky-fixed slideInDown animated clearfix"
              : "main-menu main-menu-three slideIn animated clearfix"
          }
        >
          <div className="main-menu-three__container clearfix">
            <div className="main-menu-three__inner-upper clearfix">
              <div className="main-menu-three__logo">
                <Link href="/">
                  <a>
                    <Image src={logo.src} alt="Logo of Rights2Life" />
                  </a>
                </Link>
              </div>
              <div
                className={
                  scrollTop
                    ? "sticky-header__content main-menu-three__inner clearfix"
                    : "main-menu-three__inner clearfix"
                }
              >
                <span
                  onClick={() => toggleMenu()}
                  className="mobile-nav__toggler"
                >
                  <i className="fa fa-bars"></i>
                </span>
                <ul className="main-menu__list">
                  {navItems.map((navItem) => (
                    <NavItem key={navItem.id} navItem={navItem} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="main-menu__right main-menu__right-three"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderThree;
