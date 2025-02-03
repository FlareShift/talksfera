import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotePage from './pages/NotePage';
import MyProfile from './pages/MyProfile';
import ChatPage from './pages/ChatPage';  // Импортируем страницу чата

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
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        <Route path="/register" element={<RegisterPage />} /> {/* Страница регистрации */}
        <Route path="/login" element={<LoginPage />} /> {/* Страница логина */}
        <Route path="/note" element={<NotePage />} /> {/* Страница блокнота */}
        <Route path="/emotion-history" element={<NotePage />} /> {/* Страница истории записей */}
        <Route path="/goals-history" element={<NotePage />} /> {/* Страница истории целей */}
        <Route path="/myprofile" element={<MyProfile />} /> {/* Страница профиля */}

        {/* Обновляем маршрут для чата, добавляем параметр room */}
        <Route path="/chat/:room" element={<ChatPage />} /> {/* Маршрут с параметром room */}
      </Routes>
    </Router>
  );
}

export default App;
