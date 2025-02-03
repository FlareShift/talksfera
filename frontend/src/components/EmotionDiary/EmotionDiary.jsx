import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmotionDiary.css';

export function EmotionDiary() {
  const [text, setText] = useState('');
  const [mood, setMood] = useState(5);
  const [date, setDate] = useState('');
  const [entries, setEntries] = useState([]); // Храним записи

  // 🔹 Функция обновления access-токена через refresh-токен
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) throw new Error("No refresh token found");

      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await response.json();
      if (data.access) {
        localStorage.setItem("access_token", data.access);
        console.log("🔄 Token refreshed successfully!");
        return data.access;
      } else {
        console.error("⚠️ Failed to refresh token:", data);
      }
    } catch (error) {
      console.error("❌ Error refreshing token:", error);
    }
    return null;
  };

  // 🔹 Функция загрузки записей эмоций
  useEffect(() => {
    const fetchEntries = async () => {
      let token = localStorage.getItem("access_token");
      if (!token) token = await refreshAccessToken(); // Обновляем токен при необходимости

      fetch('http://127.0.0.1:8000/api/emotions/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("⚠️ Fetch error:", err));
    };

    fetchEntries();
  }, []);

  // 🔹 Функция добавления новой записи
  const addEntry = async () => {
    if (text.trim() && mood !== '' && date) {
      let token = localStorage.getItem("access_token");
      if (!token) token = await refreshAccessToken(); // Обновляем токен перед отправкой запроса

      const newEntry = { note: text, mood, date };

      console.log("📤 Sending request with token:", token);

      fetch('http://127.0.0.1:8000/api/note/emotions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newEntry),
      })
      .then((res) => {
        if (res.status === 401) {
          console.error("⚠️ Unauthorized! Token might be expired.");
          return refreshAccessToken().then(newToken => {
            if (newToken) {
              return fetch('http://127.0.0.1:8000/api/note/emotions/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${newToken}`,
                },
                body: JSON.stringify(newEntry),
              });
            } else {
              throw new Error("Failed to refresh token, user needs to re-login.");
            }
          });
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setEntries([...entries, data]);
        setText('');
        setMood(5);
        setDate('');
        console.log("✅ Entry added successfully:", data);
      })
      .catch((err) => console.error("❌ Error adding entry:", err));
    }
  };

  return (
    <div className="emotion-mood-diary">
      <h2>Дневник эмоций и настроения</h2>
      <div className="entry-inputs">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Запишите свои мысли и эмоции..."
          className="emotion-diary-textarea"
        />
        <div className="mood-scale">
          <label>Выберите настроение (0 - Плохое, 10 - Отличное):</label>
          <div className="mood-slider-container">
            <input
              type="range"
              min="0"
              max="10"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="mood-range"
            />
            <span className="mood-value">{mood}</span>
          </div>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date-input"
        />
      </div>

      <div className="button-group">
        <button onClick={addEntry} className="add-entry-button">
          Добавить запись
        </button>

        <div className="history-button">
          <Link to="/emotion-history" className="history-link">
            <button className="add-entry-button">История записей</button>
          </Link>
        </div>
      </div>

      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.date}: {entry.mood} - {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmotionDiary;
