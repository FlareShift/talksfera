// src/App.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
<<<<<<< HEAD
import LoginPage from './pages/LoginPage';
=======
>>>>>>> 74ce200 (added registration page into the site)

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sample/')
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Router>  {/* Оборачиваем все в Router для маршрутизации */}
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Главная страница */}
        <Route path="/register" element={<RegisterPage />} />  {/* Страница регистрации */}
<<<<<<< HEAD
        <Route path="/login" element={<LoginPage />} />  {/* Страница логина */}
=======
>>>>>>> 74ce200 (added registration page into the site)
      </Routes>
    </Router>
  );
}

export default App;
