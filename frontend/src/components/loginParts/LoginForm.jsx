import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Импортируем useNavigate

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Инициализируем navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Отправка запроса на сервер
      const response = await axios.post("http://localhost:8000/api/token/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Login response:", response.data); // Логируем ответ сервера

      const { access, refresh } = response.data;

      if (access && refresh) {
        // Сохраняем токены в localStorage
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        // Добавляем access-токен в заголовки всех запросов
        axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

        setSuccessMessage("Login successful!");
        setErrorMessage("");

        // Переходим на главную страницу
        navigate("/"); // Перенаправление на главную страницу

        // Проверяем, сохранились ли токены
        console.log("Stored access token:", localStorage.getItem("access_token"));
        console.log("Stored refresh token:", localStorage.getItem("refresh_token"));
      } else {
        setErrorMessage("Unexpected server response. Please try again.");
      }
    } catch (error) {
      // Логируем ошибку в консоль
      console.error("Login error:", error);

      // Обработка ошибок сервера
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("Invalid email or password. Please try again.");
        } else if (error.response.status === 400) {
          setErrorMessage("Invalid request. Please check your credentials.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      } else {
        setErrorMessage("Network error. Please check your internet connection.");
      }
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <div className="signup-link">
            <span>I don’t have an account </span>
            <Link to="/register">Sign Up</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="username"
                name="username"
                placeholder="talksfera@example.com"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="show-password-btn">
                  👁️
                </button>
              </div>
            </div>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <div className="social-login">
            <button className="google-btn">Continue with Google</button>
            <button className="apple-btn">Continue with Apple</button>
          </div>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
