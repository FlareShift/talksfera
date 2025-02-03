import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotePage from './pages/NotePage'; // Страница с вкладками
import MyProfile from './pages/MyProfile'; // Страница профиля

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/note/')
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Router> {/* Оборачиваем все в Router для маршрутизации */}
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        <Route path="/register" element={<RegisterPage />} /> {/* Страница регистрации */}
        <Route path="/login" element={<LoginPage />} /> {/* Страница логина */}
        <Route path="/note" element={<NotePage />} /> {/* Страница блокнота */}
        <Route path="/emotion-history" element={<NotePage />} /> {/* Страница истории записей, NotePage */}
        <Route path="/goals-history" element={<NotePage />} /> {/* Новый маршрут для истории целей */}
        <Route path="/myprofile" element={<MyProfile />} /> {/* Страница профиля */}
      </Routes>
    </Router>
  );
}

export default App;
