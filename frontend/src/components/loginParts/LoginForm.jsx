import React from "react";
import "./LoginForm.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <div className="signup-link">
            <span>I don’t have an account </span>
            <a href="/signup">Sign Up</a>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="talksfera@example.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <button type="button" className="show-password-btn">
                  👁️
                </button>
              </div>
            </div>
            <button type="submit" className="login-btn">
              Log In
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
