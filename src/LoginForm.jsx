import React, { useState } from "react";

const LoginForm = () => {
  const error = "";
  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = "user";
    const validPassword = "password";
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text"  />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"  />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
