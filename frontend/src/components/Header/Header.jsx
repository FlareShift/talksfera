import React from "react";
import "./Header.css";

import logoImage from "../../assets/images/header/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoImage} alt="TalkSfera Logo" className="header__logo-image" />
        <h1 className="header__logo-text">TalkSfera</h1>
      </div>

      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">About us</a>
          </li>
          <li className="navigation__item">
            <a href="#therapists" className="navigation__link">Therapist's</a>
          </li>
          <li className="navigation__item">
            <a href="#courses" className="navigation__link">Courses</a>
          </li>
          <li className="navigation__item">
            <a href="#business" className="navigation__link">Business</a>
          </li>
          <li className="navigation__item">
            <a href="#reviews" className="navigation__link">Reviews</a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <select className="actions__language-select">
          <option>ENG</option>
          <option>RUS</option>
        </select>
        <button className="actions__login-button">Log in</button>
        <button className="actions__cta-button">Get started - it's free</button>
      </div>
    </header>
  );
};

export default Header;
