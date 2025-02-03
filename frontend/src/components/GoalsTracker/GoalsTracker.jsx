import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GoalsTracker.css";

export function GoalsTracker() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [priority, setPriority] = useState("Средний");
  const [dueDate, setDueDate] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  // 🔹 Функция обновления access-токена
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

  // 🔹 Функция загрузки целей
  useEffect(() => {
    const fetchGoals = async () => {
      let token = localStorage.getItem("access_token");
      if (!token) token = await refreshAccessToken();

      if (!token) {
        console.error("❌ Нет access_token! Пользователь должен перезайти.");
        return;
      }

      fetch("http://127.0.0.1:8000/api/note/goals/", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(async (res) => {
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Ошибка ${res.status}: ${errorText}`);
          }
          return res.json();
        })
        .then((data) => setGoals(data))
        .catch((err) => console.error("⚠️ Fetch error:", err));
    };

    fetchGoals();
  }, []);

  // 🔹 Функция добавления новой цели
  const addGoal = async () => {
    if (!goal.trim()) {
      console.error("⚠️ Ошибка: цель не может быть пустой!");
      return;
    }

    let token = localStorage.getItem("access_token");
    if (!token) token = await refreshAccessToken();

    if (!token) {
      console.error("❌ Нет access_token! Пользователь должен перезайти.");
      return;
    }

    // 🛠 Конвертация "Средний" -> "medium"
    const priorityMap = {
      "Высокий": "high",
      "Средний": "medium",
      "Низкий": "low",
    };

    const newGoal = {
      title: goal.trim(),
      priority: priorityMap[priority], // ✅ Теперь Django получит правильное значение
      date: dueDate || null,
      comment: comment.trim(),
    };

    console.log("📤 Отправляем данные:", newGoal);

    fetch("http://127.0.0.1:8000/api/note/goals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newGoal),
    })
      .then(async (res) => {
        if (!res.ok) {
          if (res.status === 401) {
            console.error("⚠️ Unauthorized! Token might be expired.");
            const newToken = await refreshAccessToken();
            if (newToken) {
              return fetch("http://127.0.0.1:8000/api/note/goals/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${newToken}`,
                },
                body: JSON.stringify(newGoal),
              });
            } else {
              throw new Error("Failed to refresh token, user needs to re-login.");
            }
          }
          const errorText = await res.text();
          throw new Error(`Ошибка ${res.status}: ${errorText}`);
        }
        return res.json();
      })
      .then((data) => {
        setGoals([...goals, data]);
        setGoal("");
        setPriority("Средний");
        setDueDate("");
        setComment("");
        console.log("✅ Goal added successfully:", data);
      })
      .catch((err) => console.error("❌ Ошибка добавления цели:", err));
  };

  return (
    <div className="goals-tracker">
      <h2>Цели и достижения</h2>
      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Введите цель..."
        className="input-field"
      />
      <select
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
        className="input-field"
      >
        <option value="Высокий">Высокий</option>
        <option value="Средний">Средний</option>
        <option value="Низкий">Низкий</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="input-field"
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Комментарий..."
        className="input-field"
      />
      <button onClick={addGoal} className="add-goal-btn">
        Добавить цель
      </button>

      <ul>
        {goals.map((g) => (
          <li key={g.id}>
            {g.title} - {g.priority} - {g.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsTracker;
