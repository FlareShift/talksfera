import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // For tracking loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    try {
      // Sending data to the server for login
      const response = await axios.post("http://127.0.0.1:8000/login/token/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Save tokens in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      setSuccessMessage("Login successful!");
      setErrorMessage(""); // Clear error
    } catch (error) {
      // Handling errors
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("Invalid email or password. Please try again.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      } else {
        setErrorMessage("Network error. Please check your internet connection.");
      }
      setSuccessMessage(""); // Clear success
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <div className="signup-link">
            <span>I don’t have an account </span>
            <Link to="/register">Sign Up</Link>  {/* Use Link component */}
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
