// src/pages/LoginPage.js
import React from 'react';
import Header from '../components/Header/Header';
import LoginForm from '../components/loginParts/LoginForm';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
