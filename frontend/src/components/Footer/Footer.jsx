import React from "react";
import "./Footer.css";
import logoImage from "../../assets/images/footer/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiBitcoin } from "react-icons/si";

const Footer = () => {
  const pages = ["Main", "Blog", "Courses", "My Profile", "Education", "See Therapist's", "About TalkSfera"];
  const impactItems = [
    "Offer Therapy Services",
    "Teach Psychology Courses",
    "Host Mental Health Webinars",
    "Become an Affiliate",
    "Promote Your Practice",
    "Publish with TalkSfera",
    "Create a Support Hub",
  ];
  const financialItems = ["Therapy Payment Plans", "TalkSfera Reward Points", "Reload Your Wallet", "Currency Support"];
  const supportItems = [
    "Manage Your Account",
    "Track Your Bookings",
    "Affordable Plans",
    "Returns & Refunds",
    "Manage Your Learning",
    "TalkSfera Assistant",
    "Get Help",
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__contact">
          <div className="footer__logo-container">
            <img src={logoImage} alt="TalkSfera Logo" className="footer__logo" />
            <span className="footer__logo-text">TalkSfera</span>
          </div>
          <p className="footer__tagline">"Find the support you deserve"</p>
          <address className="footer__address">
            <p className="footer__info">
              <FaPhoneAlt className="footer__icon" /> +380(68)767 71 95
            </p>
            <p className="footer__info">
              <FaMapMarkerAlt className="footer__icon" /> 959 Homestead St, Eastlake, NYC
            </p>
            <p className="footer__info">
              <FaEnvelope className="footer__icon" /> support@TalkSfera.com
            </p>
          </address>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Pages</h2>
          <ul className="footer__list">
            {pages.map((page, index) => (
              <li key={index} className="footer__item">
                <a href={`/${page.toLowerCase().replace(/ /g, "-")}`} className="footer__link">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {[{ title: "Make an Impact", items: impactItems }, { title: "Financial Services", items: financialItems }, { title: "Let Us Support You", items: supportItems }].map(
          (section, index) => (
            <div key={index} className="footer__section">
              <h2 className="footer__title">{section.title}</h2>
              <ul className="footer__list">
                {section.items.map((item, idx) => (
                  <li key={idx} className="footer__item">
                    <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="footer__link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2025 TalkSfera. All Rights Reserved.</p>
        <div className="footer__payments">
          <span className="footer__icon footer__icon--mastercard">
            <SiMastercard />
          </span>
          <span className="footer__icon">
            <SiVisa />
          </span>
          <span className="footer__icon">
            <SiPaypal />
          </span>
          <span className="footer__icon footer__icon--bitcoin">
            <SiBitcoin />
          </span>
        </div>
        <div className="footer__social">
          <span className="footer__social-text">Our Contacts:</span>
          {[<FaFacebookF />, <FaTwitter />, <FaInstagram />, <FaLinkedinIn />, <FaTiktok />].map((icon, idx) => (
            <span key={idx} className="footer__icon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
