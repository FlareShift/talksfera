import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>TalkSfera</h3>
          <p className="tagline">"Find the support you deserve"</p>
          <p>Hotline 24/7</p>
          <p>+380(68)767 71 95</p>
          <p>600 Kearny St, Boxtie, NYC</p>
          <p>support@TalkSfera.com</p>
        </div>

        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li>Main</li>
            <li>Blog</li>
            <li>Courses</li>
            <li>My Profile</li>
            <li>Education</li>
            <li>See Therapists</li>
            <li>About TalkSfera</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Make an Impact</h4>
          <ul>
            <li>Offer Therapy Services</li>
            <li>Teach Psychology Courses</li>
            <li>Host Mental Health Webinars</li>
            <li>Become an Affiliate</li>
            <li>Promote Your Practice</li>
            <li>Publish with TalkSfera</li>
            <li>Create a Support Hub</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Financial Services</h4>
          <ul>
            <li>Therapy Payment Plans</li>
            <li>TalkSfera Reward Points</li>
            <li>Reload Your Wallet</li>
            <li>Currency Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Let Us Support You</h4>
          <ul>
            <li>Manage Your Account</li>
            <li>Track Your Bookings</li>
            <li>Affordable Plans</li>
            <li>Returns & Refunds</li>
            <li>Manage Your Learning</li>
            <li>TalkSfera Assistant</li>
            <li>Get Help</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 TalkSfera. All Rights Reserved.</p>
        <div className="payment-icons">
          <span>Mastercard</span>
          <span>Visa</span>
          <span>PayPal</span>
          <span>Crypto</span>
        </div>
        <div className="social-icons">
          <span>FB</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
