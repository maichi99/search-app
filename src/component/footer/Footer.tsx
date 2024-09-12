import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__banner"></div>
      <div className="footer-container__content">
        <div className="footer-container__content-nav">
          <p className="footer-container__content-nav-title">Navigation</p>
          <div className="footer-container__content-nav-item">
            <p>Home</p>
            <p>About us</p>
            <p>Our teams</p>
            <p>Whitepaper</p>
            <p>Marketplace</p>
            <p>Roadmap</p>
            <p>FAQs</p>
            <p>News</p>
            <p>Community</p>
          </div>
        </div>
        <div className="footer-container__content-contact">
          <p className="footer-container__content-contact-title">Contact us</p>
          <div>
            <p>Phone: 0123456789</p>
            <p>Email: tymex-talent@tyme.com</p>
          </div>
        </div>
        <div className="footer-container__content-subcribe">
          <p className="footer-container__content-subcribe-title">
            Subcribe to receive our latest update
          </p>
          <div className="footer-container__content-subcribe-action">
            <input />
            <button>Subcribe</button>
          </div>
        </div>
      </div>
      <div className="footer-container__contact">
        <div className="container__contact--left">
          <p>©2023 Tyme - Edit. All Rights reserved.</p>
        </div>
        <div className="container__contact--right">
          <p>Security</p>
          <p>Legal</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
}
