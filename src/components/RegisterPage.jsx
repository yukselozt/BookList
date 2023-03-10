import React from "react";

export default function RegisterPage() {
  return (
    <div className="register">
      <div className="register-left">
        <img alt="" src="Picture.png" />
      </div>
      <div className="register-right">
        <div className="register-right-up">
          <img alt="" src="Logo.png" />
        </div>
        <div className="register-right-mid">
          <div className="register-text-field">
            <label>Welcome back!</label>
            <label>Login to your account</label>
          </div>
          <div className="register-input-field">
            <div className="register-input-name">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="register-input-email">
              <label>E-mail</label>
              <input type="email" placeholder="john@mail.com" />
            </div>
            <div className="register-input-password">
              <label>Password</label>
              <input type="password" placeholder="" />
            </div>
          </div>
        </div>
        <div className="register-right-down">
          <button>
            <label>Register</label>
          </button>
          <button>
            <label>Login</label>
          </button>
        </div>
      </div>
    </div>
  );
}
