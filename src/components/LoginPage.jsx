import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const Navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-left">
        <img alt="" src="Picture.png" />
      </div>
      <div className="login-right">
        <div className="login-right-up">
          <img alt="" src="Logo.png" />
        </div>
        <div className="login-right-mid">
          <div className="login-text-field">
            <label>Welcome back!</label>
            <label>Login to your account</label>
          </div>
          <div className="login-input-field">
            <div className="login-input-email">
              <label>E-mail</label>
              <input type="email" placeholder="john@mail.com" />
            </div>
            <div className="login-input-password">
              <label>Password</label>
              <input type="password" placeholder="" />
              <div className="login-input-password-rememberme">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right-down">
          <button onClick={() => Navigate("/home")}>
            <label>Login</label>
          </button>
          <button onClick={() => Navigate("/register")}>
            <label>Register</label>
          </button>
        </div>
      </div>
    </div>
  );
}
