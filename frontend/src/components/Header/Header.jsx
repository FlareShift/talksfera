import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="TalkSfera Logo" />
        <h1>TalkSfera</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#therapists">Therapist's</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#business">Business</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <select>
          <option>ENG</option>
          <option>RUS</option>
        </select>
        <button className="login-btn">Log in</button>
        <button className="cta-btn">Get started - it's free</button>
      </div>
    </header>
  );
};

export default Header;
