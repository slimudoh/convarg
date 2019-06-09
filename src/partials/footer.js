import React from "react";
import { Link } from "react-router-dom";

import Nav from "./../partials/navigation";

export default function Footer() {
  return (
    <div className="footer main__container">
      <div className="footer__top">
        <div className="footer__top__one">
          <div className="footer__top--menu-company">
            Bridging the gap. Thinking outside the box. Leveraging Technology.
            Building Partnerships. Leading Progressive Action.
          </div>
        </div>
        <div className="footer__top--two">
          <div className="footer__top--menu-contact-add">
            3rd Floor, <br /> 42 Ajose Street, off Maryland, <br />
            Wuse II, Abuja
          </div>
          <div className="footer__top--menu-contact-phone">
            Phone: (+234) 809 662 1636
          </div>
          <div className="footer__top--menu-contact-media">
            <div>
              <img
                src={require("./../assets/img/facebook.png")}
                alt=""
                style={{ width: "11px" }}
              />
            </div>
            <div>
              <img
                src={require("./../assets/img/twitter.png")}
                alt=""
                style={{ width: "20px" }}
              />
            </div>
            <div>
              <img
                src={require("./../assets/img/linkedin.png")}
                alt=""
                style={{ width: "18px" }}
              />
            </div>
          </div>
        </div>
        <div className="footer__top--three">
          <div className="footer__top--menu-item">
            <Link to="/about">About</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="about">How it Works</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="about">Support</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="about">Contact</Link>
          </div>
        </div>
        <div className="footer__top--four">
          <div className="footer__top--menu-item">
            <Link to="register">Sign Up</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="login">Sign In</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="/">Forgot Password</Link>
          </div>
          <div className="footer__top--menu-item">
            <Link to="/">Mentors Area</Link>
          </div>
        </div>
      </div>
      <div>
        <Nav />
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--left">
          Copyright © 2019 Convarg. All rights reserved.
        </div>
        <div className="footer__bottom--right">
          Terms of Use | Privacy Policy
        </div>
      </div>
    </div>
  );
}
