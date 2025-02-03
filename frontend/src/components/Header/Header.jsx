// src/components/Header/Header.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import logoImage from "../../assets/images/header/logo.svg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const goToRegister = () => {
    navigate('/register');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  const generateAvatar = (name) => {
    const initials = name.split(" ").map(word => word[0].toUpperCase()).join("");
    return <div className="avatar">{initials}</div>;
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <button className="header__logo-button" onClick={goToHome}>
        <img src={logoImage} alt="TalkSfera Logo" className="header__logo-image" />
        <h1 className="header__logo-text">TalkSfera</h1>
      </button>

      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">About us</a>
          </li>
          <li className="navigation__item">
            <a href="#therapists" className="navigation__link">Therapist’s</a>
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
        {isLoggedIn ? (
          <>
            {generateAvatar("John Doe")}
            <button onClick={handleLogout} className="actions__login-button">Log out</button>
          </>
        ) : (
          <>
            <button className="actions__login-button" onClick={goToLogin}>Log in</button>
            <button className="actions__cta-button" onClick={goToRegister}>Get started - it's free</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
